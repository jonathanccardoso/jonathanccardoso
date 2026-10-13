# Content TODO (facts the owner must supply)

Nothing below was invented; each item is currently omitted from the site.

## ASO360 (`src/content/work/{pt,en}/aso360.md`)
- Your role (Founder? sole developer? product + engineering + operations?) and start date. Add `role` and `period`.
- Stack and architecture: front, back, database, infra, multi-tenant, PDF generation, queues, backups. Add `stack` and a `solution` section.
- 2 or 3 technical/product decisions with the reasoning (`decisions`).
- Confirm the public numbers (13,100+ ASOs, 13,000+ exams, 14,000+ lives) are current.
- Confirm the LGPD wording ("built with LGPD compliance in mind") and whether ISO 27701 may be mentioned.
- Check your employment contract for exclusivity / side-project clauses.
- Finish and publish the draft post `lessons-saas-occupational-health` (pt/en, `draft: true`).

## Getrak, SolarMarket, Incubatech, Mobister, IFRN (`src/content/work/`, `src/data/experience-copy.ts`)
- Roles, periods, stacks and impacts now come from the LinkedIn profile. Still open: Getrak has no public detail beyond what is listed (employer product); SolarMarket "Frontend Web Developer" (Jun 2021 – Jan 2022) and IFRN web development (Mar 2017 – Jan 2018) have no description; add them if you want.
- Confirm that EasyDiet was developed inside Incubatech (the site now mentions it only as a project there, based on the legacy portfolio year 2019).
- FacePonto (2019) and DIATINF/IFRN (2019) from `src/data/legacy-portfolio.json` are no longer shown; say whether and where they belong (e.g. inside Incubatech / IFRN).

## Blog
- Review `ai-assisted-development` (pt/en): it only states principles. Add concrete experiences if you want, or set `draft: true`.
- `heroImage` for posts (optional; defaults to `/og-default.jpg`).
- Case study ideas from the plan: micro frontends and design system, API performance, service orchestration.
- RSS feed was not added (`@astrojs/rss` is not installed).

## General
- Confirm the pubDate of posts (currently 2026-10-13).

## Home, About and Experience (Phase 3)
- Resume: no `public/resume*.pdf` exists, so the "Resume" button is omitted. Add the PDF (e.g. `public/resume.pdf`); the home hero picks it up automatically at build time (see `src/data/home-copy.ts`).
- Hero subtitle says "Creator of ASO360 ... that I built and operate" (plan wording). Switch to "Founder" only after you confirm the role (see ASO360 section).
- About: the "why I created ASO360 and what I learned operating a product" paragraph is a conservative one-liner (support, billing, compliance, product evolution). Write your own paragraph with the real motivation and lessons (`src/data/about-copy.ts`, `product`).
- About/Home: philosophy items only restate the plan's principles; add real examples (decisions, trade-offs, results) when you can.
- Practices listed on Home (Clean Code, SOLID, TDD) are not in the LinkedIn facts; keep or remove them (`src/data/home-copy.ts`, `about-copy.ts`).
