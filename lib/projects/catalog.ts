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
    excerpt: "An integrated advertising and lead-generation ecosystem — editorial, campaign systems, social, email and video connecting South Florida homeowners, advertisers and service businesses.",
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
    deliverables: ["Campaign Direction", "Brand & Packaging Systems", "Social Media", "Email Marketing", "Motion", "Visual Systems"],
    cover: { from: "#5b21b6", to: "#db2777" },
    excerpt: "A shared brand system carried across two pigment launches — Blonde2Brunette Ink and True Lips — from identity and packaging through social, email and motion.",
    services: ["Campaign Design", "Brand Systems", "Email", "Social", "Motion"],
    problem: "Two pigment launches, one trade-facing and one consumer-facing, needed their own campaign identity while still reading unmistakably as one Evenflo Colours system.",
    strategy: "Build one shared identity and packaging template, then let each launch express it through its own hero, social and email direction for its specific audience.",
    solution: "Directed the Blonde2Brunette Ink and True Lips launches across hero imagery, packaging, social feed and story content, email and campaign video.",
    result: "The two launches share one recognizable brand system while still reading as distinct campaigns for their trade and consumer audiences.",
    metrics: [
      { label: "Industry", value: "Beauty" },
      { label: "Scope", value: "2 Campaign Launches" },
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
  {
    slug: "loana",
    title: "Loana Pizza",
    client: "Loana Pizza",
    category: "Food & Beverage Branding",
    year: "Recent",
    deliverables: ["Brand Identity", "Packaging", "Promotional Campaigns", "Uniform & Apparel", "Signage"],
    cover: { from: "#7C3AED", to: "#EC4899" },
    excerpt: "A full identity rollout for a pizza restaurant brand — logo, pizza-box packaging, in-store promotions and delivery uniforms built around one consistent red-and-white mark.",
    services: ["Brand Identity", "Packaging Design", "Advertising", "Art Direction"],
    problem: "The restaurant needed one recognizable mark that could carry across packaging, in-store promotions and delivery staff without looking like separate projects.",
    strategy: "Anchor everything to a single logo and red-and-white palette, then adapt it consistently across packaging, promotional pricing graphics and apparel.",
    solution: "Designed the logo, two-color pizza-box packaging, promotional flyers for weekly deals, delivery uniform graphics and storefront signage.",
    result: "A cohesive brand presence that reads the same way on the box, the storefront and the delivery order.",
    metrics: [
      { label: "Industry", value: "Food & Beverage" },
      { label: "Scope", value: "Full Identity" },
      { label: "Deliverables", value: "Logo + Packaging" },
      { label: "Role", value: "Creative Direction" },
    ],
  },
  {
    slug: "stilogroup",
    title: "Stilo Group",
    client: "Stilo Group",
    category: "Architecture & Interior Design",
    year: "Recent",
    deliverables: ["Logo Design", "Brand Identity", "Presentation Design"],
    cover: { from: "#111827", to: "#C08457" },
    excerpt: "A geometric logo mark and brand presentation system for an architecture and interior design company, paired with real project photography.",
    services: ["Brand Identity", "Logo Design", "Art Direction"],
    problem: "The company needed a mark that read as premium and precise enough to sit next to architectural and interior photography.",
    strategy: "Build a geometric monogram from angled forms that echo architectural lines, paired with a restrained gold-and-charcoal palette.",
    solution: "Designed the Stilo Group logo mark and a presentation layout system for pairing the identity with interior and architectural photography.",
    result: "A distinct, professional mark the company can present alongside its project photography.",
    metrics: [
      { label: "Industry", value: "Architecture" },
      { label: "Scope", value: "Identity System" },
      { label: "Deliverables", value: "Logo + Presentation" },
      { label: "Role", value: "Brand Designer" },
    ],
  },
  {
    slug: "branding",
    title: "Brand Identity Collection",
    client: "Multiple Clients",
    category: "Brand Identity & Marketing Collateral",
    year: "Recent",
    deliverables: ["Logo Design", "Brand Identity", "Print & Digital Collateral", "Vehicle Wraps", "Business Stationery", "Social & Out-of-Home Ads"],
    cover: { from: "#0F172A", to: "#F59E0B" },
    excerpt: "A collection of independent identity projects — from a bakery's seasonal promotions to a services company's full stationery, vehicle wrap and web system.",
    services: ["Brand Identity", "Logo Design", "Print Design", "Digital Marketing", "Vehicle Graphics"],
    problem: "Several independent businesses needed a recognizable identity and matching marketing collateral without the budget for a dedicated in-house design team.",
    strategy: "Build each identity around one clear mark and a small set of layout rules that could be reused consistently across print, digital and physical touchpoints.",
    solution: "Delivered logo systems, promotional flyers, social and out-of-home creative, business stationery, brochures and vehicle wrap designs across a mix of independent clients.",
    result: "Each business gained a consistent, ready-to-use visual identity across the channels where their customers actually encounter them.",
    metrics: [
      { label: "Scope", value: "Multi-Client" },
      { label: "Deliverables", value: "Identity + Collateral" },
      { label: "Channels", value: "Print + Digital" },
      { label: "Role", value: "Graphic Designer" },
    ],
  },
  {
    slug: "real-group-entertainment",
    title: "Real Group Entertainment",
    client: "Real Group Entertainment LLC",
    category: "Creative Agency",
    year: "Ongoing",
    deliverables: ["Brand Identity", "Capability Deck", "Web Development", "Digital Marketing"],
    cover: { from: "#111827", to: "#0EA5E9" },
    excerpt: "The identity and capabilities presentation for my own creative agency, Real Group Entertainment — covering web development, graphic design and photography services.",
    services: ["Brand Identity", "Creative Direction", "Web Development", "Digital Marketing"],
    problem: "Real Group Entertainment needed its own identity and a clear way to present its service range to prospective clients.",
    strategy: "Design a simple mark and a service-deck format that shows real client work, like the Microbeau website, as proof for each capability.",
    solution: "Designed the agency logo and a capabilities presentation covering web development, graphic design and photography, illustrated with completed client work.",
    result: "A self-contained capabilities deck the agency can share directly with prospective clients.",
    metrics: [
      { label: "Type", value: "Own Agency" },
      { label: "Founded", value: "2021" },
      { label: "Services", value: "Design + Web + Marketing" },
      { label: "Role", value: "Founder & Creative Director" },
    ],
  },
  {
    slug: "stamina",
    title: "Hercules",
    client: "Hot Boutique",
    category: "Packaging Design",
    year: "2021",
    deliverables: ["Packaging Design", "Label Artwork", "Print Production"],
    cover: { from: "#111827", to: "#22C55E" },
    excerpt: "Print-ready label artwork for a dietary supplement, produced in two color variants to the manufacturer's exact carton specification.",
    services: ["Packaging Design", "Print Production"],
    problem: "The label artwork needed to fit a converter's exact die-line and regulatory panel requirements across two color variants.",
    strategy: "Work directly within the manufacturer's carton dimensions and required label panels — supplement facts, warnings and barcode — so the art fit without rework at press.",
    solution: "Delivered label graphics for the red and green colorways, sized and paneled to the printer's die-line specification.",
    result: "Print-ready artwork matched to the manufacturer's carton spec for both color variants.",
    metrics: [
      { label: "Category", value: "Supplement Packaging" },
      { label: "Variants", value: "2 Colorways" },
      { label: "Deliverable", value: "Print-Ready Label Art" },
      { label: "Role", value: "Packaging Designer" },
    ],
  },
  {
    slug: "cinemark",
    title: "Cinemark Colombia",
    client: "Cinemark Colombia S.A.S.",
    category: "Retail & Concession Promotions",
    year: "2017",
    deliverables: ["Promotional Campaign Design", "Print Advertising", "Loyalty Program Graphics"],
    cover: { from: "#991B1B", to: "#F59E0B" },
    excerpt: "Concession-counter promotional artwork for Cinemark Colombia, tying a Jet chocolate giveaway to a National Geographic collectible album and the Cinemark Elite Gold loyalty card.",
    services: ["Advertising Design", "Campaign Design", "Print Design"],
    problem: "The promotion needed to explain a multi-part offer — a free collectible album with a chocolate purchase, plus a loyalty-card combo deal — clearly at the concession counter.",
    strategy: "Use a consistent underwater 'adventure' visual theme across every panel so the offer read as one promotion instead of three separate ones.",
    solution: "Designed the promotional artwork covering the chocolate-and-album giveaway and the Elite Gold combo pricing, ready for in-theater print.",
    result: "Clear, on-brand promotional signage for the concession offer, consistent with Cinemark Colombia's loyalty program.",
    metrics: [
      { label: "Client", value: "Cinemark Colombia" },
      { label: "Category", value: "Concession Promo" },
      { label: "Format", value: "In-Theater Print" },
      { label: "Role", value: "Graphic Designer" },
    ],
  },
];

