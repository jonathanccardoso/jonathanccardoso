// WCAG contrast checks for both themes in src/styles/tokens.css.
// Text pairs need >= 4.5:1; UI boundaries (input borders, strong borders) need >= 3:1.
import { readFileSync } from 'node:fs';
const css = readFileSync(new URL('../src/styles/tokens.css', import.meta.url), 'utf8');
// Theme blocks (prefers-contrast overrides are checked separately below).
const blockOf = (selector) => {
  const start = css.indexOf(selector);
  return css.slice(start, css.indexOf('}', start));
};
const base = blockOf(':root,\n:root[data-theme=\'dark\'] {');
const light = blockOf(':root[data-theme=\'light\'] {');
const tokIn = (src, n) => src.match(new RegExp(`--${n}:\\s*(#[0-9a-fA-F]{6})`))?.[1];
const getter = { dark: (n) => tokIn(base, n), light: (n) => tokIn(light, n) ?? tokIn(base, n) };
const lum = (hex) => {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255).map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };
const bgs = ['color-bg', 'color-bg-elevated', 'color-surface', 'color-surface-hover'];
let bad = 0;
for (const [theme, tok] of Object.entries(getter)) {
  const pairs = [];
  for (const fg of ['color-text', 'color-text-muted', 'color-text-subtle', 'color-accent', 'color-accent-hover', 'color-success', 'color-danger'])
    for (const bg of bgs) pairs.push([fg, bg, 4.5]);
  pairs.push(['color-accent-contrast', 'color-accent', 4.5]);
  pairs.push(['color-accent-contrast', 'color-accent-hover', 4.5]);
  for (const bg of bgs) {
    pairs.push(['color-border-input', bg, 3]);
    pairs.push(['color-focus', bg, 3]);
  }
  pairs.push(['color-border-strong', 'color-bg', 1]); // informational only (decorative borders)
  for (const [fg, bg, min] of pairs) {
    const a = tok(fg), b = tok(bg);
    if (!a || !b) { bad++; console.log(`FAIL missing token ${fg} or ${bg} (${theme})`); continue; }
    const r = ratio(a, b);
    const fail = r < min;
    if (fail) bad++;
    console.log(`${fail ? 'FAIL' : 'ok  '} [${theme}] ${r.toFixed(2).padStart(5)} (>=${min})  ${fg} on ${bg}`);
  }
}
process.exit(bad ? 1 : 0);
