import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Case studies in branding, packaging, editorial design, marketing campaigns, and website design by Creative Director Mauricio Yepes.",
};

export default function PortfolioPage() {
  return (
    <div className="pt-40 pb-28 md:pb-40">
      <div className="container-px max-w-content mx-auto">
        <Reveal>
          <p className="eyebrow mb-4">Portfolio</p>
          <h1 className="font-sans font-semibold text-display-lg text-paper max-w-3xl">
            Case studies, not galleries.
          </h1>
          <p className="text-bone text-lg mt-6 max-w-xl">
            Every project below covers the problem, the strategy, the
            solution, and the measurable result — the same way I&apos;d walk a
            client through the work.
          </p>
        </Reveal>
<p className="text-red-500 text-2xl mb-10">
  Projects: {projects.length}
</p>
        <div className="grid md:grid-cols-2 gap-8 mt-20">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
