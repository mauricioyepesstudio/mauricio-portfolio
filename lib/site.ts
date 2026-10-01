/**
 * Canonical production URL used by metadata, Open Graph, sitemap and robots.
 *
 * There is no custom domain yet (mauricioyepes.com belongs to someone else), so
 * the default is the Vercel production URL. When a domain is bought and attached
 * to the Vercel project, set NEXT_PUBLIC_SITE_URL there (e.g. "https://nuevodominio.com").
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://mauricio-portfolio-v2.vercel.app"
).replace(/\/+$/, "");
