import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Circle, Clock3 } from "lucide-react";
import { studioProjects } from "@/lib/studio-projects";
import { getProjects, FEATURED_CASE_STUDY_SLUGS } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Building — Work & Ventures",
  description: "Explore the identity, creative work, product experiences and development of EVOLUSA, BELONG, Personal CFO and more.",
  path: "/building",
});

const states = {
  completed: { label: "Completed", Icon: CheckCircle2 },
  in_progress: { label: "In development", Icon: Clock3 },
  planned: { label: "Next", Icon: Circle },
} as const;
const belong = "/projects/real-group-entertainment/campaigns/02-belong-brand";
const features = [
  { slug: "evolusa", number: "01", eyebrow: "Identity / product / growth", title: "EVOLUSA", tagline: "Tu próximo paso.", image: "/brand/live-product/evolusa-live-homepage.png", imageAlt: "EVOLUSA product homepage", identity: "/brand/evolusa/EVOLUSA_Profile_1080x1080.png", identityAlt: "EVOLUSA brand mark", creative: "/brand/live-product/evolusa-hero-creative.webp", creativeAlt: "EVOLUSA launch campaign artwork", brand: "Brand direction", brandDescription: "A recognizable identity translated into product and launch creative.", sections: ["Professional discovery", "Professional applications", "Service categories", "Growth and social content"], href: "/evolusa" },
  { slug: "belong", number: "02", eyebrow: "Community / brand / product", title: "BELONG", tagline: "Build what matters, together.", image: "/brand/live-product/belong-live-homepage.png", imageAlt: "BELONG product homepage", identity: belong + "/identity/belong-b-mark.jpg", identityAlt: "BELONG identity symbol", creative: belong + "/hero/belong-community-banner.jpg", creativeAlt: "BELONG community brand banner", brand: "Brand language", brandDescription: "A visual identity built around connection, shared purpose and belonging.", sections: ["Identity and onboarding", "Community discovery", "Projects and events", "Proof Loop development"], href: "/belong" },
] as const;

export default function BuildingPage() {
  const allWork = getProjects();
  const ordered = [...FEATURED_CASE_STUDY_SLUGS.map(slug => allWork.find(p => p.slug === slug)).filter((p): p is NonNullable<typeof p> => Boolean(p)), ...allWork.filter(p => !FEATURED_CASE_STUDY_SLUGS.includes(p.slug as (typeof FEATURED_CASE_STUDY_SLUGS)[number]))];
  return (
    <main className="pb-28 pt-32 sm:pt-40">
      <div className="container-px mx-auto max-w-content">
        <p className="eyebrow mb-5">Building / Selected work</p>
        <h1 className="max-w-5xl text-[clamp(3rem,9vw,6.8rem)] font-semibold leading-[0.94] tracking-[-0.05em] text-paper">Ideas made <span className="font-serif italic text-gold">visible.</span></h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-bone">Brand identities, digital products, campaigns and the work behind them. Explore each project from concept to what comes next.</p>
        <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 border-b border-line pb-6 text-xs uppercase tracking-[0.15em]">
          <a href="#ventures" className="text-gold hover:text-paper">Ventures</a>
          <a href="#other-projects" className="text-bone hover:text-paper">In progress</a>
          <a href="#client-work" className="text-bone hover:text-paper">Creative work</a>
        </div>
        <section id="ventures" className="scroll-mt-32">
          {features.map((f) => {
            const project = studioProjects.find(p => p.slug === f.slug);
            return <article key={f.slug} className="border-b border-line py-16 sm:py-24">
              <div className="mb-8 flex items-center gap-4"><span className="text-xs tracking-[0.2em] text-gold">{f.number}</span><span className="eyebrow">{f.eyebrow}</span></div>
              <div className="mb-9 flex flex-wrap items-end justify-between gap-5"><div><h2 className="text-[clamp(3rem,8vw,5.5rem)] font-semibold leading-none tracking-tight text-paper">{f.title}</h2><p className="mt-3 text-xl text-bone">{f.tagline}</p></div><Link href={f.href} className="inline-flex items-center gap-2 border-b border-gold pb-2 text-sm text-paper hover:text-gold">Explore the complete project <ArrowUpRight size={16}/></Link></div>
              <div className="grid gap-4 lg:grid-cols-[1.65fr_1fr]">
                <div className="overflow-hidden rounded-2xl border border-line bg-white/[0.03]"><Image src={f.image} alt={f.imageAlt} width={1440} height={900} className="aspect-[16/10] w-full object-cover object-top"/><p className="px-5 py-4 text-xs uppercase tracking-widest text-bone">Product experience</p></div>
                <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
                  <div className="overflow-hidden rounded-2xl border border-line bg-white/[0.03]"><Image src={f.identity} alt={f.identityAlt} width={650} height={650} className="aspect-[4/3] w-full object-contain"/><p className="px-4 py-3 text-xs uppercase tracking-widest text-bone">Brand identity</p></div>
                  <div className="overflow-hidden rounded-2xl border border-line bg-white/[0.03]"><Image src={f.creative} alt={f.creativeAlt} width={1200} height={700} className="aspect-[4/3] w-full object-cover"/><p className="px-4 py-3 text-xs uppercase tracking-widest text-bone">Creative direction</p></div>
                </div>
              </div>
              <div className="mt-10 grid gap-10 lg:grid-cols-2">
                <div><p className="eyebrow mb-3">Inside the project</p><h3 className="text-2xl font-semibold text-paper">{f.brand}</h3><p className="mt-3 max-w-lg text-sm leading-7 text-bone">{f.brandDescription}</p><div className="mt-6 flex flex-wrap gap-2">{f.sections.map(section=><span key={section} className="rounded-full border border-line px-4 py-2 text-xs text-bone">{section}</span>)}</div><Link href={f.href+"#venture-brand"} className="mt-6 inline-flex items-center gap-2 text-sm text-gold hover:text-paper">Explore brand assets and product sections <ArrowUpRight size={15}/></Link></div>
                <div><p className="eyebrow mb-4">Development journey</p><ol className="space-y-4">{project?.milestones.map(m=>{const {Icon,label}=states[m.state];return <li key={m.title} className="flex gap-3"><Icon size={17} className="mt-0.5 shrink-0 text-gold"/><div><p className="text-sm font-semibold text-paper">{m.title} <span className="ml-2 text-xs font-normal text-bone">{label}</span></p><p className="mt-1 text-sm leading-6 text-bone">{m.detail}</p></div></li>})}</ol></div>
              </div>
            </article>;
          })}
        </section>
        <section id="other-projects" className="scroll-mt-32 py-20">
          <p className="eyebrow mb-4">More in the studio</p><h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-paper sm:text-5xl">What we’re building next.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {studioProjects.filter(p=>p.slug!=="evolusa"&&p.slug!=="belong").map(p=><article id={p.slug} key={p.slug} className="scroll-mt-32 rounded-2xl border border-line p-6 sm:p-8"><div className="flex flex-wrap items-center justify-between gap-3"><h3 className="text-2xl font-semibold text-paper">{p.name}</h3><span className="text-xs uppercase tracking-wider text-gold">{p.stage}</span></div><p className="mt-2 text-lg text-paper">{p.tagline}</p><p className="mt-3 text-sm leading-7 text-bone">{p.summary}</p><div className="mt-6 flex flex-wrap gap-2">{p.milestones.map(m=><span key={m.title} className="rounded-full border border-line px-3 py-2 text-xs text-bone">{m.title}</span>)}</div>{p.slug==="personal-cfo"&&<Link href="/personal-cfo" className="mt-6 inline-flex items-center gap-2 border-b border-gold pb-2 text-sm text-gold">Explore brandbook & product <ArrowUpRight size={15}/></Link>}</article>)}
          </div>
        </section>
        <section id="client-work" className="scroll-mt-32 border-t border-line py-20"><p className="eyebrow mb-4">Selected creative work</p><h2 className="mb-10 text-4xl font-semibold tracking-tight text-paper sm:text-5xl">Campaigns, identities & editorial.</h2><div className="grid gap-6 md:grid-cols-2">{ordered.map(project=><ProjectCard key={project.slug} project={project}/>)}</div></section>
      </div>
    </main>
  );
}
