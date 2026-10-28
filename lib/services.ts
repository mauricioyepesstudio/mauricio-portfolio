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

export const engagementPlans = [
  { id: "start", title: "Start", format: "New business · defined project", description: "For founders opening a new business who need to look established from day one.", items: ["Naming support, positioning & brand identity", "Website or landing page with a contact journey", "Social profiles, Google Business Profile & launch content kit", "Lead form, CRM pipeline & handover"], cta: "Discuss a launch", example: { label: "EVOLUSA, a brand and platform launched from zero", href: "/evolusa" } },
  { id: "renew", title: "Renew", format: "Existing business · defined project", description: "For a business whose brand, website or marketing no longer matches the company it has become.", items: ["Brand & marketing audit with clear priorities", "Identity refresh or full rebrand", "Website redesign & content update", "Refreshed ads, social and print with AI-assisted production"], cta: "Plan a renewal" },
  { id: "run", title: "Run", format: "Monthly engagement", description: "For owners who want marketing, content and digital tools handled consistently every month.", items: ["Content planner & social media management", "Ads creative & campaign management", "Website, CRM & automation care", "Monthly activity report & next priorities"], cta: "Plan ongoing support", example: { label: "Resource Living, ongoing creative and lead campaigns", href: "/portfolio/resource-living" } },
  { id: "build", title: "Build", format: "Milestone-based development", description: "For a business ready to turn a manual process or product idea into a useful tool.", items: ["Discovery, scope & interactive prototype", "App, portal or CRM implementation", "Testing, release plan & team handover"], cta: "Scope a product", example: { label: "BELONG, a community app in development", href: "/belong" } },
] as const;

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
