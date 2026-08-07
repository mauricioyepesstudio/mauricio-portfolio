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

- Contact email, LinkedIn and Behance links are already set to their real
  values (`rgentertainmentmanagement@gmail.com`,
  `linkedin.com/in/mauricio-yepes-lotero`, `behance.net/mauricioyepes01`)
  across the Contact page, Footer and Resume page. If any of these change,
  update them in `components/Footer.tsx`, `app/contact/page.tsx`,
  `app/resume/page.tsx`, and `components/ContactForm.tsx`.
- Update `siteUrl` in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts`
  to your real production domain if `mauricioyepes.com` is not it.
- `app/api/contact/route.ts` is already connected to Resend and requires a
  `RESEND_API_KEY` environment variable. Verify a custom sending domain in
  Resend so outgoing mail doesn't come from the shared `onboarding@resend.dev`
  sandbox address.
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
