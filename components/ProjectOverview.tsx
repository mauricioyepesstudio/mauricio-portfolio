import Reveal from "@/components/Reveal";

type ProjectOverviewProps = {
  excerpt: string;
  problem: string;
  strategy: string;
  solution: string;
  result: string;
};

export default function ProjectOverview({
  excerpt,
  problem,
  strategy,
  solution,
  result,
}: ProjectOverviewProps) {
  return (
    <section className="mt-36">

      <Reveal>

        <div className="max-w-5xl">

          <p className="eyebrow mb-5">
            Case Study
          </p>

          <h2 className="max-w-4xl text-5xl font-semibold leading-[0.92] text-paper md:text-7xl">
            Every successful project begins with understanding
            the business before designing the solution.
          </h2>

        </div>

      </Reveal>

      <div className="mt-24 grid gap-20 lg:grid-cols-12">

        {/* LEFT */}

        <Reveal className="lg:col-span-5">

          <div className="sticky top-32">

            <p className="text-xs uppercase tracking-[0.35em] text-gold">
              Project Summary
            </p>

            <p className="mt-8 max-w-md text-2xl leading-10 text-paper">
              {excerpt}
            </p>

          </div>

        </Reveal>

        {/* RIGHT */}

        <div className="space-y-10 lg:col-span-7">

          <Reveal delay={0.05}>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.02] p-8">

              <p className="mb-6 text-xs uppercase tracking-[0.35em] text-gold">
                Challenge
              </p>

              <p className="text-lg leading-9 text-bone">
                {problem}
              </p>

            </div>

          </Reveal>

          <Reveal delay={0.1}>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.02] p-8">

              <p className="mb-6 text-xs uppercase tracking-[0.35em] text-gold">
                Strategy
              </p>

              <p className="text-lg leading-9 text-bone">
                {strategy}
              </p>

            </div>

          </Reveal>

          <Reveal delay={0.15}>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.02] p-8">

              <p className="mb-6 text-xs uppercase tracking-[0.35em] text-gold">
                Solution
              </p>

              <p className="text-lg leading-9 text-bone">
                {solution}
              </p>

            </div>

          </Reveal>

          <Reveal delay={0.2}>

            <div className="rounded-[28px] border border-gold/20 bg-gradient-to-br from-[#151515] to-[#0d0d0d] p-8">

              <p className="mb-6 text-xs uppercase tracking-[0.35em] text-gold">
                Results
              </p>

              <p className="text-lg leading-9 text-paper">
                {result}
              </p>

            </div>

          </Reveal>

        </div>

      </div>

    </section>
  );
}