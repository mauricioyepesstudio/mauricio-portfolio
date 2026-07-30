# Installation Instructions — Mauricio Yepes Portfolio

## Requirements

- Node.js 18.18 or later (Node 20 LTS recommended)
- npm 9+ (comes with Node)

## 1. Install dependencies

Unzip the project, then from the project root:

```bash
cd mauricio-portfolio
npm install
```

## 2. Run locally

```bash
npm run dev
```

Visit http://localhost:3000

## 3. Build for production

```bash
npm run build
npm start
```

## 4. Before you launch

- Replace the placeholder social links in `components/Footer.tsx` and
  `app/contact/page.tsx` (LinkedIn, Behance) with your real profile URLs.
- Replace `hello@mauricioyepes.com` with your real contact email throughout
  the site.
- Update `siteUrl` in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts`
  to your real production domain.
- Connect `app/api/contact/route.ts` to a real email service (Resend,
  SendGrid, Postmark) or CRM webhook — it currently only logs submissions
  to the server console. A commented example using Resend is included in
  that file.
- Swap `public/resume.pdf` for an updated version any time your resume
  changes — the download link on the Home and Resume pages points directly
  to this file path.
- Replace `public/favicon.ico` with your own if desired.

## 5. Deploying

This project is a standard Next.js 15 App Router app and deploys cleanly to:

- **Vercel** (recommended, zero-config): connect the repo and deploy.
- Any Node host that can run `npm run build && npm start`.

## Project Structure

See `README.md` inside the project for a full breakdown of pages,
components, and where to edit content (case studies, services, experience,
testimonials, skills).

## Troubleshooting

- **Fonts don't load in dev:** `next/font/google` fetches Inter and
  Instrument Serif at build time and requires an internet connection during
  `npm run build` / first `npm run dev`. This is normal and only needs to
  happen once (fonts are then self-hosted by Next.js automatically).
- **Type errors on install:** make sure you're on Node 18.18+ — earlier
  versions are not supported by Next.js 15.
