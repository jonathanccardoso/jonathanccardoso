# jonathanccardoso

Professional portfolio of Jonathan Cardoso. Astro + TypeScript, static output, deployed on Netlify.

## Commands

| Command           | Action                         |
| ----------------- | ------------------------------ |
| `npm install`     | Install dependencies           |
| `npm run dev`     | Dev server (localhost:4321)    |
| `npm run build`   | Build static site to `dist/`   |
| `npm run preview` | Preview the build              |
| `npm run check`   | Type-check (`astro check`)     |

Node: see `.nvmrc` (20.18.2; Astro 5 requires `^20.3.0`).

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
