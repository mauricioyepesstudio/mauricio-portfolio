import Reveal from "@/components/Reveal";

type ResourceLivingOverviewProps = {
  excerpt: string;
  problem: string;
  strategy: string;
  creativeSystem: string;
  campaignExecution: string;
  channels: string;
  outcome: string;
};

export default function ResourceLivingOverview({
  excerpt,
  problem,
  strategy,
  creativeSystem,
  campaignExecution,
  channels,
  outcome,
}: ResourceLivingOverviewProps) {
  const blocks = [
    { label: "Challenge", text: problem },
    { label: "Strategic Approach", text: strategy },
    { label: "Creative System", text: creativeSystem },
    { label: "Campaign Execution", text: campaignExecution },
    { label: "Channels & Deliverables", text: channels },
  ];

  return (
    <section className="mt-24 sm:mt-36">
      <Reveal>
        <div className="max-w-5xl">
          <p className="eyebrow mb-5">Case Study</p>
          <h2 className="max-w-4xl text-[clamp(2.35rem,8vw,4.5rem)] font-semibold leading-[0.94] tracking-[-0.035em] text-paper">
            An integrated editorial and lead-generation ecosystem for South
            Florida homeowners and service businesses.
          </h2>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-12 sm:mt-24 sm:gap-20 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div className="sticky top-32">
            <p className="text-xs uppercase tracking-[0.35em] text-gold">Project Summary</p>
            <p className="mt-6 max-w-md text-xl leading-8 text-paper sm:mt-8 sm:text-2xl sm:leading-10">
              {excerpt}
            </p>
          </div>
        </Reveal>

        <div className="space-y-10 lg:col-span-7">
          {blocks.map((block, index) => (
            <Reveal key={block.label} delay={0.05 + index * 0.05}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:rounded-[28px] sm:p-8">
                <p className="mb-6 text-xs uppercase tracking-[0.35em] text-gold">{block.label}</p>
                <p className="text-lg leading-9 text-bone">{block.text}</p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.3}>
            <div className="rounded-2xl border border-gold/20 bg-gradient-to-br from-[#151515] to-[#0d0d0d] p-6 sm:rounded-[28px] sm:p-8">
              <p className="mb-6 text-xs uppercase tracking-[0.35em] text-gold">Outcome</p>
              <p className="text-lg leading-9 text-paper">{outcome}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
