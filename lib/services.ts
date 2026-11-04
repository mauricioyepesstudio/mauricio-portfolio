export const serviceAreas = [
  { id: "brand", title: "Brand Strategy & Management", summary: "Create a clear identity and keep it consistent as your business grows.", items: ["Brand positioning, naming & messaging", "Logo systems & brand guidelines", "Brand books, launch kits & ongoing art direction"] },
  { id: "web", title: "Websites & eCommerce", summary: "Turn your offer into a responsive website with a clear next step.", items: ["Business websites & landing pages", "Online stores & product experiences", "UI/UX, accessibility & website care"] },
  { id: "apps", title: "Apps & Digital Products", summary: "Take a focused idea from prototype to a tested first release.", items: ["Web apps, client portals & dashboards", "Mobile app design & development", "MVP planning, testing & release preparation"] },
  { id: "automation", title: "CRM & Automations", summary: "Connect enquiries, follow-up and reporting around your actual workflow.", items: ["CRM setup & lead pipelines", "Forms, email workflows & integrations", "Operational dashboards & reporting"] },
  { id: "marketing", title: "Social Media & Marketing", summary: "Build a consistent presence with content and campaigns people can act on.", items: ["Content strategy, planners & account management", "Social creative, reels & email campaigns", "Meta / Google Ads creative & campaign management"] },
  { id: "creative", title: "Creative Production", summary: "Carry one visual direction across digital, motion and print.", items: ["Editorial, packaging & print-ready design", "Video, motion graphics & photography direction", "Campaign assets & AI-assisted creative production"] },
  { id: "ai", title: "AI for Your Business", summary: "Find the repetitive work AI can take off your team, then set it up safely.", items: ["AI readiness review & one-page action plan", "AI assistants for content, replies and research", "Team guidelines on what data never goes into AI tools"] },
  { id: "operations", title: "Operations & Administration", summary: "Put the daily running of the business in one clear, documented place.", items: ["Email, calendar & shared documents setup", "Proposal, quote & invoice templates", "Process manuals, task boards & tool inventory"] },
  { id: "finance-legal", title: "Finance & Legal Essentials", summary: "Organize the numbers and paperwork so your accountant and attorney can do their part.", items: ["Pricing worksheets & revenue dashboards", "Website policy and service-agreement templates for professional review", "Marketing compliance checks before anything goes live"] },
  { id: "training", title: "Training & Professional Growth", summary: "Leave your team able to run what we build, and help people grow their own careers.", items: ["Hands-on training & short manuals for every handover", "AI-for-business workshops", "Resume, LinkedIn & portfolio refresh"] },
] as const;

export type PackageMedia = { src: string; alt: string; label: string; fit?: "contain"; bg?: string; pos?: string };

const RL = "/projects/resource-living/campaigns/06-broward-palm-beach-oct-2026";
const CFO = "/projects/personal-cfo/campaigns/01-brand-identity";
const VENTURES = "/projects/real-group-entertainment/campaigns/01-2026-ventures/web";

export type Package = {
  id: string; title: string; format: string; tagline: string; gets: readonly string[]; cta: string;
  example: { label: string; href: string }; cover: string; poster: string; sub: readonly [string, string]; headline: readonly [string, string]; media: readonly PackageMedia[];
};

export const engagementPlans: readonly Package[] = [
  {
    id: "start", cover: "/services/cover-start.jpg", poster: "/services/poster-start.jpg", sub: ["Logo, website and social,", "ready from day one."], headline: ["Start with a", "clear direction."], title: "Start", format: "New business", tagline: "Open with a brand that already looks established.",
    gets: ["Logo & identity", "Website", "Social launch kit", "Google profile"], cta: "Discuss a launch",
    example: { label: "See EVOLUSA", href: "/evolusa" },
    media: [
      { src: `${VENTURES}/evolusa-live-product.png`, alt: "EVOLUSA website home page", label: "Website" },
      { src: "/studio/evolusa/brand/evolusa-primary.png", alt: "EVOLUSA logo", label: "Logo", fit: "contain", bg: "#f4f2ee" },
      { src: "/studio/evolusa/pieces/evolusa-post-05-marketing.jpg", alt: "EVOLUSA launch social post", label: "Social post" },
      { src: "/studio/evolusa/pieces/guia-google-negocio-1.jpg", alt: "EVOLUSA guide to appearing on Google", label: "Google guide" },
    ],
  },
  {
    id: "renew", cover: "/services/cover-renew.jpg", poster: "/services/poster-renew.jpg", sub: ["Packaging, campaigns and content", "that fit who you are now."], headline: ["Renew what", "you outgrew."], title: "Renew", format: "Existing business", tagline: "Refresh a brand that outgrew its look.",
    gets: ["Brand review", "Packaging", "Campaign creative", "Newsletters & social"], cta: "Plan a renewal",
    example: { label: "See Evenflo", href: "/portfolio/evenflo" },
    media: [
      { src: "/projects/evenflo/true-lips-campaign/packaging/evenflo-true-lips-packaging-mockup.jpg", alt: "Evenflo True Lips packaging", label: "Packaging" },
      { src: "/projects/evenflo/true-lips-campaign/social/posts/evenflo-true-lips-social-post-1.jpg", alt: "Evenflo True Lips campaign post", label: "Campaign" },
      { src: "/projects/microbeau/flux-mini-anniversary/hero/microbeau-flux-mini-anniversary-hero.jpg", alt: "Microbeau Flux Mini anniversary creative", label: "Product launch" },
      { src: "/projects/microbeau/beauty-in-authenticity/logo/microbeau-beauty-in-authenticity-logo.jpg", alt: "Microbeau Beauty in Authenticity campaign", label: "Campaign identity" },
    ],
  },
  {
    id: "run", cover: "/services/cover-run.jpg", poster: "/services/poster-run.jpg", sub: ["Posts, ads and video,", "handled every month."], headline: ["Run it with", "intention."], title: "Run", format: "Every month", tagline: "Your marketing, handled every month.",
    gets: ["Social posts", "Ads & print", "Video", "Monthly report"], cta: "Plan ongoing support",
    example: { label: "See Resource Living", href: "/portfolio/resource-living" },
    media: [
      { src: `${RL}/social/kitchen-dusk-pool.jpg`, alt: "Resource Living kitchen social post", label: "Social" },
      { src: `${RL}/advertising/pavers-a-beautiful-first-impression.jpg`, alt: "Resource Living pavers magazine ad", label: "Print ad" },
      { src: `${RL}/video/01-pools-poster.jpg`, alt: "Resource Living pools video reel", label: "Video reel", pos: "50% 70%" },
      { src: `${RL}/social/outdoor-kitchen-golden-hour.jpg`, alt: "Resource Living outdoor kitchen social post", label: "Social" },
    ],
  },
  {
    id: "build", cover: "/services/cover-build.jpg", poster: "/services/poster-build.jpg", sub: ["Prototype, app and launch,", "built around real use."], headline: ["Build it with", "purpose."], title: "Build", format: "Apps & tools", tagline: "Turn an idea into an app people use.",
    gets: ["Prototype", "Web app", "Testing", "Launch content"], cta: "Scope a product",
    example: { label: "See BELONG", href: "/belong" },
    media: [
      { src: `${VENTURES}/belong-live-product.png`, alt: "BELONG app home page", label: "Web app" },
      { src: `${CFO}/identity/01-logo-system.png`, alt: "Personal CFO logo system", label: "App logo", fit: "contain", bg: "#ffffff" },
      { src: `${CFO}/social/post-01-banco-baja-4x5.png`, alt: "Personal CFO launch post", label: "Launch post" },
      { src: "/studio/belong/belong-post-01-your-world.jpg", alt: "BELONG launch post", label: "Launch post" },
    ],
  },
];

export const pilotProgram = {
  title: "Pilot program",
  summary: "We are opening a small number of pilot projects at no fee while we test every step of how we work, from the first message to the final handover.",
  items: [
    "No fee for our work during the pilot",
    "Third-party costs, such as domains, ad spend or subscriptions, only with your written approval",
    "A clear scope, timeline and handover agreed before work begins",
  ],
  cta: "Apply for the pilot",
} as const;

export const contactTopics = [
  { id: "pilot", label: "Pilot program (no fee)" },
  ...engagementPlans.map(plan => ({ id: plan.id, label: `${plan.title} plan` })),
  ...serviceAreas.map(area => ({ id: area.id, label: area.title })),
  { id: "other", label: "Something else / a job opportunity" },
] as const;

export const contactTopicIds = contactTopics.map(topic => topic.id) as [string, ...string[]];

export function contactHref(topic: string) {
  return `/contact?topic=${encodeURIComponent(topic)}`;
}
