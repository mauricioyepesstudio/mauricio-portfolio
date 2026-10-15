import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Circle, Clock3 } from "lucide-react";
import { studioProjects } from "@/lib/studio-projects";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Building in Public",
  description: "Explore EVOLUSA, BELONG, Personal CFO and the evolving studio project roadmap.",
  path: "/building",
});

const states = {
  completed: { label: "Completed", Icon: CheckCircle2 },
  in_progress: { label: "In development", Icon: Clock3 },
  planned: { label: "Planned", Icon: Circle },
} as const;

export default function BuildingPage() {
  return (
    <div className="pb-24 pt-28 sm:pt-36 md:pb-32 md:pt-40">
      <div className="container-px mx-auto max-w-content">
        <p className="eyebrow mb-5">The studio / Building in public</p>
        <h1 className="max-w-5xl text-[clamp(2.8rem,8vw,5.4rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-paper">
          From first idea<br /><span className="font-serif italic text-gold">to what ships next.</span>
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-7 text-bone">
          Every project has a story. Explore its purpose, what exists today, what is being built and what comes next.
        </p>
        <p className="mt-3 max-w-2xl text-xs leading-6 text-bone">
          Editorial project log, not a live operational dashboard. Milestones are curated and updated through code review; no automatic sync is claimed.
        </p>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {studioProjects.map((project) => (
            <article key={project.slug} id={project.slug} className="scroll-mt-32 rounded-3xl border border-line bg-white/[0.025] p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h2 className="text-2xl font-semibold tracking-tight text-paper">{project.name}</h2>
                <span className="rounded-full border border-white/15 px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-bone">{project.stage}</span>
              </div>
              <p className="mt-3 text-lg text-paper">{project.tagline}</p>
              <p className="mt-2 text-sm leading-6 text-bone">{project.summary}</p>
              <ol className="mt-8 space-y-5 border-l border-white/15 pl-5">
                {project.milestones.map((m) => {
                  const { Icon, label } = states[m.state];
                  return (
                    <li key={m.title}>
                      <div className="flex items-center gap-2 text-xs text-bone"><Icon size={15} aria-hidden="true" />{label}</div>
                      <h3 className="mt-1 text-sm font-semibold text-paper">{m.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-bone">{m.detail}</p>
                    </li>
                  );
                })}
              </ol>
              <div className="mt-8 flex flex-wrap gap-3">
                {project.portfolioHref && <Link href={project.portfolioHref} className="inline-flex items-center gap-2 rounded-full bg-paper px-5 py-3 text-sm text-black">Explore case study <ArrowUpRight size={15}/></Link>}
                {project.href && <a href={project.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm text-paper hover:border-paper">Open public product <ArrowUpRight size={15}/></a>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
