import "server-only";

import type { CampaignChapterData } from "./types";
import type { CaseStudyData } from "./case-study-data";

const beautyInAuthenticity: CampaignChapterData = {
  slug: "beauty-in-authenticity",
  eyebrow: "05 — Campaign",
  title: "Beauty in Authenticity",
  intro:
    "A brand-storytelling campaign built around real PMU artists, pairing an editorial hero and packaging system with a full social and email rollout that let the work speak for itself.",
  // Swapped from the flower/script-only graphic to the real wide banner
  // featuring the four artists — the same campaign's strongest portrait
  // storytelling, previously sitting unused in a legacy asset folder.
  hero: {
    src: "/projects/microbeau/campaigns/01-beauty-in-authenticity/advertising/Beauty-Authenticity.png",
    alt: "Beauty in Authenticity campaign hero — four real PMU artists — Microbeau",
  },
  logo: {
    src: "/projects/microbeau/beauty-in-authenticity/logo/microbeau-beauty-in-authenticity-logo.jpg",
    alt: "Beauty in Authenticity campaign logo lockup",
  },
  packaging: {
    src: "/projects/microbeau/beauty-in-authenticity/packaging/microbeau-beauty-in-authenticity-packaging.jpg",
    alt: "Beauty in Authenticity packaging mockup",
  },
  newsletter: {
    src: "/projects/microbeau/beauty-in-authenticity/newsletter/microbeau-beauty-in-authenticity-newsletter.png",
    alt: "Beauty in Authenticity campaign email",
    note: "Campaign Email",
    width: 600,
    height: 7116,
  },
  posts: [
    ...[1, 2, 3, 4].map((n) => ({
      src: `/projects/microbeau/beauty-in-authenticity/social/posts/microbeau-beauty-in-authenticity-post-${n}.jpg`,
      alt: `Beauty in Authenticity social feed post ${n}`,
    })),
    // Real additional artist portraits from the same campaign's legacy asset
    // folder — strengthens the portrait storytelling the chapter is meant to lead with.
    { src: "/projects/microbeau/campaigns/01-beauty-in-authenticity/social/Ari-Schweiger-Beauty-Brows-Lips-Nips.png", alt: "Beauty in Authenticity — Ari Schweiger portrait" },
    { src: "/projects/microbeau/campaigns/01-beauty-in-authenticity/social/Liv-Seidel-Beauty-Authentic-Beauty.png", alt: "Beauty in Authenticity — Liv Seidel portrait" },
  ],
  stories: [1, 2, 3].map((n) => ({
    src: `/projects/microbeau/beauty-in-authenticity/social/stories/microbeau-beauty-in-authenticity-story-${n}.jpg`,
    alt: `Beauty in Authenticity social story ${n}`,
  })),
  videos: [
    {
      src: "/projects/microbeau/beauty-in-authenticity/video/microbeau-beauty-in-authenticity-video.mp4",
      caption: "Beauty in Authenticity — Campaign Film",
      orientation: "landscape",
    },
    {
      src: "/projects/microbeau/beauty-in-authenticity/video/microbeau-beauty-in-authenticity-video-2.mp4",
      caption: "Beauty in Authenticity — Artist Feature",
      orientation: "landscape",
    },
  ],
};

const vertixPico: CampaignChapterData = {
  slug: "vertix-pico",
  eyebrow: "06 — Campaign",
  title: "Vertix Pico",
  intro:
    "A precision-focused product launch for the Vertix Pico machine, translating a technical feature set into a clean hero, packaging and configuration story for working artists.",
  // Promoted from the banner gallery: the widest, cleanest single asset in the
  // campaign (macro hand shot + cartridge box + logo), stronger than the
  // original hero for opening the chapter at full width.
  hero: {
    src: "/projects/microbeau/vertix-pico/gallery/web-banners/microbeau-vertix-pico-web-banner-1.jpg",
    alt: "Vertix Pico campaign key visual — cartridge box, needle detail and application macro — Microbeau",
  },
  logo: {
    src: "/projects/microbeau/vertix-pico/logo/microbeau-vertix-pico-logo.jpg",
    alt: "Vertix Pico campaign logo lockup",
  },
  packaging: {
    src: "/projects/microbeau/vertix-pico/packaging/microbeau-vertix-pico-packaging.jpg",
    alt: "Vertix Pico packaging mockup",
  },
  banners: [
    { src: "/projects/microbeau/vertix-pico/hero/microbeau-vertix-pico-hero.jpg", alt: "Vertix Pico application macro — hand, needle and ink tube" },
    { src: "/projects/microbeau/vertix-pico/gallery/web-banners/microbeau-vertix-pico-web-banner-2.jpg", alt: "Vertix Pico web banner 2" },
  ],
  newsletter: {
    src: "/projects/microbeau/vertix-pico/newsletter/microbeau-vertix-pico-newsletter.png",
    alt: "Vertix Pico configuration email",
    note: "Configuration Email",
    width: 600,
    height: 3188,
  },
  posts: [1, 2, 3, 4].map((n) => ({
    src: `/projects/microbeau/vertix-pico/social/posts/microbeau-vertix-pico-post-${n}.jpg`,
    alt: `Vertix Pico social feed post ${n}`,
  })),
  stories: [1, 2, 3].map((n) => ({
    src: `/projects/microbeau/vertix-pico/social/stories/microbeau-vertix-pico-story-${n}.jpg`,
    alt: `Vertix Pico social story ${n}`,
  })),
  videos: [
    {
      src: "/projects/microbeau/vertix-pico/video/microbeau-vertix-pico-video.mp4",
      caption: "Vertix Pico — Campaign Film",
      orientation: "landscape",
    },
  ],
  // Real educational/technical asset from the pico-needle configuration
  // material — proof the campaign also translated technical specs for
  // working artists, not just product photography.
  gallery: [
    {
      title: "Needle Configuration Guide",
      assets: [
        { src: "/projects/microbeau/campaigns/08-pico-needle/hero/Vertix-Pico-Pico-Round-Shader-Medium-Taper-Curved-Magnum.png", alt: "Vertix Pico needle configuration comparison — round shader vs. curved magnum" },
      ],
      emphasis: "large",
    },
  ],
};

const kickstartVertix: CampaignChapterData = {
  slug: "kickstart-vertix",
  eyebrow: "07 — Campaign",
  title: "Kickstart Vertix",
  intro:
    "A launch-moment companion campaign that introduced the wider Vertix line, carrying its own hero and email direction across feed, story and web banner placements.",
  // Swapped from a text-only glitter card to the real five-device campaign
  // key visual — the same image the campaign already leans on everywhere else.
  hero: {
    src: "/projects/microbeau/kickstart-vertix/gallery/web-banners/microbeau-kickstart-vertix-web-banner-1.jpg",
    alt: "Kickstart Vertix campaign key visual — five-device colorway lineup — Microbeau",
  },
  logo: {
    src: "/projects/microbeau/kickstart-vertix/logo/microbeau-kickstart-vertix-logo.jpg",
    alt: "Kickstart Vertix campaign logo lockup",
  },
  newsletter: {
    src: "/projects/microbeau/kickstart-vertix/newsletter/microbeau-kickstart-vertix-newsletter.jpg",
    alt: "Kickstart Vertix campaign email",
    note: "Launch Email",
    width: 1161,
    height: 5970,
  },
  // post-1 was the same five-device lineup as the new hero (square-crop
  // variant) — dropped to avoid an immediate near-duplicate at equal prominence.
  posts: [2, 3, 4].map((n) => ({
    src: `/projects/microbeau/kickstart-vertix/social/posts/microbeau-kickstart-vertix-post-${n}.jpg`,
    alt: `Kickstart Vertix social feed post ${n}`,
  })),
  stories: [1, 2, 3, 4].map((n) => ({
    src: `/projects/microbeau/kickstart-vertix/social/stories/microbeau-kickstart-vertix-story-${n}.jpg`,
    alt: `Kickstart Vertix social story ${n}`,
  })),
  banners: [
    { src: "/projects/microbeau/kickstart-vertix/gallery/web-banners/microbeau-kickstart-vertix-web-banner-2.jpg", alt: "Kickstart Vertix web banner 2" },
  ],
};

const fluxMini: CampaignChapterData = {
  slug: "flux-mini",
  eyebrow: "08 — Campaign",
  title: "Flux Mini",
  intro:
    "A compact wireless machine positioned for portability — the campaign leans on tight product photography and a lightweight social system built for quick scrolling.",
  hero: {
    src: "/projects/microbeau/flux-mini/hero/microbeau-flux-mini-hero.webp",
    alt: "Flux Mini campaign hero — Microbeau",
  },
  logo: {
    src: "/projects/microbeau/flux-mini/logo/microbeau-flux-mini-logo.jpg",
    alt: "Flux Mini logo lockup",
  },
  banners: [1, 2].map((n) => ({
    src: `/projects/microbeau/flux-mini/gallery/web-banners/microbeau-flux-mini-web-banner-${n}.webp`,
    alt: `Flux Mini web banner ${n}`,
  })),
  posts: [
    { src: "/projects/microbeau/flux-mini/social/posts/microbeau-flux-mini-post-1.webp", alt: "Flux Mini social feed post 1" },
    { src: "/projects/microbeau/flux-mini/social/posts/microbeau-flux-mini-post-2.jpg", alt: "Flux Mini social feed post 2" },
    { src: "/projects/microbeau/flux-mini/social/posts/microbeau-flux-mini-post-3.jpg", alt: "Flux Mini social feed post 3" },
  ],
  stories: [1, 2, 3].map((n) => ({
    src: `/projects/microbeau/flux-mini/social/stories/microbeau-flux-mini-story-${n}.webp`,
    alt: `Flux Mini social story ${n}`,
  })),
  videos: [
    {
      src: "/projects/microbeau/flux-mini/video/microbeau-flux-mini-video.mp4",
      caption: "Flux Mini — Product Film",
      orientation: "landscape",
    },
  ],
};

const fluxMax: CampaignChapterData = {
  slug: "flux-max",
  eyebrow: "09 — Campaign",
  title: "Flux Max",
  intro:
    "The flagship machine in the Flux line, introduced through a bolder hero treatment and colorway-driven social content aimed at working professionals.",
  // Swapped from a testimonial text screenshot to the real "Oudwood" studio
  // product shot — the strongest individual product photography in the
  // entire Microbeau archive.
  hero: {
    src: "/projects/microbeau/flux-max/gallery/social/microbeau-flux-max-social-1.jpg",
    alt: "Flux Max S — Oudwood colorway studio product shot — Microbeau",
  },
  logo: {
    src: "/projects/microbeau/flux-max/logo/microbeau-flux-max-logo.jpg",
    alt: "Flux Max logo lockup",
  },
  gallery: [
    {
      // "Rouge" pairs with the Oudwood hero as the chapter's secondary
      // editorial product moment — same studio treatment, different colorway.
      title: "Rouge Colorway",
      assets: [
        { src: "/projects/microbeau/flux-max/gallery/social/microbeau-flux-max-social-2.jpg", alt: "Flux Max S — Rouge colorway studio product shot" },
      ],
      emphasis: "large",
    },
    {
      // Digital placement proof — kept visually smaller/standard, evidence
      // the work shipped in a real channel rather than a hero-scale visual.
      title: "Digital Placement",
      assets: [
        { src: "/projects/microbeau/flux-max/gallery/social/microbeau-flux-max-social-3.jpg", alt: "Flux Max S — mobile digital ad placement" },
      ],
    },
  ],
};

const killSwitch: CampaignChapterData = {
  slug: "kill-switch",
  eyebrow: "10 — Campaign",
  title: "Kill Switch — Black Friday",
  intro:
    "A high-contrast promotional push for the brand's Black Friday moment, built for speed — a single hero and email paired with a fast-moving story sequence.",
  // Swapped from a neon text-only card to the real three-colorway product
  // shot — the only product photography this chapter has, now leading it.
  hero: {
    src: "/projects/microbeau/kill-switch/social/stories/microbeau-kill-switch-story-1.jpg",
    alt: "Killswitch wireless footswitch — three-colorway product shot — Microbeau",
  },
  newsletter: {
    src: "/projects/microbeau/kill-switch/newsletter/microbeau-kill-switch-newsletter.jpg",
    alt: "Kill Switch Black Friday campaign email",
    note: "Promotional Email",
    width: 1024,
    height: 12006,
  },
  // story-1 is now the hero — dropped here to avoid repeating it immediately after.
  stories: [2, 3, 4, 5, 6].map((n) => ({
    src: `/projects/microbeau/kill-switch/social/stories/microbeau-kill-switch-story-${n}.jpg`,
    alt: `Kill Switch social story ${n}`,
  })),
};

export const microbeauCaseStudy: CaseStudyData = {
  // Flux Mini's product render replaces the Beauty in Authenticity hero: that
  // asset has "Beauty in Authenticity" script typography baked into the JPEG,
  // which collided with the page's own ProjectHero title rendered on top of it.
  heroImage: "/projects/microbeau/flux-mini/hero/microbeau-flux-mini-hero.webp",
  campaigns: [beautyInAuthenticity, vertixPico, kickstartVertix, fluxMini, fluxMax, killSwitch],
  brandPackagingCopy: {
    eyebrow: "04 — Brand System",
    title: "Six launches, one recognizable system.",
    description:
      "Every Microbeau campaign — from flagship product launches to fast-moving promotions — shares one identity language and packaging template, adapted for its own audience and moment.",
  },
  brandPackaging: [
    { asset: beautyInAuthenticity.logo!, label: "Beauty in Authenticity", kind: "Identity" },
    { asset: vertixPico.logo!, label: "Vertix Pico", kind: "Identity" },
    { asset: kickstartVertix.logo!, label: "Kickstart Vertix", kind: "Identity" },
    { asset: fluxMini.logo!, label: "Flux Mini", kind: "Identity" },
    { asset: fluxMax.logo!, label: "Flux Max", kind: "Identity" },
    { asset: beautyInAuthenticity.packaging!, label: "Beauty in Authenticity", kind: "Packaging" },
    { asset: vertixPico.packaging!, label: "Vertix Pico", kind: "Packaging" },
  ],
  socialCopy: {
    eyebrow: "11 — Social Campaign System",
    title: "Six campaigns, one editorial sequence.",
    description: "The strongest feed and story executions across every launch, curated side by side rather than shown as a full export dump.",
  },
  social: [
    { ...beautyInAuthenticity.stories![0], campaign: "Beauty in Authenticity", size: "feature" },
    { ...vertixPico.posts![0], campaign: "Vertix Pico", size: "support" },
    { ...kickstartVertix.stories![0], campaign: "Kickstart Vertix", size: "tall" },
    { ...fluxMini.posts![1], campaign: "Flux Mini", size: "support" },
    { ...killSwitch.stories![0], campaign: "Kill Switch", size: "support" },
    { ...beautyInAuthenticity.posts![1], campaign: "Beauty in Authenticity", size: "support" },
    { ...vertixPico.stories![0], campaign: "Vertix Pico", size: "tall" },
    { ...kickstartVertix.posts![0], campaign: "Kickstart Vertix", size: "support" },
  ],
  motionCopy: {
    eyebrow: "12 — Motion",
    title: "Product stories, in motion.",
  },
  motion: [beautyInAuthenticity, vertixPico, fluxMini].flatMap((c) => c.videos!.map((v) => ({ ...v, campaign: c.title }))),
};
