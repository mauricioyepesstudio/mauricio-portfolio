# Portfolio — Building sitemap entry, 2026-10-20

## Objective and scope

Make the existing Building page discoverable through the generated sitemap. On base `92cea8c9e3e22c3ffbd9bafae63f425c9affa85c`, `/building` is a primary navigation destination with its own canonical metadata but is missing from `app/sitemap.ts`.

Add one static route entry, using existing `SITE_URL` and real git modification-date handling. Sources: `app/building/page.tsx` and the existing studio projects, systems and creative modules. Unknown dates remain omitted; no build-time dates invented. No parallel catalog, page redesign, copy, curation, source assets, domain or provider configuration changes.

The existing browser QA script now checks generated `/sitemap.xml` HTTP200, valid sitemap XML, unique canonical URLs, Building exactly once and its HTTP200 destination with matching canonical. Existing 16 responsive/navigation and 24 mocked contact cases remain unchanged. Independent QA: TypeScript, lint, four contact tests, build27pages and diff PASS; compiled XML has21 unique URLs and Building once. Browser/CI results and exact release SHA are recorded at final handoff in central task `portfolio-building-sitemap-20261020`.

## Coordination and acceptance limits

Isolated checkout `portfolio-isolated-20261020`, implementation branch `codex/portfolio-building-sitemap-20261020`, expected-head central implementation lease. CLAUDE/ESTADO/DEVELOPMENT and orchestrator/SEO/QA/deploy roles read. AGENTS.md and machine UI/UX Pro Max are absent; repository rules provide the documented fallback. PR34 Building updates and other agents' work are untouched. Two untracked source temporary files existed after clone and are preserved/excluded.

No account, message, email, schema, permissions, secrets, billing or budget changes. Tests and a sitemap entry do not establish search-engine indexing, ranking or client acquisition results. Production acceptance requires the actual public alias SHA, served XML and Building canonical, not merely a successful push. No runtime-log audit is claimed.

## Content

2026-10-20: retain recent equivalent creative produced and reviewed on 2026-10-15, `exec-eed98b61-d375-4a57-8f32-d35abac42dcd.png`. Objective: attract clients to real creative work and Contact. Portfolio palette: #0a0a0a, #f4f2ee, #b08d57. Original QA: `docs/cerebro/2026-10-15-mobile-validation.md`. No duplicate generation or claim that transient local bytes still exist.

Caption/CTA: Diseño con intención, de la identidad a la campaña. Explora mi trabajo y conversemos sobre tu próximo proyecto: https://mauricio-portfolio-v2.vercel.app/contact

State: produced, ready to share here; not scheduled or externally published. Per-channel access/authorization and provider publication receipt are unverified. No new client logos, fabricated screenshots or metrics. Resource Living originals preserved; Laura/1MIGRATION absent.

Next objective: after deployment, verify the actual served sitemap and canonical; indexing outcomes require real Search Console access. EVOLUSA/BELONG case studies still await owner-supplied captures. Keep credentials, source assets and unrelated modules untouched.
