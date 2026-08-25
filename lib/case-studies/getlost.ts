import "server-only";

import type { CampaignChapterData } from "./types";
import type { CaseStudyData } from "./case-study-data";

// 03 — Campaign. Leads with the strongest advertising photography in the
// archive instead of packaging paperwork — hero + a large, uncropped
// editorial pairing carry the chapter before the smaller supporting grid.
const blackRollingPapers: CampaignChapterData = {
  slug: "black-rolling-papers",
  eyebrow: "03 — Campaign",
  title: "Black Rolling Papers",
  intro:
    "The flagship product line's advertising campaign — model-led photography and a coordinated social push carrying the packaging system's identity into the feed.",
  hero: {
    src: "/projects/getlost/black-rolling-papers/social/posts/getlost-black-rolling-papers-post-1.png",
    alt: "Black Rolling Papers campaign — Get Lost",
  },
  posts: [2, 5, 6].map((n) => ({
    src: `/projects/getlost/black-rolling-papers/social/posts/getlost-black-rolling-papers-post-${n}.png`,
    alt: `Black Rolling Papers social post ${n}`,
  })),
  gallery: [
    {
      title: "The Campaign — Editorial",
      emphasis: "large",
      assets: [
        { src: "/projects/getlost/black-rolling-papers/social/posts/getlost-black-rolling-papers-post-3.png", alt: "Black Rolling Papers social post 3" },
        { src: "/projects/getlost/black-rolling-papers/social/posts/getlost-black-rolling-papers-post-4.png", alt: "Black Rolling Papers social post 4 — retail display" },
      ],
    },
  ],
  videos: [
    {
      src: "/projects/getlost/black-rolling-papers/video/getlost-black-rolling-papers-video.mp4",
      caption: "Black Rolling Papers — Campaign Video",
      orientation: "landscape",
    },
  ],
};

// 04 — Culture & Events. Leads with the highest-resolution photograph in the
// archive; a substantial environmental moment and a split-editorial pairing
// follow before the lower-resolution activations, which sit at proof scale.
const events: CampaignChapterData = {
  slug: "events",
  eyebrow: "04 — Events & Lifestyle",
  title: "Culture on the Road",
  intro:
    "Real trade-show and city activations carried the brand's identity into live environments across Miami, Atlantic City, Las Vegas and Texas — booth builds, team presence and product in hand.",
  hero: {
    src: "/projects/getlost/events/gallery/cities/getlost-event-miami.webp",
    alt: "Get Lost event activation — Miami",
  },
  gallery: [
    {
      title: "Trade Show Presence",
      emphasis: "large",
      assets: [{ src: "/projects/getlost/events/gallery/cities/getlost-event-booth-2.png", alt: "Get Lost trade show booth build" }],
    },
    {
      title: "On the Road",
      emphasis: "large",
      assets: [
        { src: "/projects/getlost/events/gallery/cities/getlost-event-atlantic-city.webp", alt: "Get Lost event — Atlantic City" },
        { src: "/projects/getlost/events/gallery/cities/getlost-event-vegas.webp", alt: "Get Lost event — Las Vegas" },
      ],
    },
    {
      title: "Additional Activations",
      assets: [
        { src: "/projects/getlost/events/gallery/cities/getlost-event-booth-1.webp", alt: "Get Lost trade show booth" },
        { src: "/projects/getlost/events/gallery/cities/getlost-event-texas.webp", alt: "Get Lost event — Texas" },
      ],
    },
  ],
};

// 05 — Product Universe. The lunar gift-set composite leads; the backpack
// lineup gets a large, uncropped featured moment instead of sitting equal
// to five other tiles.
const newProducts: CampaignChapterData = {
  slug: "new-products",
  eyebrow: "05 — Product & Social",
  title: "The Product Universe",
  intro:
    "The illustrated identity expanded into a coherent product line — backpacks, grinders, torches and trays carrying the same cosmic system.",
  hero: {
    src: "/projects/getlost/new-products/hero/getlost-new-products-hero.webp",
    alt: "Get Lost new products hero",
  },
  gallery: [
    {
      title: "The Product System",
      emphasis: "large",
      assets: [{ src: "/projects/getlost/new-products/social/posts/getlost-new-products-post-1.webp", alt: "Get Lost product lineup — bags and packs" }],
    },
  ],
  posts: [2, 3, 4, 5, 6].map((n) => ({
    src: `/projects/getlost/new-products/social/posts/getlost-new-products-post-${n}.webp`,
    alt: `Get Lost new product post ${n}`,
  })),
};

// 02 — Packaging & Print. Production reference and finished print collateral
// behind the Black Rolling Papers line — intentionally separated from the
// identity system above and the advertising campaign that follows.
const packagingAndPrint: CampaignChapterData = {
  slug: "packaging-print",
  eyebrow: "02 — Packaging & Print",
  title: "Packaging & Print",
  intro:
    "Real production reference and finished print collateral behind the Black Rolling Papers line — manufacturing specifications paired with the business cards, magazine placement and postcard that carried the identity into print.",
  hero: {
    src: "/projects/getlost/black-rolling-papers/print/getlost-magazine-ad.webp",
    alt: "Get Lost magazine advertisement",
  },
  gallery: [
    {
      title: "Print Collateral",
      assets: [
        { src: "/projects/getlost/black-rolling-papers/print/getlost-business-card-front.webp", alt: "Get Lost business card — front" },
        { src: "/projects/getlost/black-rolling-papers/print/getlost-business-card-back.webp", alt: "Get Lost business card — back" },
        { src: "/projects/getlost/black-rolling-papers/print/getlost-post-card.webp", alt: "Get Lost postcard" },
      ],
    },
    {
      title: "Production Reference",
      assets: [
        { src: "/projects/getlost/black-rolling-papers/packaging/getlost-black-rolling-papers-packaging-1.webp", alt: "Black Rolling Papers production reference — cone tube" },
        { src: "/projects/getlost/black-rolling-papers/packaging/getlost-black-rolling-papers-packaging-3.webp", alt: "Black Rolling Papers production reference — booklet and display" },
      ],
    },
  ],
};

// 06 — Storefront. The chapter hero uses the header capture so the full
// homepage scroll can carry the chapter as the primary digital visual.
const website: CampaignChapterData = {
  slug: "website",
  eyebrow: "06 — Website & Digital Experience",
  title: "The Storefront",
  intro:
    "The online storefront extends the same illustrated identity into a full e-commerce experience — homepage, category navigation and a real federal trademark registration behind the brand.",
  hero: {
    src: "/projects/getlost/website/gallery/pages/getlost-website-header.webp",
    alt: "Get Lost website header",
  },
  website: [
    { src: "/projects/getlost/website/gallery/pages/getlost-website-home.webp", alt: "Get Lost website homepage — full scroll", label: "Homepage — Full Scroll" },
  ],
  gallery: [
    {
      title: "Trademark Registration",
      emphasis: "large",
      assets: [{ src: "/projects/getlost/website/gallery/pages/getlost-website-certification.webp", alt: "Get Lost federal trademark registration certificate" }],
    },
  ],
};

export const getlostCaseStudy: CaseStudyData = {
  heroImage: "/projects/getlost/brand/hero/getlost-brand-hero.webp",
  heroInset: {
    src: "/projects/getlost/brand/logo/getlost-logo-galaxy.webp",
    alt: "Get Lost primary mark",
    label: "Primary Mark",
  },
  campaigns: [packagingAndPrint, blackRollingPapers, events, newProducts, website],
  brandPackagingCopy: {
    eyebrow: "01 — Brand Identity",
    title: "One illustrated world, every touchpoint.",
    description:
      "A single illustrated mark and icon system carries Get Lost from packaging to product content, events, social and the online storefront.",
  },
  brandPackaging: [
    { asset: { src: "/projects/getlost/brand/logo/getlost-logo-galaxy.webp", alt: "Get Lost logo mark" }, label: "Primary Mark", kind: "Identity" },
    { asset: { src: "/projects/getlost/brand/icons/getlost-icon-rolling-papers.png", alt: "Get Lost rolling papers icon" }, label: "Rolling Papers", kind: "Identity" },
    { asset: { src: "/projects/getlost/brand/icons/getlost-icon-events.png", alt: "Get Lost events icon" }, label: "Events", kind: "Identity" },
    { asset: { src: "/projects/getlost/brand/icons/getlost-icon-merch.png", alt: "Get Lost merch icon" }, label: "Merch", kind: "Identity" },
    { asset: { src: "/projects/getlost/brand/icons/getlost-icon-porducts.png", alt: "Get Lost products icon" }, label: "Products", kind: "Identity" },
    { asset: { src: "/projects/getlost/brand/icons/getlost-icon-colaborate.png", alt: "Get Lost collaborate icon" }, label: "Collaborate", kind: "Identity" },
    { asset: { src: "/projects/getlost/brand/icons/getlost-icon-influencers.png", alt: "Get Lost influencers icon" }, label: "Influencers", kind: "Identity" },
  ],
  motionCopy: {
    eyebrow: "07 — Motion",
    title: "The brand, in motion.",
  },
  motion: [
    { ...blackRollingPapers.videos![0], campaign: "Black Rolling Papers" },
    { src: "/projects/getlost/new-products/video/getlost-new-products-video-1.mp4", caption: "New Product Drop — Feed Video", campaign: "New Products", orientation: "vertical" },
    { src: "/projects/getlost/new-products/video/getlost-new-products-video-2.mp4", caption: "New Product Drop — Feed Video", campaign: "New Products", orientation: "vertical" },
    { src: "/projects/getlost/new-products/video/getlost-new-products-video-3.mp4", caption: "New Product Drop — Feed Video", campaign: "New Products", orientation: "vertical" },
  ],
};
