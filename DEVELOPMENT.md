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

## Dev / QA scripts (optional, untracked by default)

Generic helpers in `scripts/`:

- `derive-seafood-delight-logo.mjs` — white transparent logo from supplied PNG
- `qa-hero-tablet.mjs`, `qa-hero-typography.mjs`, `qa-client-logos-polish.mjs` — Playwright checks (requires `playwright` installed locally, not in package.json)

Screenshots and QA output: `qa-screenshots/` (gitignored)

## Deployment

- **Host:** Vercel (linked to `main`)
- Do not create a new Vercel project or change domain without explicit approval
- Production deploys typically trigger on push to `main`

## Home workstation sync

```bash
cd C:\Users\17543\Desktop\mauricio-portfolio
git status
```

If local home changes exist: **do not** `git pull` automatically — reconcile first.

If working tree is clean:

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
