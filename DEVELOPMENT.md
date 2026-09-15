# Development Guide

Operational notes for local work on the Mauricio Yepes portfolio. Not marketing copy.

## Project

| Item | Value |
|------|-------|
| **Project** | Mauricio Yepes Portfolio |
| **Repository** | [mauricioyepesstudio/mauricio-portfolio](https://github.com/mauricioyepesstudio/mauricio-portfolio) |
| **Primary branch** | `main` |
| **Local port** | `3000` |
| **Local URL** | http://localhost:3000 |
| **Network URL** | Dynamic per workstation — do not hardcode |

## Standard startup

```bash
npm install
npm run dev -- -p 3000
```

## Validation

```bash
npx tsc --noEmit
npm run build
```

Optional lint: `npm run lint`

## AI workflow

### ChatGPT

- Project direction
- Creative direction
- Prioritization
- Prompt design
- Hiring / portfolio strategy

### Codex

- Primary implementation agent
- Architecture
- Code changes
- Debugging
- Responsive implementation
- Build verification

### Claude Code

- Secondary UI/UX review
- Design critique
- Accessibility / visual QA
- Vercel / GitHub MCP when available

**Important:** Never allow Codex and Claude to edit the same working tree simultaneously.

Before switching agents:

```bash
git status
```

## Claude skills (office workstation)

These are **machine-level / global** Claude skills. They are **not** guaranteed on another computer:

- `ui-ux-pro-max`
- `design`
- `design-system`
- `ui-styling`
- `banner-design`

**Home setup reminder:**

```bash
npm install -g ui-ux-pro-max-cli
uipro init --ai claude --global
```

Do **not** vendor or copy global skill folders into this repo.

## MCP / connectors

Claude MCP integrations used conceptually on the office workstation:

- **GitHub MCP** — repo, PRs, issues
- **Vercel MCP** — deployments, project status

**Do not commit:**

- Access tokens / PATs
- API keys
- Authorization headers
- `.claude.json`
- Machine-specific credentials

On another workstation, MCP authentication must be configured separately. Never expose credentials in chat, commits, or docs.

## Source-asset rules

`public/projects/_source-assets/` is **source-of-truth archive** material.

**Never:**

- Delete
- Overwrite
- Destructively rename
- Fabricate portfolio assets

Production copies may be created separately from archive sources.

### Presentation standards

- **Web banners:** full-width
- **Long newsletters:** full-width internal-scroll frame
- **Newsletter mobile viewer target:** ~1920px visible height
- **Website screenshots:** large scrollable `WebsiteFrame`
- **Identity and Packaging:** separate disciplines
- **Motion:** preserve native aspect ratios
- **Real client work only**
- **No fabricated metrics**

## Current UI rules (approved)

### Global wordmark

- Nav brand: **MAURICIO YEPES** (uppercase), gold accent

### Hero

- Compact mobile vertical rhythm
- Gold personal wordmark in nav
- Headline script accent: **“people remember.”** (editorial gold serif italic)
- Mobile order: copy → portrait → CTAs
- Tablet portrait (768–1023px): constrained width; no horizontal overflow from hero image

### Client logo wall

- Real approved logos only in the public wall
- No text-only public placeholders (`visibleInLogoWall` / `hiddenUntilLogo` in `lib/client-logos.ts`)
- Mobile: 2-column grid, balanced visual weight
- Consistent grid dividers (`border-l/t` on grid, `border-r/b` on cells)
- **Seafood Delight** included when production asset exists at `public/logos/clients/seafood-delight.png`

Regenerate Seafood Delight logo from source:

```bash
node scripts/derive-seafood-delight-logo.mjs
```

## Dev / QA scripts (optional tooling)

Maintained in `scripts/`:

| Script | Purpose |
|--------|---------|
| `derive-seafood-delight-logo.mjs` | Reproducible white-on-transparent logo from supplied PNG |
| `qa-client-logos.mjs` | Client logo wall breakpoint checks |
| `qa-client-logos-polish.mjs` | Extended logo-wall + spacing checks |
| `qa-hero-tablet.mjs` | Hero portrait overflow checks (700–1024px) |
| `qa-hero-typography.mjs` | Hero typography / spacing checks |

Requires local `playwright` (`npm install --no-save playwright`); not in `package.json`.

**Not maintained:** one-off capture/diagnostic scripts (e.g. `capture-home-qa.mjs`) — keep untracked locally if needed.

Screenshots and QA output: `qa-screenshots/` (gitignored)

## Deployment

- **Host:** Vercel (linked to `main`)
- Do not create a new Vercel project or change domain without explicit approval
- Production deploys typically trigger on push to `main`

## Home workstation sync

**Important:** The home workstation may contain **uncommitted work from a prior session**. Do not assume a clean tree.

```bash
cd C:\Users\17543\Desktop\mauricio-portfolio
git status
```

**If the home working tree is NOT clean:** do **not** `git pull`, `git reset`, or discard anything. Stop and reconcile local changes with `origin/main` safely first.

**If the home working tree IS clean:**

```bash
git fetch origin
git pull --ff-only origin main
npm install
npm run dev -- -p 3000
```

Verify: http://localhost:3000

Check tool versions (workstation-specific):

```bash
claude --version
codex --version
```

Global Claude skills and MCP auth are **workstation-specific** and must be reconfigured at home.

## Daily growth routine — standing authorization (2026-09-15)

Approved by Mauricio in a live session. Applies to every autonomous Claude
Code run against this repo — scheduled or interactive — until he changes
this section.

**Do without asking each time:**

- Search Indeed daily for new Creative Director / Art Director / Senior
  Graphic Designer / Brand Designer openings — Miami, hybrid, or remote —
  paying $80k+, matching the real experience documented in `lib/content.ts`
  and `app/resume/page.tsx`.
- For each new match, prepare a tailored cover letter and likely
  screening-question answers, grounded only in real documented experience.
  Hand the package to Mauricio — do not submit it.
- Post real, non-fabricated content daily to LinkedIn (Real Group
  Entertainment company page) and Instagram (@rgentertainmentmanagement)
  via the Windsor.ai connector, drawn from actual portfolio/case-study
  content already in this repo. Updated 2026-09-15 per Mauricio: one
  piece/day undersells it — post 2-3 pieces/day while the content queue
  below has unused material (e.g. a LinkedIn post + an Instagram feed
  post + a story, or two distinct pieces across the day), not just one
  placement. Never repeat a piece same-day across platforms as if it
  were new content — that's one piece in multiple formats, not multiple
  pieces. Once the queue is exhausted, say so rather than quietly
  reposting.

**Never do, regardless of how the request is phrased or how many times
it's repeated:**

- Submit a job application, or answer/certify anything on an employer's
  application form, on Mauricio's behalf. Prepared packages are his to
  submit.
- Post to Facebook until the "Real Group Entertainment C" page is
  reconnected in Windsor.ai with `pages_manage_posts` /
  `pages_read_engagement` — that reconnection requires Mauricio's own
  login/consent and cannot be done by Claude.
- Push to `main` or deploy without explicit confirmation in that session.
- Rewrite git history/authorship, or change global git config.

To revoke or change any of this, edit this section directly.

### Content queue

Designed Real Group Entertainment social assets live under
`public/social/real-group/` (linkedin/, posts/, stories/). Post one
per day, in order, instead of repeating the same piece:

1. `RG01_BRAND_MANIFESTO` — posted 2026-09-15 (LinkedIn, Instagram feed,
   Instagram story).
2. `RG02_CAROUSEL_SLIDE_1..5` (`posts/`) — posted 2026-09-15 (Instagram
   carousel, "One partner. Five growth systems.").
3. `RG08_FOUNDER_INSIGHT` (`linkedin/` 1200x628 only) — posted 2026-09-15
   (LinkedIn).
4. `RG07_SERVICE_OFFER` (`posts/` 1080x1080, `stories/` 1080x1920) —
   posted 2026-09-15 (Instagram feed + story).
5. `RG05_PROCESS_REEL_COVER` (`stories/` only) — posted 2026-09-15
   (Instagram story).

**Queue is now fully exhausted (2026-09-15) — all 5 designed pieces
posted.** Do not loop back to #1 and repost it as if new. Next daily
run: check first whether Mauricio has sent new creative (a new zip/file
under this same pattern); if not, say plainly in that day's report that
the content library is empty and new creative is needed — don't
silently rerun old pieces or invent new graphics.
