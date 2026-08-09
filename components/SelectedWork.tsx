import Link from "next/link";
import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";
import { getProjects } from "@/lib/projects";

export default function SelectedWork() {
  const projects = getProjects();
  return (
    <section
      id="work"
      className="relative py-32 md:py-44 border-t border-line overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gold/5 blur-[140px]" />
      </div>

      <div className="container-px max-w-content mx-auto relative z-10">
        <Reveal>
          <div className="max-w-4xl mb-20">
            <p className="eyebrow mb-5">
              Selected Work
            </p>

            <h2 className="text-paper font-sans font-semibold text-5xl md:text-7xl leading-[0.95]">
              Case studies from magazine publishing, product launches
              and lifestyle brands — built end to end, not just designed.
            </h2>

            <p className="mt-8 text-bone text-xl leading-9 max-w-3xl">
              Editorial design, lead-generation systems, packaging and
              advertising campaigns for international companies and
              growing businesses.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-10">
          {projects.slice(0, 4).map((project, index) => (
            <Reveal
              key={project.slug}
              delay={index * 0.08}
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-20 flex justify-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-full border border-line px-8 py-4 text-paper transition-all duration-300 hover:bg-paper hover:text-black"
            >
              View All Case Studies
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
