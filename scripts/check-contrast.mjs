// WCAG contrast ratios for the main token pairs in src/styles/tokens.css (dark theme, :root block).
import { readFileSync } from 'node:fs';
const css = readFileSync(new URL('../src/styles/tokens.css', import.meta.url), 'utf8');
const root = css.split('@media')[0];
const tok = (n, src = root) => src.match(new RegExp(`--${n}:\\s*(#[0-9a-fA-F]{6})`))?.[1];
const lum = (hex) => {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255).map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };
const pairs = [];
for (const fg of ['color-text', 'color-text-muted', 'color-text-subtle', 'color-accent', 'color-accent-hover', 'color-success', 'color-danger'])
  for (const bg of ['color-bg', 'color-bg-elevated', 'color-surface', 'color-surface-hover']) pairs.push([fg, bg]);
pairs.push(['color-accent-contrast', 'color-accent']);
let bad = 0;
for (const [fg, bg] of pairs) {
  const r = ratio(tok(fg), tok(bg));
  if (r < 4.5) bad++;
  console.log(`${r < 4.5 ? 'FAIL' : 'ok  '} ${r.toFixed(2).padStart(5)}  ${fg} on ${bg}`);
}
const b = ratio(tok('color-border-strong'), tok('color-bg'));
console.log(`info ${b.toFixed(2)}  color-border-strong on bg (non-text, needs >=3 only for UI component boundaries)`);
process.exit(bad ? 1 : 0);
