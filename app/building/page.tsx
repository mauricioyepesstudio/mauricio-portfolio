import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Circle, Clock3 } from "lucide-react";
import { studioProjects } from "@/lib/studio-projects";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Building — Products in Progress",
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
  return (
    <main className="pb-28 pt-32 sm:pt-40">
      <div className="container-px mx-auto max-w-content">
        <p className="eyebrow mb-5">Building / Products in progress</p>
        <h1 className="max-w-5xl text-[clamp(3rem,9vw,6.8rem)] font-semibold leading-[0.94] tracking-[-0.05em] text-paper">Ideas made <span className="font-serif italic text-gold">visible.</span></h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-bone">The products we are creating: their identity, experience, progress and next steps. From concept to real development.</p>
        <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 border-b border-line pb-6 text-xs uppercase tracking-[0.15em]">
          <a href="#ventures" className="text-gold hover:text-paper">Ventures</a>
          <a href="#other-projects" className="text-bone hover:text-paper">In progress</a>
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
          <p className="eyebrow mb-4">03 / Product studio</p>
          <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-paper sm:text-5xl">More than a concept.</h2>
          <article id="personal-cfo" className="scroll-mt-32 border-b border-line py-16">
            <p className="eyebrow mb-5">03 / Brand identity · Financial product</p>
            <h3 className="mb-8 text-5xl font-bold text-paper sm:text-7xl">Personal CFO</h3>
            <div className="grid gap-4 lg:grid-cols-2">
              <div className="flex min-h-[450px] flex-col justify-between rounded-3xl p-9 sm:p-12" style={{background:"#102A43"}}>
                <p className="text-sm font-bold tracking-[0.22em]" style={{color:"#72E3B2"}}>PERSONAL CFO / CAMPAIGN</p>
                <div><p className="text-[clamp(3rem,5vw,5rem)] font-black leading-[0.95] text-white">YOUR MONEY.<br/><span style={{color:"#72E3B2"}}>YOUR MOVE.</span></p><p className="mt-7 text-lg text-white/75">Know where you stand. Decide what comes next.</p></div>
                <div className="flex gap-3">{["#72E3B2","#127C70","#F3F6F8"].map(c=><span key={c} className="h-9 w-9 rounded-full" style={{background:c}}/>)}</div>
              </div>
              <div className="flex min-h-[450px] flex-col justify-between rounded-3xl p-9 sm:p-12" style={{background:"#72E3B2",color:"#102A43"}}>
                <p className="text-sm font-bold tracking-[0.22em]">PERSONAL CFO / FINANCIAL CLARITY</p>
                <div><p className="text-[clamp(3rem,5vw,5rem)] font-black leading-[0.95]">LESS<br/>GUESSING.<br/>MORE<br/>CLARITY.</p></div>
                <p className="text-sm">Net worth / Cash flow / Monthly movement</p>
              </div>
            </div>
            <p className="mt-4 text-xs text-bone">Editorial portfolio creatives; the original vector brand assets are retained separately.</p>
            <Link href="/personal-cfo" className="mt-7 inline-flex items-center gap-2 text-sm text-gold">Full identity and product case study <ArrowUpRight size={16}/></Link>
          </article>
          <article id="park-place-owner" className="scroll-mt-32 py-16">
            <p className="eyebrow mb-5">04 / Property management · SaaS development</p>
            <h3 className="mb-8 text-5xl font-bold text-paper sm:text-7xl">Park Place</h3>
            <div className="grid gap-4 lg:grid-cols-2">
              <div className="flex min-h-[450px] flex-col justify-between rounded-3xl p-9 sm:p-12" style={{background:"#FAF8F4",color:"#252522"}}>
                <p className="text-sm font-bold tracking-[0.22em]" style={{color:"#A85C35"}}>PARK PLACE / OWNER PORTAL</p>
                <div><p className="text-[clamp(3rem,5vw,5rem)] font-bold leading-[0.95]">YOUR<br/>PROPERTY.<br/><span style={{color:"#A85C35"}}>YOUR<br/>NUMBERS.</span></p></div>
                <p className="text-sm" style={{color:"#77736C"}}>Monthly statements · Documents · Unit performance</p>
              </div>
              <div className="flex min-h-[450px] flex-col justify-between rounded-3xl p-9 sm:p-12" style={{background:"#EAE2D7",color:"#252522"}}>
                <p className="text-sm font-bold tracking-[0.22em]" style={{color:"#A85C35"}}>PARK PLACE / WORKFLOW</p>
                <div><p className="text-[clamp(3rem,5vw,5rem)] font-bold leading-[0.95]">FROM<br/>EXCEL<br/><span style={{color:"#A85C35"}}>TO INSIGHT.</span></p><div className="mt-8 grid grid-cols-3 gap-2">{["IMPORT","REVIEW","PUBLISH"].map((v,i)=><div key={v} className="rounded-lg border border-[#C6B6A6] bg-white/70 p-3 text-center"><p className="text-2xl font-bold" style={{color:"#A85C35"}}>0{i+1}</p><p className="mt-2 text-[10px] font-bold">{v}</p></div>)}</div></div>
                <p className="text-sm" style={{color:"#77736C"}}>Administrative workflow / Portfolio visualization</p>
              </div>
            </div>
            <p className="mt-4 text-xs text-bone">Illustrative editorial compositions, without owner financial data.</p>
            <Link href="/park-place" className="mt-7 inline-flex items-center gap-2 text-sm text-gold">Full case study and product walkthrough <ArrowUpRight size={16}/></Link>
          </article>
        </section>
      </div>
    </main>
  );
}
