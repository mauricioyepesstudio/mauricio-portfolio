import type { Brand } from "./types";

export type BrandCopy = Omit<Brand, "heroImage" | "campaigns">;

export type CampaignEditorial = {
  /** Overrides the auto-derived (folder-name-based) title. */
  title?: string;
  /** Short category label shown above the title, replacing the default "Campaign NN" numbering. */
  eyebrow?: string;
  /** One-sentence professional context for the chapter. Describes real, observable deliverables — never a metric or result. */
  context?: string;
  /** Explicit display order within the project. Lower renders first. Falls back to filesystem.ts's CAMPAIGN_PRIORITY / alphabetical order when omitted. */
  priority?: number;
};

/**
 * Editorial control for individual campaign chapters, keyed by brand slug then campaign
 * (folder) slug. Filesystem discovery still owns which media exists — this only controls
 * how a chapter is titled, labeled and ordered. Chapters without an entry here render with
 * their auto-derived title and default ordering.
 */
export const campaignCatalog: Record<string, Record<string, CampaignEditorial>> = {
  "resource-living": {
    "01-ad-sales": {
      title: "Ad Sales Campaign",
      eyebrow: "Advertising · Lead Generation",
      context:
        "Advertiser-facing creative built to bring South Florida service businesses into the magazine's advertising and digital lead program.",
      priority: 0,
    },
    "02-pool-leads": {
      title: "Pool Leads Campaign",
      eyebrow: "Digital Marketing · Lead Generation",
      context:
        "Homeowner-facing creative pairing lifestyle photography with direct calls to action for pool and outdoor-living consultations.",
      priority: 1,
    },
    "03-c2-multimedia-lead-network": {
      title: "C2 Multimedia Lead Network",
      eyebrow: "Brand System · Digital Marketing",
      context:
        "A dedicated lead-network identity and campaign system extending Resource Living's advertiser program into its own multimedia product.",
      priority: 2,
    },
    "04-your-business-here-services": {
      title: "Your Business Here / Services",
      eyebrow: "Advertising · Social Media",
      context:
        "A repeatable service-category ad system — kitchens, pools, roofing, windows, landscaping — giving contractors a consistent way to advertise inside the publication.",
      priority: 3,
    },
  },
  evenflo: {
    "01-blonde-to-brunette-ink": {
      title: "Blonde 2 Brunette",
      eyebrow: "Product Launch · Beauty",
      context: "Launch creative for the hybrid-formula, REACH-compliant Blonde 2 Brunette pigment collection.",
      priority: 0,
    },
    "02-its-raining-gold-ink": {
      title: "It's Raining Gold",
      eyebrow: "Promotion · Beauty",
      context: "Promotional creative for the Gold pigment collection, paired with a sets-and-singles offer.",
      priority: 1,
    },
    "03-pinker-ink": {
      title: "Pinker",
      eyebrow: "Product Launch · Beauty",
      context: "Launch creative for the Pinker cool-shade lip pigment line.",
      priority: 2,
    },
    "04-true-lips-ink": {
      title: "True Lips",
      eyebrow: "Product Launch · Beauty",
      context: "Launch creative for the True Lips unisex pigment collection.",
      priority: 3,
    },
  },
  getlost: {
    logos: {
      title: "Brand Identity",
      eyebrow: "Identity",
      priority: 0,
    },
    "black-rolling-papers-packaging": {
      title: "Black Rolling Papers — Packaging",
      eyebrow: "Packaging",
      priority: 1,
    },
    "new-products-social-feed": {
      title: "New Product Launches",
      eyebrow: "Product · Social",
      priority: 2,
    },
    "events-social-feed": {
      title: "Events",
      eyebrow: "Experiential · Social",
      priority: 3,
    },
    "web-site-design": {
      title: "Website Design",
      eyebrow: "Digital",
      priority: 4,
    },
    "black-rolling-papers-social-feed": {
      title: "Black Rolling Papers — Social",
      eyebrow: "Social Media",
      priority: 5,
    },
    "estationery-business-print": {
      title: "Print & Stationery",
      eyebrow: "Editorial & Print",
      priority: 6,
    },
  },
  microbeau: {
    "01-beauty-in-authenticity": {
      title: "Beauty in Authenticity",
      eyebrow: "Brand Campaign",
      context:
        "An artist-storytelling campaign spotlighting real PMU professionals, pairing editorial-style portraits with supporting social and web creative.",
    },
    "07-mystique-brows-by-jenny-lind-brows": {
      title: "Mystique Brows × Jenny Lind",
      eyebrow: "Artist Partnership",
      context: "Co-branded creative for a Microbeau artist partnership, built around a hero visual and matching social execution.",
    },
    "08-pico-needle": {
      title: "Pico Needle Launch",
      eyebrow: "Product Launch",
      context: "Product-education creative introducing the Pico needle line, balancing technical detail with the brand's visual language.",
    },
    "11-twelve-days-of-beauty": {
      title: "Twelve Days of Beauty",
      eyebrow: "Seasonal Promotion",
      context: "A holiday promotional series spanning hero and social formats across multiple product lines.",
    },
    "02-blak-friday": {
      title: "Black Friday",
      eyebrow: "Promotional",
      context: "Seasonal sale creative built for fast, high-visibility distribution across social channels.",
    },
  },
  "seafood-delight": {
    logo: { eyebrow: "Brand Identity" },
    packaging: { eyebrow: "Packaging System" },
    web: { eyebrow: "Digital" },
  },
};

export const brandCatalog: BrandCopy[] = [
  {
    slug: "resource-living",
    title: "Resource Living",
    client: "Resource Living",
    category: "Editorial & Integrated Marketing",
    year: "Ongoing",
    deliverables: ["Creative Direction", "Editorial Design", "Campaign Systems", "Lead Generation", "Social Media", "Email Marketing"],
    cover: { from: "#1d2b22", to: "#a78753" },
    excerpt: "An integrated editorial and lead-generation ecosystem connecting print, advertising, landing experiences, email and social content for South Florida homeowners and service businesses.",
    services: ["Creative Direction", "Editorial", "Advertising", "Digital Strategy"],
    problem: "Resource Living needed its magazine, advertiser acquisition and homeowner lead programs to feel like parts of one trusted publication rather than disconnected marketing pieces.",
    strategy: "Organize the work around distinct audience journeys: build authority through editorial, attract advertisers with a clear media proposition, and turn homeowner interest into qualified service inquiries.",
    solution: "Directed a connected system spanning magazine advertising, advertiser outreach, category-specific lead campaigns, landing and email experiences, and recurring social content.",
    result: "The resulting system gives the brand a consistent structure that can be extended by campaign and service category without rebuilding the creative framework each time.",
    metrics: [
      { label: "Industry", value: "Home & Living" },
      { label: "Scope", value: "Integrated" },
      { label: "Channels", value: "Print + Digital" },
      { label: "Role", value: "Creative Direction" },
    ],
  },
  {
    slug: "microbeau",
    title: "Microbeau",
    client: "Microbeau",
    category: "Product Campaigns & Brand Marketing",
    year: "Ongoing",
    deliverables: ["Creative Direction", "Product Launches", "Campaign Design", "Social Media", "Web Banners", "Sales Materials"],
    cover: { from: "#111827", to: "#6d28d9" },
    excerpt: "A flexible campaign system for a professional permanent-makeup brand, spanning product education, launches, promotions and artist-focused storytelling.",
    services: ["Creative Direction", "Campaign Design", "Digital Marketing", "Product Launches"],
    problem: "Frequent launches and promotions needed to communicate technical products quickly while preserving a premium, recognizable brand presence across channels.",
    strategy: "Create campaign families with clear hero concepts and repeatable social and web formats, allowing each launch to feel distinctive while remaining part of the same brand.",
    solution: "Developed campaign creative for product lines, promotional moments, education and artist stories across hero, social, banner and sales-sheet formats.",
    result: "A modular visual approach now supports varied campaign needs without forcing every new initiative to start from a blank page.",
    metrics: [
      { label: "Industry", value: "Beauty Tech" },
      { label: "Scope", value: "Campaign System" },
      { label: "Audience", value: "PMU Artists" },
      { label: "Role", value: "Senior Designer" },
    ],
  },
  {
    slug: "getlost",
    title: "Get Lost",
    client: "Get Lost",
    category: "Brand Identity, Packaging & Retail",
    year: "2023",
    deliverables: ["Creative Direction", "Brand Identity", "Packaging", "Product Content", "Events", "Website Design", "Print"],
    cover: { from: "#101010", to: "#276749" },
    excerpt: "A lifestyle identity carried consistently from packaging and products to events, print, social content and the online storefront.",
    services: ["Brand Identity", "Packaging", "Art Direction", "Digital"],
    problem: "The brand needed a recognizable visual world that could compete in a crowded category and remain coherent across small packaging, social content and large event environments.",
    strategy: "Use the illustrated identity as a strong anchor, then build a consistent product and lifestyle language around it for every customer touchpoint.",
    solution: "Extended the identity across packaging, product launches, business collateral, event presence, social creative and e-commerce design.",
    result: "The brand now presents one cohesive personality across shelf, screen and live experiences.",
    metrics: [
      { label: "Industry", value: "Lifestyle" },
      { label: "Scope", value: "Brand System" },
      { label: "Channels", value: "Retail + Digital" },
      { label: "Role", value: "Creative Director" },
    ],
  },
  {
    slug: "evenflo",
    title: "Evenflo Colours",
    client: "Evenflo Colours",
    category: "Beauty Product Launches",
    year: "Ongoing",
    deliverables: ["Campaign Direction", "Product Launches", "Social Media", "Email Marketing", "Product Education", "Visual Systems"],
    cover: { from: "#5b21b6", to: "#db2777" },
    excerpt: "A repeatable launch framework for professional pigment collections, balancing product education with polished campaign imagery.",
    services: ["Campaign Design", "Product Launches", "Email", "Social"],
    problem: "Each pigment collection required its own launch story while still communicating product detail and belonging unmistakably to the Evenflo Colours brand.",
    strategy: "Pair expressive campaign concepts with consistent information hierarchy across hero, social and newsletter executions.",
    solution: "Created coordinated launch families for Blonde 2 Brunette, It's Raining Gold, Pinker and True Lips using a shared cross-channel structure.",
    result: "The framework makes separate product stories feel connected and provides a clear model for future launches.",
    metrics: [
      { label: "Industry", value: "Beauty" },
      { label: "Scope", value: "Launch System" },
      { label: "Audience", value: "PMU Artists" },
      { label: "Role", value: "Senior Designer" },
    ],
  },
  {
    slug: "seafood-delight",
    title: "Seafood Delight",
    client: "Seafood Delight",
    category: "Branding, Packaging & Digital",
    year: "2022",
    deliverables: ["Creative Direction", "Brand Identity", "Packaging", "Website Design"],
    cover: { from: "#0f766e", to: "#0284c7" },
    excerpt: "A clear nautical identity and expandable packaging system designed to carry a frozen-seafood range from shelf to online storefront.",
    services: ["Brand Identity", "Packaging", "Art Direction", "Web Design"],
    problem: "The product range needed to communicate freshness and trust while remaining easy to recognize and extend across multiple seafood varieties.",
    strategy: "Build a concise identity and a repeatable packaging hierarchy that could scale across products, then bring the same visual language online.",
    solution: "Designed the logo, packaging applications and e-commerce direction as one connected shelf-to-screen system.",
    result: "The resulting identity provides a consistent foundation for the existing range and future product additions.",
    metrics: [
      { label: "Industry", value: "Food" },
      { label: "Scope", value: "Identity System" },
      { label: "Channels", value: "Packaging + Web" },
      { label: "Role", value: "Creative Director" },
    ],
  },
];

