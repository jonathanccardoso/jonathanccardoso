import { test } from 'node:test';
import assert from 'node:assert/strict';
import { escapeHtml, validateContact, createRateLimiter, buildNotificationEmail, LIMITS } from './contact.ts';

const valid = { name: 'Ada Lovelace', email: 'ada@example.com', company: 'Analytical', message: 'Hello, I would like to talk.', website: '' };

test('escapeHtml escapes dangerous characters', () => {
  assert.equal(escapeHtml(`<script>"a" & 'b'</script>`), '&lt;script&gt;&quot;a&quot; &amp; &#39;b&#39;&lt;/script&gt;');
});

test('validateContact accepts valid input and trims', () => {
  const r = validateContact({ ...valid, name: '  Ada  ' });
  assert.equal(r.ok, true);
  if (r.ok) assert.equal(r.data.name, 'Ada');
});

test('validateContact rejects non-objects', () => {
  assert.equal(validateContact(null).ok, false);
  assert.equal(validateContact('x').ok, false);
});

test('validateContact rejects missing/invalid fields', () => {
  for (const patch of [{ name: '' }, { email: 'nope' }, { email: 'a@b' }, { message: 'short' }]) {
    const r = validateContact({ ...valid, ...patch });
    assert.equal(r.ok, false, JSON.stringify(patch));
  }
});

test('validateContact rejects overlong fields', () => {
  assert.equal(validateContact({ ...valid, name: 'a'.repeat(LIMITS.name + 1) }).ok, false);
  assert.equal(validateContact({ ...valid, message: 'a'.repeat(LIMITS.message + 1) }).ok, false);
  assert.equal(validateContact({ ...valid, company: 'a'.repeat(LIMITS.company + 1) }).ok, false);
});

test('validateContact allows empty company and rejects non-string values', () => {
  assert.equal(validateContact({ ...valid, company: '' }).ok, true);
  assert.equal(validateContact({ ...valid, name: 123 }).ok, false);
});

test('validateContact flags honeypot', () => {
  const r = validateContact({ ...valid, website: 'http://spam' });
  assert.equal(r.ok, false);
  if (!r.ok) assert.equal(r.honeypot, true);
});

test('validateContact rejects CR/LF in single-line fields', () => {
  assert.equal(validateContact({ ...valid, name: 'a\r\nBcc: x@y.com' }).ok, false);
  assert.equal(validateContact({ ...valid, email: 'a@b.com\nBcc: x@y.com' }).ok, false);
});

test('rate limiter blocks after max within window and resets after', () => {
  const rl = createRateLimiter({ max: 2, windowMs: 1000 });
  assert.equal(rl.isLimited('1.1.1.1', 0), false);
  assert.equal(rl.isLimited('1.1.1.1', 10), false);
  assert.equal(rl.isLimited('1.1.1.1', 20), true);
  assert.equal(rl.isLimited('2.2.2.2', 20), false);
  assert.equal(rl.isLimited('1.1.1.1', 1500), false);
});

test('buildNotificationEmail escapes user input in html', () => {
  const m = buildNotificationEmail({ name: '<b>x</b>', email: 'a@b.co', company: '', message: '<img src=x onerror=1>\nline2' });
  assert.ok(!m.html.includes('<b>x</b>'));
  assert.ok(!m.html.includes('<img'));
  assert.ok(m.html.includes('&lt;img'));
  assert.ok(m.html.includes('<br>'));
  assert.ok(!/[\r\n]/.test(m.subject));
});
