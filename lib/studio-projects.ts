export type ProjectStage = "Live product" | "Prototype" | "In development" | "Portfolio case study";
export type MilestoneState = "completed" | "in_progress" | "planned";
export type StudioProject = {
  slug: string; name: string; tagline: string; summary: string; stage: ProjectStage;
  href?: string; portfolioHref?: string; milestones: { title: string; state: MilestoneState; detail: string }[];
};
export const studioProjects: StudioProject[] = [
  { slug: "real-group-entertainment", name: "Real Group Entertainment", tagline: "Independent products, one creative studio.", summary: "Brand strategy and creative direction across the studio’s own ventures.", stage: "Live product", portfolioHref: "/portfolio/real-group-entertainment", milestones: [] },
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
  { slug: "personal-cfo", name: "Personal CFO", tagline: "See your financial picture clearly.", summary: "Track income, expenses, net worth and monthly changes with data you enter yourself. No bank connections.", stage: "Live product", href: "https://personalcfo.me/app/", portfolioHref: "/portfolio/personal-cfo", milestones: [
    { title: "Financial overview", state: "completed", detail: "Income, expenses, assets and debts in one place." },
    { title: "Monthly comparison", state: "completed", detail: "Compare debt, bank balances and investments with the previous month." },
    { title: "Client review", state: "in_progress", detail: "The current release is being reviewed with Miguel." }
  ]},
  { slug: "owner-statements", name: "Owner Statements", tagline: "From monthly files to a reviewed owner report.", summary: "An independent property-reporting product in development: bilingual owner access, bulk imports, traceable expenses and document delivery. The private pilot is preserved while the subscription offering is validated.", stage: "In development", milestones: [
    { title: "Monthly reporting pilot", state: "completed", detail: "Excel imports, unit matching through external REC identifiers, USD/CAD separation and English/Spanish interfaces implemented in the pilot." },
    { title: "Documents and expense review", state: "completed", detail: "Bulk PDF handling, staged expense extraction, charge/credit review, reconciliation and batch approval implemented. Uncertain extraction needs human review." },
    { title: "Owner access and document controls", state: "completed", detail: "Assigned-unit filtering, separate statement publication, annual document archive and audited removal implemented in the pilot; automated permission and restoration checks were executed." },
    { title: "Independent subscription product", state: "in_progress", detail: "Product positioning, a reusable onboarding process and paid-pilot validation are being developed. The previous pilot is private; no public application access is offered here." },
    { title: "Production SaaS readiness", state: "planned", detail: "Company isolation, password recovery, offsite recovery, monitoring and billing must be implemented or verified before a commercial launch. No app-store release or active external integration is claimed." }
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
