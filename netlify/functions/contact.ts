import type { Handler, HandlerEvent } from '@netlify/functions';
import { buildAutoReplyEmail, buildNotificationEmail, createRateLimiter, validateContact } from './lib/contact.ts';

/**
 * Contact form endpoint. Secrets are read from server env only:
 * RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL, CONTACT_AUTOREPLY, TURNSTILE_SECRET_KEY.
 *
 * Rate limiting is in-memory and per warm function instance: best-effort only.
 * Cold starts / parallel instances reset counters; use Turnstile for stronger protection.
 */
const limiter = createRateLimiter({ max: 5, windowMs: 10 * 60 * 1000 });

const headers = { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' };
const json = (statusCode: number, body: { ok: true } | { ok: false; error: string }) => ({
  statusCode,
  headers,
  body: JSON.stringify(body),
});

async function verifyTurnstile(secret: string, token: unknown, ip: string): Promise<boolean> {
  if (typeof token !== 'string' || !token) return false;
  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret, response: token, remoteip: ip }),
    });
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}

async function sendResend(
  apiKey: string,
  payload: { from: string; to: string[]; subject: string; html: string; text: string; reply_to?: string },
): Promise<boolean> {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  return res.ok;
}

export const handler: Handler = async (event: HandlerEvent) => {
  if (event.httpMethod !== 'POST') return json(405, { ok: false, error: 'method_not_allowed' });

  const ip = event.headers['x-nf-client-connection-ip'] ?? event.headers['x-forwarded-for']?.split(',')[0]?.trim() ?? 'unknown';
  if (limiter.isLimited(ip)) return json(429, { ok: false, error: 'rate_limited' });

  let body: unknown;
  try {
    body = JSON.parse(event.body ?? '');
  } catch {
    return json(400, { ok: false, error: 'invalid_body' });
  }

  const result = validateContact(body);
  if (!result.ok) {
    // Pretend success to bots so they get no signal.
    if (result.honeypot) return json(200, { ok: true });
    return json(400, { ok: false, error: result.error });
  }

  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
  if (turnstileSecret) {
    const token = (body as Record<string, unknown>).turnstileToken;
    if (!(await verifyTurnstile(turnstileSecret, token, ip))) {
      return json(400, { ok: false, error: 'captcha_failed' });
    }
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    console.error('contact: missing RESEND_API_KEY / CONTACT_TO_EMAIL / CONTACT_FROM_EMAIL');
    return json(500, { ok: false, error: 'not_configured' });
  }

  try {
    const mail = buildNotificationEmail(result.data);
    const sent = await sendResend(apiKey, { from, to: [to], reply_to: result.data.email, ...mail });
    if (!sent) return json(502, { ok: false, error: 'send_failed' });

    if (process.env.CONTACT_AUTOREPLY === 'true') {
      // Best-effort: failure of the auto-reply must not fail the request.
      await sendResend(apiKey, { from, to: [result.data.email], ...buildAutoReplyEmail(result.data) }).catch(() => false);
    }
    return json(200, { ok: true });
  } catch (err) {
    console.error('contact: send error', err instanceof Error ? err.message : 'unknown');
    return json(502, { ok: false, error: 'send_failed' });
  }
};
