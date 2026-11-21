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

export type StepVisual =
  | { kind: "image"; src: string; alt: string; fit?: "contain"; bg?: string; pos?: string }
  | { kind: "report" }
  | { kind: "wireframe" }
  | { kind: "checks"; items: readonly string[] };

export type PackageStep = { title: string; text: string; visual: StepVisual };

const RL = "/projects/resource-living/campaigns/06-broward-palm-beach-oct-2026";
const VENTURES = "/projects/real-group-entertainment/campaigns/01-2026-ventures/web";

export type Package = {
  id: string; title: string; format: string; tagline: string; gets: readonly string[]; cta: string;
  sub: readonly [string, string]; headline: readonly [string, string]; steps: readonly PackageStep[];
};

// Each package is shown as the path a client walks through. The images are real pieces
// from past work, used only as illustrations of each step (no client names, no results).
export const engagementPlans: readonly Package[] = [
  {
    id: "start", title: "Start", format: "New business", tagline: "Open with a brand that already looks established.",
    headline: ["Start with a", "clear direction."], sub: ["Logo, website and social,", "ready from day one."],
    gets: ["Logo & identity", "Website", "Social launch kit", "Google profile"], cta: "Discuss a launch",
    steps: [
      { title: "Logo & identity", text: "Your logo, colors and type, so everything looks like one brand.", visual: { kind: "image", src: "/studio/evolusa/brand/evolusa-primary.png", alt: "Example logo", fit: "contain", bg: "#f4f2ee" } },
      { title: "Website", text: "A clear site that says what you do and how to reach you.", visual: { kind: "image", src: `${VENTURES}/evolusa-live-product.png`, alt: "Example website home page", pos: "50% 0%" } },
      { title: "Social launch kit", text: "Your first posts and profile images, ready to publish.", visual: { kind: "image", src: "/studio/evolusa/pieces/evolusa-post-05-marketing.jpg", alt: "Example launch post" } },
      { title: "Google profile", text: "Set up so customers find you on Google and Maps.", visual: { kind: "image", src: "/studio/evolusa/pieces/guia-google-negocio-1.jpg", alt: "Example guide to appearing on Google" } },
    ],
  },
  {
    id: "renew", title: "Renew", format: "Existing business", tagline: "Refresh a brand that outgrew its look.",
    headline: ["Renew what", "you outgrew."], sub: ["Packaging, campaigns and content", "that fit who you are now."],
    gets: ["Brand review", "Packaging", "Campaign creative", "Newsletters & social"], cta: "Plan a renewal",
    steps: [
      { title: "Brand review", text: "We look at what still works and what no longer fits.", visual: { kind: "checks", items: ["Keep", "Refresh", "Replace"] } },
      { title: "Packaging", text: "Packaging that looks like the brand you are now.", visual: { kind: "image", src: "/projects/evenflo/true-lips-campaign/packaging/evenflo-true-lips-packaging-mockup.jpg", alt: "Example packaging" } },
      { title: "Campaign creative", text: "One campaign idea carried across ads, social and print.", visual: { kind: "image", src: "/projects/evenflo/true-lips-campaign/social/posts/evenflo-true-lips-social-post-1.jpg", alt: "Example campaign post" } },
      { title: "Newsletters & social", text: "Regular content that keeps customers coming back.", visual: { kind: "image", src: "/projects/microbeau/flux-mini-anniversary/hero/microbeau-flux-mini-anniversary-hero.jpg", alt: "Example product launch creative" } },
    ],
  },
  {
    id: "run", title: "Run", format: "Every month", tagline: "Your marketing, handled every month.",
    headline: ["Run it with", "intention."], sub: ["Posts, ads and video,", "handled every month."],
    gets: ["Social posts", "Ads & print", "Video", "Monthly report"], cta: "Plan ongoing support",
    steps: [
      { title: "Social posts", text: "Fresh posts every week, in one premium look.", visual: { kind: "image", src: `${RL}/social/kitchen-dusk-pool.jpg`, alt: "Example social post" } },
      { title: "Ads & print", text: "Ads for social, search and print, made from the same campaign.", visual: { kind: "image", src: `${RL}/advertising/pavers-a-beautiful-first-impression.jpg`, alt: "Example magazine ad" } },
      { title: "Video", text: "Short vertical reels for Instagram and Facebook.", visual: { kind: "image", src: `${RL}/video/01-pools-poster.jpg`, alt: "Example video reel", pos: "50% 70%" } },
      { title: "Monthly report", text: "What went out, how people responded and what comes next.", visual: { kind: "report" } },
    ],
  },
  {
    id: "build", title: "Build", format: "Apps & tools", tagline: "Turn an idea into an app people use.",
    headline: ["Build it with", "purpose."], sub: ["Prototype, app and launch,", "built around real use."],
    gets: ["Prototype", "Web app", "Testing", "Launch content"], cta: "Scope a product",
    steps: [
      { title: "Prototype", text: "Clickable screens to test the idea before anything is built.", visual: { kind: "wireframe" } },
      { title: "Web app", text: "A working app that runs on phone and desktop.", visual: { kind: "image", src: `${VENTURES}/belong-live-product.png`, alt: "Example web app home page", pos: "50% 0%" } },
      { title: "Testing", text: "Real people try it and we fix what gets in their way.", visual: { kind: "checks", items: ["Phone", "Desktop", "Real users"] } },
      { title: "Launch content", text: "Posts and visuals to announce it on day one.", visual: { kind: "image", src: "/studio/belong/belong-post-01-your-world.jpg", alt: "Example launch post" } },
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
