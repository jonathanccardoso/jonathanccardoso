# jonathanccardoso

Professional portfolio of Jonathan Cardoso. Astro + TypeScript, static output, deployed on Netlify.

## Requirements and installation

- Node 20.18.2 (see `.nvmrc`; Astro 5 requires `^20.3.0`) and npm.

```bash
nvm use            # optional
npm install
cp .env.example .env   # only needed for the contact form (see below)
```

## Commands

| Command            | Action                                                                  |
| ------------------ | ----------------------------------------------------------------------- |
| `npm run dev`      | Dev server (http://localhost:4321). Does not run Netlify Functions      |
| `npx netlify dev`  | Astro + Netlify Functions together (needed to test the contact form)    |
| `npm run build`    | Build static site to `dist/`                                            |
| `npm run preview`  | Preview the build                                                       |
| `npm run check`    | Type-check (`astro check`)                                              |
| `npm test`         | Unit tests for the contact function logic                               |
| `npm run verify`   | Post-build site validation (run `npm run build` first, see below)       |

### `npm run verify`

`scripts/check-site.mjs` scans `dist/` and fails on: broken internal links, anchors and assets; pages without exactly one `<h1>`, a `<title>`, meta description, canonical or a correct `<html lang>`; non-reciprocal hreflang alternates; images without `alt`/`width`/`height`; pages missing from (or noindex pages present in) the sitemap; a `robots.txt` without the sitemap; leftover `TODO` / `PREENCHER` placeholders. `node scripts/check-contrast.mjs` prints WCAG contrast ratios for the design-token color pairs.

## Writing content

Content lives in `src/content/` (Astro content collections, schema in `src/content.config.ts`). Each item has a `pt` and an `en` version in `src/content/<collection>/{pt,en}/`.

### Blog articles (`src/content/blog/{pt,en}/<slug>.md` or `.mdx`)

```md
---
title: "Article title"
description: "One-sentence summary (used for SEO and cards)."
pubDate: 2026-10-13
updatedDate: 2026-11-01        # optional
lang: pt                        # must match the folder (pt | en)
category: IA
tags: [IA, Claude Code]
translationKey: my-article      # same value in both languages links the translations (language switcher + hreflang)
draft: false                    # true = not published (no page, listing or sitemap entry)
---
Markdown body...
```

- `heroImage` (optional, a path under `public/`, e.g. `/images/post.jpg`) is used as the Open Graph image; default is `/og-default.jpg`.
- Drafts: set `draft: true`; flip to `false` to publish. Drafts are excluded from every listing and from the build output.
- Translations: create the same file name in the other language folder with the same `translationKey`. If only one language exists, the language switcher falls back to the blog index and no hreflang pair is emitted.
- Tag pages (`/{lang}/blog/tag/<slug>/`) and pagination are generated automatically.

### Work case studies (`src/content/work/{pt,en}/<slug>.md`)

Frontmatter: `title`, `summary`, `lang`, `type` (`employment` | `product`), `translationKey` (required), and optionally `role`, `company`, `period`, `liveUrl`, `stack`, `featured`, `order`, `context`, `constraints`, `solution`, `decisions`, `results`, `metrics` (`[{ value, label }]`), `metricsNote`. Optional sections render only when present; the Markdown body is the main text. Do not add facts you cannot back up; `CONTENT-TODO.md` lists what the owner still has to supply.

## Structure and conventions

```
src/
  assets/        images imported by components (profile, logos/)
  components/    Header, Footer, SEO, Button, Card, Section, Container, Tag, Icon (+ icons.ts)
  data/          site.ts (social links), legacy-portfolio.json (old data, reuse later)
  i18n/          pt.ts, en.ts (UI dictionaries), index.ts (helpers)
  layouts/       BaseLayout.astro
  pages/{pt,en}/ one file per page, per language
  styles/        tokens.css (design tokens), global.css
  content/       blog/ and work/ collections ({pt,en})
  lib/           content helpers, strings
netlify/functions/  contact.ts (+ lib/, tests)
scripts/         check-site.mjs, check-contrast.mjs
public/          favicon, og-default.jpg, robots.txt
```

### Adding a page (both languages)

Create `src/pages/pt/<slug>.astro` and `src/pages/en/<slug>.astro` (same slug, or pass `alternates` to the layout when slugs differ):

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import Section from '../../components/Section.astro';
import { t } from '../../i18n';
const lang = 'pt'; // 'en' in the en/ file
---
<BaseLayout title="Sobre" description="..." {lang}>
  <Section title="Sobre">...</Section>
</BaseLayout>
```

Nested/dynamic routes: `src/pages/pt/blog/[slug].astro` (same for `en`). Header nav links point to `/{lang}/about/`, `experience`, `work`, `blog`, `contact`.

### i18n helpers (`src/i18n`)

- `t(lang, key)`: UI string; add keys to `pt.ts` first (the `en.ts` type forces parity).
- `getLangFromUrl(url)`, `localizedPath(lang, path?)`, `getAlternatePath(url, lang)`, `stripLang(pathname)`.
- Long-form content lives in the pages / content collections, not in the dictionaries.

### Styling

Use CSS variables from `src/styles/tokens.css`; component styles are scoped in each `.astro` file. Dark theme is the default.

## Contact form setup

The `/pt/contact/` and `/en/contact/` form posts JSON to the Netlify Function `netlify/functions/contact.ts`, which validates input, checks a honeypot, applies a best-effort per-IP rate limit and sends mail through the [Resend](https://resend.com) REST API. All secrets stay on the server.

1. Copy `.env.example` to `.env` and fill it in (see the file for every variable; in production set them in Netlify > Environment variables).
   - Server only: `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` (a sender verified in Resend), optional `CONTACT_AUTOREPLY=true`, optional `TURNSTILE_SECRET_KEY`.
   - Public (build time): `PUBLIC_CONTACT_EMAIL` (mailto fallback, hidden if unset), `PUBLIC_TURNSTILE_SITE_KEY` (enables the widget).
2. Run locally with `npx netlify dev` (serves Astro and the function together; plain `astro dev` does not run functions).
3. Run the function logic tests with `npm test`.

Limitation: the rate limiter is in-memory and per warm function instance, so it is best-effort. Enable Turnstile for stronger protection.

## Deploy (Netlify)

`netlify.toml` already sets everything; connect the repository and confirm:

- Build command `npm run build`, publish directory `dist`, functions directory `netlify/functions` (esbuild bundler).
- Node version: `NODE_VERSION = 20.18.2` (set in `netlify.toml`).
- Environment variables (Site settings > Environment variables): `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` (required for the form), and optionally `CONTACT_AUTOREPLY`, `TURNSTILE_SECRET_KEY`, `PUBLIC_CONTACT_EMAIL`, `PUBLIC_TURNSTILE_SITE_KEY`. Variables prefixed `PUBLIC_` are read at build time; changing them requires a new deploy.
- The production domain is set as `site` in `astro.config.mjs` and in `public/robots.txt`; update both if the domain changes (canonical URLs and the sitemap derive from `site`).
- Redirects (`netlify.toml`): `/` and `/blog` (old Gatsby URLs) to `/pt/`, `/pt/blog/`, plus `/sitemap.xml` to `/sitemap-index.xml`. The old `/page-2` and `/using-typescript` were Gatsby starter boilerplate and are intentionally not redirected (they return the 404 page).
- Before releasing: `npm run build && npm run check && npm test && npm run verify`.
