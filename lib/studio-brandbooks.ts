// Brand book and curated graphic pieces per studio project, shown on /building.
// Logos, colors and rules come from each brand's own published files:
// EVOLUSA: pros360era docs/EVOLUSA-BRAND-BOOK.md and config/brand.ts.
// BELONG: belong app/globals.css (brand tokens), components/ui/logo.tsx and public/social.
// Personal CFO: the logo files already in public/projects/personal-cfo.
// Real Group Entertainment: logo files in public/brand/rge; accent colors sampled from the studio's published pieces.

export type BrandLogo = { src: string; label: string; surface: "light" | "dark" };
export type BrandColor = { name: string; hex: string; role: string };
export type BrandPiece = { src: string; alt: string; ratio: "square" | "portrait" | "wide" };

export type BrandBook = {
  logos: BrandLogo[];
  colors: BrandColor[];
  typography?: { family: string; note: string };
  rules: string[];
  // Shown instead of the single cover image, newest work first.
  coverPieces?: BrandPiece[];
  pieces?: { title: string; items: BrandPiece[] };
};

const rl = "/projects/resource-living/campaigns/06-broward-palm-beach-oct-2026";
const belong = "/projects/real-group-entertainment/campaigns/02-belong-brand";
const cfo = "/projects/personal-cfo/campaigns/01-brand-identity";
const cfoPost = (n: string): BrandPiece => ({ src: `${cfo}/social/post-${n}-4x5.png`, alt: `Personal CFO educational post: ${n.slice(3).replace(/-/g, " ")}`, ratio: "portrait" });

export const brandBooks: Record<string, BrandBook> = {
  "real-group-entertainment": {
    logos: [
      { src: "/brand/rge/rge-lockup-white.png", label: "Primary lockup · reverse", surface: "dark" },
      { src: "/brand/rge/rge-lockup-black.png", label: "Primary lockup", surface: "light" },
      { src: "/brand/rge/rge-mark-white.png", label: "Isotype · reverse", surface: "dark" },
      { src: "/brand/rge/rge-mark-black.png", label: "Isotype", surface: "light" },
    ],
    colors: [
      { name: "Ink", hex: "#0A0A0A", role: "Logo and primary text" },
      { name: "Paper", hex: "#FFFFFF", role: "Reverse logo and space" },
      { name: "Campaign Gold", hex: "#A88255", role: "2026 studio campaign" },
    ],
    rules: [
      "Use the black lockup on light backgrounds and the white lockup on dark backgrounds.",
      "Use the isotype alone where the full name does not fit, such as profile images and icons.",
    ],
    coverPieces: [
      { src: "/studio/rge/pieces/tu-marca-merece-una-direccion.jpg", alt: "Real Group Entertainment campaign piece: Tu marca merece una dirección", ratio: "portrait" },
      { src: "/studio/rge/pieces/una-web-con-proposito.jpg", alt: "Real Group Entertainment campaign piece: Una web con un propósito claro", ratio: "portrait" },
      { src: "/studio/rge/pieces/contenido-con-intencion.jpg", alt: "Real Group Entertainment campaign piece: Contenido con intención", ratio: "portrait" },
    ],
    pieces: {
      title: "Client work · Resource Living, Broward & Palm Beach 2026",
      items: [
        { src: `${rl}/advertising/kitchens-baths-beautifully-lived-in.jpg`, alt: "Resource Living ad: kitchens and baths, beautifully lived in", ratio: "portrait" },
        { src: `${rl}/advertising/roofing-beauty-above-it-all.jpg`, alt: "Resource Living ad: roofing, beauty above it all", ratio: "portrait" },
        { src: `${rl}/advertising/impact-windows-light-meets-strength.jpg`, alt: "Resource Living ad: impact windows, light meets strength", ratio: "portrait" },
        { src: `${rl}/social/pool-teal-oasis.jpg`, alt: "Resource Living social piece: pool, teal oasis", ratio: "portrait" },
        { src: `${rl}/social/outdoor-kitchen-golden-hour.jpg`, alt: "Resource Living social piece: outdoor kitchen at golden hour", ratio: "portrait" },
        { src: `${rl}/advertising/pavers-a-beautiful-first-impression.jpg`, alt: "Resource Living ad: pavers, a beautiful first impression", ratio: "portrait" },
      ],
    },
  },
  evolusa: {
    logos: [
      { src: "/studio/evolusa/brand/evolusa-primary.png", label: "Primary logo", surface: "light" },
      { src: "/studio/evolusa/brand/evolusa-wordmark-reverse.png", label: "Wordmark · reverse", surface: "dark" },
      { src: "/studio/evolusa/brand/evolusa-wordmark.png", label: "Wordmark", surface: "light" },
      { src: "/studio/evolusa/brand/evolusa-isotype.png", label: "Isotype", surface: "light" },
    ],
    colors: [
      { name: "Navy", hex: "#061B3A", role: "Authority and trust, primary background" },
      { name: "Red", hex: "#F20D24", role: "Brand action and emphasis" },
      { name: "Warm White", hex: "#FAFAF8", role: "Clarity and space" },
      { name: "Functional Blue", hex: "#2563EB", role: "Progress and selected states only" },
    ],
    typography: { family: "Poppins", note: "One typeface across the product, social and marketing." },
    rules: [
      "Never place the primary logo, wordmark or isotype on navy or dark backgrounds; use the reverse wordmark there.",
      "Spanish first, direct and honest: no guaranteed results.",
    ],
    pieces: {
      title: "Social and launch pieces",
      items: [
        { src: "/studio/evolusa/pieces/guia-negocio-florida-1.jpg", alt: "EVOLUSA carousel cover: business guide for Florida", ratio: "portrait" },
        { src: "/studio/evolusa/pieces/guia-google-negocio-1.jpg", alt: "EVOLUSA carousel cover: Google Business guide", ratio: "portrait" },
        { src: "/studio/evolusa/pieces/evolusa-post-04-honestos.jpg", alt: "EVOLUSA social post: honesty", ratio: "square" },
        { src: "/studio/evolusa/pieces/evolusa-post-05-marketing.jpg", alt: "EVOLUSA social post: marketing professionals", ratio: "square" },
        { src: "/studio/evolusa/pieces/evolusa-post-06-por-que.jpg", alt: "EVOLUSA social post: why EVOLUSA", ratio: "square" },
        { src: "/studio/evolusa/pieces/evolusa-post-08-aprobados.jpg", alt: "EVOLUSA social post: approved professionals", ratio: "square" },
        { src: "/studio/evolusa/pieces/evolusa-post-09-categorias.jpg", alt: "EVOLUSA social post: categories", ratio: "square" },
        { src: "/studio/evolusa/pieces/evolusa-post-11-comunidad.jpg", alt: "EVOLUSA social post: community", ratio: "square" },
        { src: "/studio/evolusa/pieces/EVOLUSA_LinkedIn_Cover_1584x396.png", alt: "EVOLUSA LinkedIn cover", ratio: "wide" },
      ],
    },
  },
  "personal-cfo": {
    logos: [
      { src: `${cfo}/identity/01-logo-system.png`, label: "Logo system: horizontal, symbol and single-ink versions", surface: "light" },
      { src: `${cfo}/identity/02-logo-horizontal-dark.svg`, label: "Horizontal logo · reverse", surface: "dark" },
    ],
    colors: [
      { name: "Navy", hex: "#102A43", role: "Primary background and text" },
      { name: "Mint", hex: "#72E3B2", role: "Symbol and positive change" },
      { name: "Teal", hex: "#127C70", role: "Brand accent" },
      { name: "Deep Teal", hex: "#0B5147", role: "Symbol on dark surfaces" },
    ],
    typography: { family: "Arial", note: "Plain, highly legible type for numbers and explanations." },
    rules: [
      "Always pair color with a sign and a word, so changes read without relying on color alone.",
    ],
    coverPieces: ["01-banco-baja", "02-dos-destinos", "03-nueva-deuda"].map(cfoPost),
    pieces: {
      title: "Social and launch pieces",
      items: [
        ...["05-cuota-corta", "06-negativo", "07-pack-sesiones"].map(cfoPost),
        { src: `${cfo}/advertising/01-feed-ad.png`, alt: "Personal CFO feed ad", ratio: "square" },
        { src: `${cfo}/advertising/02-story-ad.png`, alt: "Personal CFO Story ad", ratio: "portrait" },
        { src: `${cfo}/social/post-04-pago-extra-1x1.png`, alt: "Personal CFO educational post: extra payment", ratio: "square" },
        { src: `${cfo}/advertising/04-display-728x90.png`, alt: "Personal CFO display ad 728×90", ratio: "wide" },
      ],
    },
  },
  belong: {
    logos: [
      { src: `${belong}/identity/just-belong-logo.jpg`, label: "Primary logo", surface: "dark" },
      { src: `${belong}/identity/belong-b-mark.jpg`, label: "B symbol", surface: "dark" },
      { src: `${belong}/social/belong-star-mark.jpg`, label: "Star mark", surface: "dark" },
    ],
    colors: [
      { name: "Violet", hex: "#8B5CF6", role: "Primary brand color" },
      { name: "Indigo", hex: "#6366F1", role: "Secondary" },
      { name: "Periwinkle", hex: "#818CF8", role: "Accent and glow" },
      { name: "Night", hex: "#030014", role: "Base background" },
    ],
    typography: { family: "Geist", note: "Wordmark in uppercase with wide letter spacing." },
    rules: [
      "Carry the B symbol and the community message consistently across identity, campaigns and product.",
    ],
    coverPieces: [
      { src: "/studio/belong/belong-post-01-your-world.jpg", alt: "BELONG launch post: This is your world. Build it. Together.", ratio: "portrait" },
      { src: `${belong}/social/belong-event-scene.jpg`, alt: "BELONG event scene", ratio: "portrait" },
      { src: `${belong}/social/belong-star-mark.jpg`, alt: "BELONG star mark", ratio: "portrait" },
    ],
    pieces: {
      title: "Campaign pieces",
      items: [
        { src: `${belong}/hero/belong-community-banner.jpg`, alt: "BELONG community banner", ratio: "wide" },
        { src: `${belong}/social/just-belong-banner.jpg`, alt: "Just BELONG banner", ratio: "wide" },
        { src: `${belong}/social/we-all-belong-banner.jpg`, alt: "We all BELONG banner", ratio: "wide" },
        { src: `${belong}/social/different-stories-banner.jpg`, alt: "BELONG different stories banner", ratio: "wide" },
      ],
    },
  },
};

export function getBrandBook(slug: string) {
  return brandBooks[slug];
}
