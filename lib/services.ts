export const serviceAreas = [
  { title: "Brand Strategy & Management", summary: "Create a clear identity and keep it consistent as your business grows.", items: ["Brand positioning, naming & messaging", "Logo systems & brand guidelines", "Brand books, launch kits & ongoing art direction"] },
  { title: "Websites & eCommerce", summary: "Turn your offer into a responsive website with a clear next step.", items: ["Business websites & landing pages", "Online stores & product experiences", "UI/UX, accessibility & website care"] },
  { title: "Apps & Digital Products", summary: "Take a focused idea from prototype to a tested first release.", items: ["Web apps, client portals & dashboards", "Mobile app design & development", "MVP planning, testing & release preparation"] },
  { title: "CRM & Automations", summary: "Connect enquiries, follow-up and reporting around your actual workflow.", items: ["CRM setup & lead pipelines", "Forms, email workflows & integrations", "Operational dashboards & reporting"] },
  { title: "Social Media & Marketing", summary: "Build a consistent presence with content and campaigns people can act on.", items: ["Content strategy, planners & account management", "Social creative, reels & email campaigns", "Meta / Google Ads creative & campaign management"] },
  { title: "Creative Production", summary: "Carry one visual direction across digital, motion and print.", items: ["Editorial, packaging & print-ready design", "Video, motion graphics & photography direction", "Campaign assets & AI-assisted creative production"] },
] as const;

export const engagementPlans = [
  { id: "launch", title: "Launch", format: "Defined project", description: "For a business that needs a clear brand and a place to convert interest into enquiries.", items: ["Brand essentials or a focused identity refresh", "Website or landing page with a contact journey", "Launch content kit & handover"], cta: "Discuss a launch" },
  { id: "build", title: "Build", format: "Milestone-based development", description: "For a business ready to turn a manual process or product idea into a useful tool.", items: ["Discovery, scope & interactive prototype", "App, portal or CRM implementation", "Testing, release plan & team handover"], cta: "Scope a product" },
  { id: "grow", title: "Grow", format: "Monthly engagement", description: "For a business that needs consistent creative execution and ongoing improvement.", items: ["Agreed content planner & brand management", "Website, CRM or campaign improvements", "Activity report & monthly priorities"], cta: "Plan ongoing support" },
] as const;
