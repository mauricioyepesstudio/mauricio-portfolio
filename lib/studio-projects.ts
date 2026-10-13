export type ProjectStage = "Live product" | "Prototype" | "In development" | "Portfolio case study";
export type MilestoneState = "completed" | "in_progress" | "planned";
export type StudioProject = {
  slug: string; name: string; tagline: string; summary: string; stage: ProjectStage;
  href?: string; portfolioHref?: string; milestones: { title: string; state: MilestoneState; detail: string }[];
};
export const studioProjects: StudioProject[] = [
  { slug: "evolusa", name: "EVOLUSA", tagline: "Tu próximo paso.", summary: "Professional discovery and qualified connections for Spanish-speaking communities.", stage: "Live product", href: "https://evolusa.vercel.app", portfolioHref: "/evolusa", milestones: [
    { title: "Identity and concept", state: "completed", detail: "Brand assets and positioning documented." },
    { title: "Public product", state: "completed", detail: "Product link and professional application flow available." },
    { title: "Professional growth dashboard", state: "planned", detail: "Profiles, planner, reporting and social integrations require implementation and verification." }
  ]},
  { slug: "belong", name: "BELONG", tagline: "Build what matters, together.", summary: "A mission-first community platform built around people, projects and accountability.", stage: "In development", href: "https://belong-ruddy.vercel.app", portfolioHref: "/belong", milestones: [
    { title: "Brand identity", state: "completed", detail: "Visual system and campaign assets documented." },
    { title: "Public product experience", state: "completed", detail: "Public site is available; features should be verified against the live build." },
    { title: "Community and Proof Loop", state: "in_progress", detail: "Ongoing product development; no completion claim." }
  ]},
  { slug: "personal-cfo", name: "Personal CFO", tagline: "See your financial picture clearly.", summary: "A personal finance dashboard concept covering cash flow, net worth, liabilities and month-over-month changes.", stage: "Prototype", milestones: [
    { title: "Financial dashboard concept", state: "completed", detail: "Initial app structure and key metrics defined." },
    { title: "Data integration and reconciliation", state: "in_progress", detail: "Live account connectivity and data accuracy must be verified before claiming automation." },
    { title: "Automated monthly insights", state: "planned", detail: "Planned explanations, comparisons and actionable reports." }
  ]},
  { slug: "park-place-owner", name: "Park Place Owner Portal", tagline: "Financial clarity for property owners.", summary: "An owner and administrator portal for monthly unit statements, Excel/PDF imports, owner reporting and annual 1099 documents.", stage: "Prototype", milestones: [
    { title: "Owner and admin requirements", state: "completed", detail: "Excel/PDF imports, monthly views, owner visibility and 1099 requirements documented." },
    { title: "Client pilot and validation", state: "in_progress", detail: "Client acceptance and real import workflows still require verification." },
    { title: "Production readiness", state: "planned", detail: "Security, permissions, data checks and release gates remain to be verified." }
  ]},
  { slug: "resource-living", name: "Resource Living", tagline: "Creative and lead-generation systems.", summary: "Marketing, campaigns and automation workflows; work shown as a portfolio overview, not as access to client systems.", stage: "Portfolio case study", milestones: [
    { title: "Creative campaigns", state: "completed", detail: "Marketing and creative portfolio work." },
    { title: "Lead workflow improvements", state: "in_progress", detail: "Operational changes must be reviewed in their own system." },
    { title: "Verified performance case study", state: "planned", detail: "Only publish results supported by approved metrics." }
  ]},
  { slug: "agency-control-plane", name: "AI Control Plane", tagline: "One view across independent projects.", summary: "A central coordination and reporting layer for project status, decisions, permissions and next steps.", stage: "In development", milestones: [
    { title: "Project inventory", state: "completed", detail: "Repository and project coordination structure created." },
    { title: "Commercial DOT and AI Lab", state: "in_progress", detail: "Code and workflows exist; live operation and integration require separate verification." },
    { title: "Automated portfolio updates", state: "planned", detail: "Future publishing pipeline subject to review and approval." }
  ]}
];
export function getStudioProject(slug: string) { return studioProjects.find((p) => p.slug === slug); }
