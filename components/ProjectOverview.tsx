import Reveal from "@/components/Reveal";

type ProjectOverviewProps = {
  excerpt: string;
  problem: string;
  strategy: string;
  solution: string;
};

export default function ProjectOverview({
  excerpt,
  problem,
  strategy,
  solution,
}: ProjectOverviewProps) {
  return (
    <section className="mt-24 sm:mt-36">

      <Reveal>

        <div className="max-w-5xl">

          <p className="eyebrow mb-5">
            Case Study
          </p>

          <h2 className="max-w-4xl text-[clamp(2.35rem,8vw,4.5rem)] font-semibold leading-[0.94] tracking-[-0.035em] text-paper">
            Every successful project begins with understanding
            the business before designing the solution.
          </h2>

        </div>

      </Reveal>

      <div className="mt-14 grid gap-12 sm:mt-24 sm:gap-20 lg:grid-cols-12">

        {/* LEFT */}

        <Reveal className="lg:col-span-5">

          <div className="sticky top-32">

            <p className="text-xs uppercase tracking-[0.35em] text-gold">
              Project Summary
            </p>

            <p className="mt-6 max-w-md text-xl leading-8 text-paper sm:mt-8 sm:text-2xl sm:leading-10">
              {excerpt}
            </p>

          </div>

        </Reveal>

        {/* RIGHT */}

        <div className="space-y-10 lg:col-span-7">

          <Reveal delay={0.05}>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:rounded-[28px] sm:p-8">

              <p className="mb-6 text-xs uppercase tracking-[0.35em] text-gold">
                Challenge
              </p>

              <p className="max-w-prose text-lg leading-9 text-bone">
                {problem}
              </p>

            </div>

          </Reveal>

          <Reveal delay={0.1}>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:rounded-[28px] sm:p-8">

              <p className="mb-6 text-xs uppercase tracking-[0.35em] text-gold">
                Strategy
              </p>

              <p className="max-w-prose text-lg leading-9 text-bone">
                {strategy}
              </p>

            </div>

          </Reveal>

          <Reveal delay={0.15}>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:rounded-[28px] sm:p-8">

              <p className="mb-6 text-xs uppercase tracking-[0.35em] text-gold">
                Solution
              </p>

              <p className="max-w-prose text-lg leading-9 text-bone">
                {solution}
              </p>

            </div>

          </Reveal>

        </div>

      </div>

    </section>
  );
}
