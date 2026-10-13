// Post-build site validation. Run with `npm run verify` after `npm run build`.
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, relative, posix } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname;
if (!existsSync(DIST)) {
  console.error('dist/ not found. Run `npm run build` first.');
  process.exit(1);
}

const errors = [];
const fail = (page, msg) => errors.push(`${page}: ${msg}`);

const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

const files = walk(DIST);
const rel = (p) => '/' + relative(DIST, p).split('\\').join('/');
const htmlFiles = files.filter((f) => f.endsWith('.html'));

// URL path ('/pt/about/') of an html file
const urlOf = (f) => rel(f).replace(/index\.html$/, '');
const fileSet = new Set(files.map(rel));
const pages = new Map(); // url -> { html, file }
for (const f of htmlFiles) pages.set(urlOf(f), { html: readFileSync(f, 'utf8'), file: rel(f) });

const attr = (tag, name) => {
  const m = tag.match(new RegExp(`\\s${name}\\s*=\\s*("([^"]*)"|'([^']*)'|([^\\s>]+))`, 'i'));
  return m ? (m[2] ?? m[3] ?? m[4]) : null;
};
const tags = (html, name) => html.match(new RegExp(`<${name}\\b[^>]*>`, 'gi')) ?? [];
const idsOf = (html) => new Set([...html.matchAll(/\sid\s*=\s*"([^"]+)"/g)].map((m) => m[1]));
const SITE = 'https://jonathanccardoso.netlify.app';

const resolveTarget = (from, href) => {
  // returns { path, hash } for internal hrefs, or null for external/ignored
  if (/^(mailto:|tel:|javascript:|data:)/i.test(href)) return null;
  let u = href;
  if (u.startsWith(SITE)) u = u.slice(SITE.length) || '/';
  if (/^[a-z][a-z0-9+.-]*:/i.test(u) || u.startsWith('//')) return null;
  const [pathAndQuery, hash = ''] = u.split('#');
  const path = pathAndQuery.split('?')[0];
  const abs = path === '' ? from : path.startsWith('/') ? path : posix.join(posix.dirname(from + 'x'), path);
  return { path: abs, hash: decodeURIComponent(hash) };
};

const targetExists = (path) => {
  if (pages.has(path)) return true;
  if (fileSet.has(path)) return true;
  if (path.endsWith('/') && fileSet.has(path + 'index.html')) return true;
  if (!path.endsWith('/') && pages.has(path + '/')) return true;
  return false;
};

const noindexOf = (html) => tags(html, 'meta').some((t) => attr(t, 'name') === 'robots' && /noindex/i.test(attr(t, 'content') ?? ''));
const isRedirect = (html) => tags(html, 'meta').some((t) => /refresh/i.test(attr(t, 'http-equiv') ?? ''));

for (const [url, { html, file }] of pages) {
  const redirect = isRedirect(html);

  // --- links, assets, anchors ---
  for (const tag of [...tags(html, 'a'), ...tags(html, 'link'), ...tags(html, 'img'), ...tags(html, 'script'), ...tags(html, 'source')]) {
    const name = /^<a\b/i.test(tag) ? 'href' : /^<link\b/i.test(tag) ? 'href' : 'src';
    const vals = [attr(tag, name)];
    if (/^<(img|source)\b/i.test(tag)) {
      const ss = attr(tag, 'srcset');
      if (ss) vals.push(...ss.split(',').map((s) => s.trim().split(/\s+/)[0]));
    }
    if (/^<link\b/i.test(tag) && attr(tag, 'rel') === 'canonical' && url.startsWith('/404')) continue;
    for (const v of vals.filter(Boolean)) {
      const t = resolveTarget(url, v.replace(/&amp;/g, '&'));
      if (!t) continue;
      if (!targetExists(t.path)) {
        fail(url, `broken ${name} -> ${v}`);
        continue;
      }
      if (t.hash && /^<a\b/i.test(tag)) {
        const target = pages.get(t.path) ?? pages.get(t.path + '/');
        if (target && !idsOf(target.html).has(t.hash) && t.hash !== 'top') fail(url, `missing anchor #${t.hash} in ${t.path}`);
      }
    }
  }
  // CSS url() inside inline styles / <style> are served from _astro; skipped.

  if (redirect) continue; // redirect stubs: only link check applies

  // --- SEO / structure ---
  const h1 = (html.match(/<h1\b/gi) ?? []).length;
  if (h1 !== 1) fail(url, `expected exactly one <h1>, found ${h1}`);
  const titles = html.match(/<title>([^<]*)<\/title>/gi) ?? [];
  if (titles.length !== 1 || titles[0].replace(/<\/?title>/gi, '').trim() === '') fail(url, 'missing or duplicate <title>');
  const descs = tags(html, 'meta').filter((t) => attr(t, 'name') === 'description' && (attr(t, 'content') ?? '').trim());
  if (descs.length !== 1) fail(url, `expected one meta description, found ${descs.length}`);
  const canon = tags(html, 'link').filter((t) => attr(t, 'rel') === 'canonical');
  if (canon.length !== 1) fail(url, `expected one canonical, found ${canon.length}`);
  else if (url !== '/404.html' && !url.startsWith('/404') && !/^https:\/\/dev\.to\//.test(attr(canon[0], 'href') ?? '') && attr(canon[0], 'href') !== SITE + url) fail(url, `canonical ${attr(canon[0], 'href')} != ${SITE + url}`);

  const lang = attr(html.match(/<html\b[^>]*>/i)?.[0] ?? '', 'lang');
  const expected = url.startsWith('/en/') ? 'en' : 'pt-BR';
  if (lang !== expected && !url.startsWith('/404')) fail(url, `<html lang="${lang}"> expected "${expected}"`);
  if (!lang) fail(url, 'missing <html lang>');

  for (const img of tags(html, 'img')) {
    if (attr(img, 'alt') === null) fail(url, `img without alt: ${img.slice(0, 80)}`);
    // Remote (cross-posted) images have unknown dimensions; only local ones must declare them.
    if (!/^https?:/.test(attr(img, 'src') ?? '') && (!attr(img, 'width') || !attr(img, 'height'))) fail(url, `img without width/height: ${img.slice(0, 80)}`);
  }

  // hreflang reciprocity
  const alts = tags(html, 'link').filter((t) => attr(t, 'rel') === 'alternate' && attr(t, 'hreflang'));
  for (const a of alts) {
    const hl = attr(a, 'hreflang');
    if (hl === 'x-default') continue;
    const href = attr(a, 'href');
    const path = href.startsWith(SITE) ? href.slice(SITE.length) : href;
    const other = pages.get(path);
    if (!other) {
      fail(url, `hreflang ${hl} points to missing page ${path}`);
      continue;
    }
    if (path === url) continue;
    const back = tags(other.html, 'link').some(
      (t) => attr(t, 'rel') === 'alternate' && attr(t, 'hreflang') && attr(t, 'href') === SITE + url,
    );
    if (!back) fail(url, `hreflang ${hl} -> ${path} is not reciprocal`);
  }
}

// --- sitemap ---
const sitemapFiles = files.filter((f) => /sitemap-\d+\.xml$/.test(f));
const sitemapIndex = existsSync(join(DIST, 'sitemap-index.xml'));
if (!sitemapIndex || sitemapFiles.length === 0) fail('sitemap', 'sitemap-index.xml / sitemap-N.xml missing');
const locs = new Set(
  sitemapFiles.flatMap((f) => [...readFileSync(f, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])),
);
for (const [url, { html }] of pages) {
  if (url === '/404.html' || url.startsWith('/404')) continue;
  const inSitemap = locs.has(SITE + url);
  if (noindexOf(html) || isRedirect(html)) {
    if (inSitemap) fail('sitemap', `noindex/redirect page listed: ${url}`);
  } else if (!inSitemap) fail('sitemap', `missing page: ${url}`);
}
for (const loc of locs) if (!pages.has(loc.slice(SITE.length))) fail('sitemap', `lists nonexistent page ${loc}`);

// --- robots ---
const robots = existsSync(join(DIST, 'robots.txt')) ? readFileSync(join(DIST, 'robots.txt'), 'utf8') : '';
if (!/^Sitemap:\s*\S*sitemap-index\.xml/im.test(robots)) fail('robots.txt', 'does not reference the sitemap');

// --- placeholders ---
for (const f of files.filter((f) => /\.(html|xml|txt|css|js|json|svg|webmanifest)$/.test(f))) {
  const txt = readFileSync(f, 'utf8');
  const m = txt.match(/TODO|PREENCHER/);
  if (m) fail(rel(f), `contains placeholder "${m[0]}"`);
}

if (errors.length) {
  console.error(`verify: ${errors.length} problem(s)\n` + errors.map((e) => '  - ' + e).join('\n'));
  process.exit(1);
}
console.log(`verify: OK (${pages.size} html pages, ${locs.size} sitemap urls)`);
