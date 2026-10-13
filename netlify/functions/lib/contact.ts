/** Pure helpers for the contact function: no I/O, easy to unit-test. */

export const LIMITS = { name: 100, email: 254, company: 100, message: 5000, minMessage: 10 } as const;

export interface ContactInput {
  name: string;
  email: string;
  company: string;
  message: string;
}

export type ValidationResult =
  | { ok: true; data: ContactInput }
  | { ok: false; error: string; honeypot?: boolean };

const EMAIL_RE = /^[^\s@<>()[\],;:"\\]+@[^\s@<>()[\],;:"\\]+\.[^\s@<>()[\],;:"\\.]{2,}$/;
const LINE_BREAK_RE = /[\r\n]/;

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function validateContact(body: unknown): ValidationResult {
  if (typeof body !== 'object' || body === null || Array.isArray(body)) {
    return { ok: false, error: 'invalid_body' };
  }
  const raw = body as Record<string, unknown>;

  // Honeypot: real users never fill this hidden field.
  if (typeof raw.website === 'string' && raw.website.trim() !== '') {
    return { ok: false, error: 'spam', honeypot: true };
  }

  const fields = ['name', 'email', 'company', 'message'] as const;
  const out: Record<string, string> = {};
  for (const f of fields) {
    const v = raw[f] ?? '';
    if (typeof v !== 'string') return { ok: false, error: `invalid_${f}` };
    out[f] = v.trim();
  }

  if (!out.name || out.name.length > LIMITS.name || LINE_BREAK_RE.test(out.name)) {
    return { ok: false, error: 'invalid_name' };
  }
  if (out.email.length > LIMITS.email || LINE_BREAK_RE.test(out.email) || !EMAIL_RE.test(out.email)) {
    return { ok: false, error: 'invalid_email' };
  }
  if (out.company.length > LIMITS.company || LINE_BREAK_RE.test(out.company)) {
    return { ok: false, error: 'invalid_company' };
  }
  if (out.message.length < LIMITS.minMessage || out.message.length > LIMITS.message) {
    return { ok: false, error: 'invalid_message' };
  }
  return { ok: true, data: out as unknown as ContactInput };
}

/** Fixed-window per-key counter. In-memory: best-effort only (per warm function instance). */
export function createRateLimiter({ max, windowMs }: { max: number; windowMs: number }) {
  const hits = new Map<string, { count: number; start: number }>();
  return {
    isLimited(key: string, now: number = Date.now()): boolean {
      // Opportunistic cleanup keeps memory bounded.
      if (hits.size > 1000) {
        for (const [k, v] of hits) if (now - v.start >= windowMs) hits.delete(k);
      }
      const entry = hits.get(key);
      if (!entry || now - entry.start >= windowMs) {
        hits.set(key, { count: 1, start: now });
        return false;
      }
      entry.count += 1;
      return entry.count > max;
    },
    /** Gives one attempt back (e.g. when sending failed for a reason that is not the visitor's fault). */
    release(key: string): void {
      const entry = hits.get(key);
      if (entry && entry.count > 0) entry.count -= 1;
    },
  };
}

export function buildNotificationEmail(input: ContactInput): { subject: string; html: string; text: string } {
  const subject = `Portfolio contact: ${input.name}`.replace(/[\r\n]+/g, ' ').slice(0, 150);
  const company = input.company ? escapeHtml(input.company) : '-';
  const html =
    `<p><strong>Name:</strong> ${escapeHtml(input.name)}</p>` +
    `<p><strong>Email:</strong> ${escapeHtml(input.email)}</p>` +
    `<p><strong>Company:</strong> ${company}</p>` +
    `<p><strong>Message:</strong></p><p>${escapeHtml(input.message).replace(/\r?\n/g, '<br>')}</p>`;
  const text = `Name: ${input.name}\nEmail: ${input.email}\nCompany: ${input.company || '-'}\n\n${input.message}`;
  return { subject, html, text };
}

export function buildAutoReplyEmail(input: ContactInput): { subject: string; html: string; text: string } {
  const name = escapeHtml(input.name);
  return {
    subject: 'Thanks for your message / Obrigado pela mensagem',
    html:
      `<p>Hi ${name}, thanks for reaching out. I received your message and will reply soon.</p>` +
      `<p>Ol&aacute; ${name}, obrigado pelo contato. Recebi sua mensagem e responderei em breve.</p>`,
    text: `Hi ${input.name}, thanks for reaching out. I received your message and will reply soon.\n\nOlá ${input.name}, obrigado pelo contato. Recebi sua mensagem e responderei em breve.`,
  };
}
