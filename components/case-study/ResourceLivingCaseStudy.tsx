import CampaignMenu from "./CampaignMenu";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import ProjectHero from "@/components/ProjectHero";
import ProjectMetrics from "@/components/ProjectMetrics";
import ProjectNavigation from "@/components/ProjectNavigation";
import Reveal from "@/components/Reveal";

import CaseStudySectionHeader from "@/components/case-study/CaseStudySectionHeader";
import EditorialChapter from "@/components/case-study/EditorialChapter";
import ResourceLivingOverview from "@/components/case-study/ResourceLivingOverview";
import SocialEditorialGrid from "@/components/case-study/SocialEditorialGrid";

import SystemFlowExplainer from "@/components/SystemFlowExplainer";
import { agencyFlows } from "@/lib/system-flows";
import { resourceLivingCaseStudy } from "@/lib/case-studies/resource-living";
import type { Brand } from "@/lib/projects/types";

type Props = {
  project: Brand;
  previous?: { slug: string; title: string };
  next?: { slug: string; title: string };
};

export default function ResourceLivingCaseStudy({ project, previous, next }: Props) {
  const study = resourceLivingCaseStudy;

  return (
    <article className="pb-24 pt-28 sm:pt-36 md:pb-40 md:pt-40">
      <div className="container-px mx-auto max-w-content">
        <Reveal>
          <Link
            href="/portfolio"
            className="mb-8 inline-flex min-h-11 items-center gap-2 rounded-full px-1 text-sm text-bone transition-colors hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold sm:mb-12"
          >
            <ArrowLeft size={16} />
            All Case Studies
          </Link>
        </Reveal>

        <ProjectHero
          title={project.title}
          category={project.category}
          client={project.client}
          year={project.year}
          image={study.heroImage}
          from={project.cover.from}
          to={project.cover.to}
        />

        <div className="mt-14 grid gap-12 sm:mt-20 lg:grid-cols-3 lg:gap-16">
          <Reveal>
            <div className="sticky top-32">
              <p className="eyebrow mb-6">Deliverables</p>
              <ul className="space-y-3">
                {project.deliverables.map((item) => (
                  <li key={item} className="text-bone">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <div className="lg:col-span-2">
            <ProjectMetrics metrics={project.metrics} />
          </div>
        </div>

        <ResourceLivingOverview
          excerpt={project.excerpt}
          problem={project.problem}
          strategy={project.strategy}
          creativeSystem={study.narrative.creativeSystem}
          campaignExecution={study.narrative.campaignExecution}
          channels={study.narrative.channels}
          outcome={study.narrative.outcome}
        />

        <section className="mt-24 border-t border-white/10 pt-12 sm:mt-32" aria-labelledby="resource-living-operations">
          <Reveal>
            <p className="eyebrow mb-5">Live operations · How the system works</p>
            <h2 id="resource-living-operations" className="max-w-4xl text-[clamp(2.2rem,6vw,3.8rem)] font-semibold leading-tight tracking-tight text-paper">
              From visual campaigns to a system that runs every day.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-bone">
              Behind the creative, three workflows keep Resource Living moving: every new lead reaches the team,
              advertisers appear on social media daily, and each service category gets a full set of content.
              Press a step to see what happens at each stage.
            </p>
          </Reveal>
          <div className="mt-10">
            <SystemFlowExplainer flows={agencyFlows} />
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <Link href="/lead-automation/demo" className="inline-flex min-h-11 items-center gap-2 border-b border-gold font-semibold text-paper hover:text-gold">
              Explore a privacy-safe workflow demo
            </Link>
            <Link href="/contact?topic=automation" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-gold px-6 font-semibold text-ink hover:bg-paper">
              Discuss a similar system
            </Link>
          </div>
          <p className="mt-5 max-w-3xl text-sm leading-6 text-bone">
            Screens are illustrative and do not expose client leads, contractor addresses or private operational records.
            No lead-volume, conversion or revenue figure is claimed without reconciled sales data.
          </p>
        </section>

        <CampaignMenu chapters={study.chapters} />

        {study.chapters.map((chapter) => (
          <EditorialChapter key={chapter.slug} chapter={chapter} brand={project.title} />
        ))}

        <SocialEditorialGrid intro={study.socialSection} picks={[...study.social]} />

        <section className="mt-24 border-t border-white/10 pt-7 sm:mt-36">
          <CaseStudySectionHeader intro={study.closingSystem} />
        </section>

        <ProjectNavigation previous={previous} next={next} />
      </div>
    </article>
  );
}
