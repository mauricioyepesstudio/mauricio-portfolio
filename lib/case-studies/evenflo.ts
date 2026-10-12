import "server-only";

import type { CampaignChapterData } from "./types";

// 05 — Campaign. Leads with the packaging render (real product photography)
// instead of the flat title-card hero; the color-swatch grid gets its own
// large, uncropped editorial moment instead of sitting unused in the archive.
const b2b: CampaignChapterData = {
  slug: "blonde-to-brunette",
  eyebrow: "05 — Campaign",
  title: "Blonde2Brunette Ink",
  intro:
    "A trade-facing launch built for PMU professionals evaluating the Blonde2Brunette hybrid pigment — a wholesale-ready hero and packaging pairing carried through a full social and email rollout.",
  hero: {
    src: "/projects/evenflo/blonde-to-brunette-campaign/packaging/evenflo-b2b-packaging-mockup.jpg",
    alt: "Blonde2Brunette Ink packaging — Evenflo",
  },
  logo: {
    src: "/projects/evenflo/blonde-to-brunette-campaign/logo/evenflo-b2b-logo.jpg",
    alt: "Blonde2Brunette Ink campaign logo lockup",
  },
  newsletter: {
    src: "/projects/evenflo/blonde-to-brunette-campaign/newsletter/evenflo-b2b-newsletter.png",
    alt: "Blonde2Brunette Ink post-launch email",
    note: "Post-Launch Email",
    width: 600,
    height: 4594,
  },
  gallery: [
    {
      title: "Color System",
      emphasis: "large",
      assets: [
        {
          src: "/projects/evenflo/campaigns/01-blonde-to-brunette-ink/hero/Evenflo-Colours-Blonde2brunette-Hybrid-Formula-REACH-Compliance.png",
          alt: "Blonde2Brunette Ink shade system — Morena, Castaña, Bonita, Rubia pigment drawdown card",
        },
      ],
    },
  ],
  posts: [
  {
    "src": "/projects/evenflo/blonde-to-brunette-original/social/Evenflo EU Blonde 2 Brunette Launch  Post 2.png",
    "alt": "Blonde2Brunette — EU launch feed creative"
  },
  {
    "src": "/projects/evenflo/blonde-to-brunette-original/social/Evenflo-Colours-Blonde2-Brunette-New-EU-Reach-Hybrid.png",
    "alt": "Blonde2Brunette — hybrid formula feed creative"
  },
  {
    "src": "/projects/evenflo/campaigns/01-blonde-to-brunette-ink/social/Evenflo-Colours-Blonde2-Brunette.png",
    "alt": "Blonde2Brunette — collection feed creative"
  }
],
  stories: [
  {
    "src": "/projects/evenflo/blonde-to-brunette-original/social/Evenflo EU Blonde 2 Brunette Launch Story 1.png",
    "alt": "Blonde2Brunette — EU launch story"
  },
  {
    "src": "/projects/evenflo/blonde-to-brunette-original/social/Evenflo EU Blonde 2 Brunette Launch Story 3.png",
    "alt": "Blonde2Brunette — supporting launch story"
  },
  {
    "src": "/projects/evenflo/blonde-to-brunette-original/social/Evenflo-Colours-Blonde-2-Brunette-Hybrid-Formula-Pigment.png",
    "alt": "Blonde2Brunette — pigment education story"
  }
],
  videos: [
    {
      src: "/projects/evenflo/blonde-to-brunette-campaign/video/evenflo-b2b-campaign-video.mp4",
      caption: "Blonde2Brunette Ink — Campaign Film",
      orientation: "landscape",
    },
  ],
};

// 06 — Campaign. Leads with the real model/product photograph instead of the
// title-card hero; varies rhythm against b2b above it (packaging-led hero →
// photography-led hero) and keeps its color-system moment at supporting
// scale rather than repeating b2b's "major" treatment.
const trueLips: CampaignChapterData = {
  slug: "true-lips",
  eyebrow: "06 — Campaign",
  title: "True Lips",
  intro:
    "A consumer-facing companion launch for the True Lips pigment line, carrying the same brand system into a warmer, editorial social and email presentation.",
  // Varies the section rhythm against b2b above it — without this, both
  // chapters render hero → packaging → social → newsletter → motion back to
  // back and the page reads as a stack of identical cards.
  layout: "social-close",
  hero: {
    src: "/projects/evenflo/true-lips-campaign/social/posts/evenflo-true-lips-social-post-1.jpg",
    alt: "True Lips campaign — Evenflo",
  },
  logo: {
    src: "/projects/evenflo/true-lips-campaign/logo/evenflo-true-lips-logo.jpg",
    alt: "True Lips campaign logo lockup",
  },
  newsletter: {
    src: "/projects/evenflo/true-lips-campaign/newsletter/evenflo-true-lips-newsletter-alt.png",
    alt: "True Lips campaign email — device and procedure photography",
    note: "Campaign Email",
    width: 600,
    height: 6713,
  },
  gallery: [
    {
      title: "Color System",
      assets: [
        {
          src: "/projects/evenflo/campaigns/04-true-lips-ink/social/Evenflo True Lips Unisex Pigments 1.png",
          alt: "True Lips product and color system — Dirty French, Naturalista, Royal Mauve",
        },
      ],
    },
  ],
  posts: [2, 3, 4].map((n) => ({
    src: `/projects/evenflo/true-lips-campaign/social/posts/evenflo-true-lips-social-post-${n}.jpg`,
    alt: `True Lips social feed post ${n}`,
  })),
  stories: [2, 3].map((n) => ({
    src: `/projects/evenflo/true-lips-campaign/social/stories/evenflo-true-lips-social-story-${n}.jpg`,
    alt: `True Lips social story ${n}`,
  })),
  videos: [
    {
      src: "/projects/evenflo/true-lips-campaign/video/evenflo-true-lips-campaign-video.mp4",
      caption: "True Lips — Campaign Film",
      orientation: "landscape",
    },
  ],
};

const gold: CampaignChapterData = {
  "slug": "its-raining-gold",
  "eyebrow": "07 — Campaign",
  "title": "It’s Raining Gold Ink",
  "intro": "A Gold collection promotion pairing a distinct key visual with sets-and-singles creative, social stories and a supporting email.",
  "hero": {
    "src": "/projects/evenflo/campaigns/02-its-raining-gold-ink/hero/Gold-Promotion.png",
    "alt": "It’s Raining Gold — campaign key visual"
  },
  "posts": [
    {
      "src": "/projects/evenflo/its-raining-gold/social/653ed1180409579.650a5cde67c7e.png",
      "alt": "Gold collection — feed creative"
    },
    {
      "src": "/projects/evenflo/its-raining-gold/social/Microbeau-Brow-Daddy-Gold-Collection-Sets-Singles.png",
      "alt": "Gold collection — feed creative"
    }
  ],
  "stories": [
    {
      "src": "/projects/evenflo/its-raining-gold/social/441f48180409579.650a5cdede208.png",
      "alt": "Gold collection — story creative"
    },
    {
      "src": "/projects/evenflo/campaigns/02-its-raining-gold-ink/social/Brow-Daddy-Gold-Collection-Sets-Singles-20-Off.png",
      "alt": "Gold collection — story creative"
    }
  ],
  "newsletter": {
    "src": "/projects/evenflo/its-raining-gold/newsletter/Brow-Daddy-Birthday-Sale-SMS-Machines-Cartridges.png",
    "alt": "Gold collection promotion email",
    "note": "Promotional email",
    "width": 600,
    "height": 3214
  }
};
const pinker: CampaignChapterData = {
  "slug": "pinker",
  "eyebrow": "08 — Campaign",
  "title": "Pinker Ink",
  "intro": "A dedicated launch visual and product-education creative for the Pinker pigment line.",
  "hero": {
    "src": "/projects/evenflo/campaigns/03-pinker-ink/hero/Evenflo-Intensify-Cool-Shades-Lip-Blends.png",
    "alt": "Pinker — campaign key visual"
  },
  "posts": [
    {
      "src": "/projects/evenflo/campaigns/03-pinker-ink/social/Microbeau-Lip-Blends-Cool-Shades-Evenflo-Pinker.png",
      "alt": "Pinker — pigment collection creative"
    }
  ]
};

export const evenfloCaseStudy = {
  heroImage: "/projects/evenflo/blonde-to-brunette-campaign/social/posts/evenflo-b2b-social-post-1.jpg",
  campaigns: [b2b, trueLips, gold, pinker] as const,
  brandPackaging: [
    { asset: b2b.logo!, label: "Blonde2Brunette Ink", kind: "Identity" },
    { asset: trueLips.logo!, label: "True Lips", kind: "Identity" },
    { asset: { src: "/projects/evenflo/blonde-to-brunette-campaign/packaging/evenflo-b2b-packaging-mockup.jpg", alt: "Blonde2Brunette Ink packaging mockup" }, label: "Blonde2Brunette Ink", kind: "Packaging" },
    { asset: { src: "/projects/evenflo/true-lips-campaign/packaging/evenflo-true-lips-packaging-mockup.jpg", alt: "True Lips packaging mockup" }, label: "True Lips", kind: "Packaging" },
  ],
};
