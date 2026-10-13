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

## Getrak (`getrak.md`)
- Role/title, start date, and what can be said publicly: architecture (micro frontends, design system, services), scope, stack, verifiable results. Currently only "re-architecting a real-time vehicle tracking platform".

## SolarMarket (`solarmarket.md`)
- Role, period (currently "2021", taken from the legacy portfolio), what you actually did, stack. Confirm the "5,000+ concurrent users" claim and its wording.

## Incubatech (`incubatech.md`)
- Role, real period (currently "2019" from the legacy portfolio), what produced the "~40% faster page loads", stack.

## EasyDiet (`easydiet.md`)
- Your role and whether it was an Incubatech product or yours, period, stack. Used as the 5th featured card from the legacy portfolio.

## Other legacy projects (not created as cases)
- Mobister (2018), FacePonto (2019), DIATINF/IFRN (2019) are in `src/data/legacy-portfolio.json`; say if they should become cases.

## Blog
- Review `ai-assisted-development` (pt/en): it only states principles. Add concrete experiences if you want, or set `draft: true`.
- `heroImage` for posts (optional; defaults to `/og-default.jpg`).
- Case study ideas from the plan: micro frontends and design system, API performance, service orchestration.
- RSS feed was not added (`@astrojs/rss` is not installed).

## General
- Confirm the pubDate of posts (currently 2026-10-13).
