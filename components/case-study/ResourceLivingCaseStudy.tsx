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
            <p className="eyebrow mb-5">Live operations · Verified scope</p>
            <h2 id="resource-living-operations" className="max-w-4xl text-[clamp(2.2rem,6vw,3.8rem)] font-semibold leading-tight tracking-tight text-paper">
              From visual campaigns to an operational lead workflow.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-bone">
              Resource Living is an ongoing South Florida publishing and home-improvement marketing engagement.
              The work combines Meta lead forms, Make-based intake, a delivery-audit ledger and contractor
              assignment rules alongside editorial, social and video campaigns.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
              <h3 className="text-xl font-semibold text-paper">Implemented and inspectable</h3>
              <ul className="mt-5 list-disc space-y-3 pl-5 leading-7 text-bone">
                <li>Meta campaign and lead-form capture for pool renovation and broader home-improvement services.</li>
                <li>Active Make scenarios for intake, structured lead records and contractor-specific routing configurations.</li>
                <li>Exclusive pool-campaign recipient rules with internal blind-copy addresses configured in Make.</li>
                <li>A Google Sheets operational ledger and a WordPress routing audit for category-based enquiries.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-gold/20 bg-[#151515] p-7">
              <h3 className="text-xl font-semibold text-paper">Delivery controls still being validated</h3>
              <ul className="mt-5 list-disc space-y-3 pl-5 leading-7 text-bone">
                <li>Automated email delivery to contractors must be confirmed by actual sending records, not just active scenarios.</li>
                <li>Category routing, exclusive-recipient isolation and follow-up-to-sale reporting need full end-to-end evidence.</li>
                <li>No revenue, conversion rate or return-on-ad-spend figure is claimed without reconciled sales data.</li>
              </ul>
            </div>
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
            The demo uses illustrative information and does not expose client leads, contractor addresses or private operational records.
            Ongoing implementation details are not a claim of guaranteed lead delivery or sales results.
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
