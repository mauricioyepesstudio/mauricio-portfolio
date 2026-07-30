# Mauricio Yepes — Portfolio

A premium, minimal-luxury portfolio site built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
  page.tsx                  Home
  portfolio/page.tsx        Portfolio index
  portfolio/[slug]/page.tsx Case study detail
  about/page.tsx            About
  resume/page.tsx           Resume
  contact/page.tsx          Contact
  api/contact/route.ts      Contact form handler (stub)
  sitemap.ts / robots.ts    SEO
components/                 Shared UI + sections
lib/                         Content data (projects, services, experience, testimonials)
public/resume.pdf           Downloadable resume
```

## Editing Content

- **Case studies / portfolio:** `lib/projects.ts`
- **Services, experience, testimonials, skills:** `lib/content.ts`
- **Resume PDF:** regenerate from your own source, or edit `public/resume.pdf` directly.

## Contact Form

`app/api/contact/route.ts` currently logs submissions to the server console.
Wire it up to a real email provider (Resend, SendGrid, Postmark) or a webhook
before going to production — see the commented example in that file.

## Deployment

Optimized for [Vercel](https://vercel.com):

```bash
npm run build
```

Update `siteUrl` in `app/layout.tsx` and `app/sitemap.ts` / `app/robots.ts` to
your real production domain before launch.

## Design Notes

- Palette: near-black background (`#0a0a0a`), warm paper white (`#f4f2ee`), gold accent (`#b08d57`).
- Type: Inter (sans) for body/UI, Instrument Serif (italic) for accent/editorial moments.
- Motion: Framer Motion scroll-reveals and page transitions tuned to an Apple-like ease curve (`cubic-bezier(0.16, 1, 0.3, 1)`), respecting `prefers-reduced-motion`.
