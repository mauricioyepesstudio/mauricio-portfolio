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
    <section className="mt-32">
      <Reveal>
        <div className="max-w-5xl">
          <p className="eyebrow mb-6">Case Study</p>

          <h2 className="font-sans text-5xl font-semibold leading-[0.95] text-paper md:text-7xl">
            Designing experiences that connect brands, products and people.
          </h2>
        </div>
      </Reveal>

      <div className="mt-24 grid gap-20 lg:grid-cols-12">
        {/* LEFT COLUMN */}
        <Reveal className="lg:col-span-5">
          <div className="sticky top-32">
            <p className="eyebrow mb-6">Overview</p>

            <p className="max-w-md text-xl leading-9 text-bone md:text-2xl">
              {excerpt}
            </p>
          </div>
        </Reveal>

        {/* RIGHT COLUMN */}
        <div className="space-y-16 lg:col-span-7">
          <Reveal delay={0.05}>
            <div className="grid gap-6 md:grid-cols-[140px_1fr]">
              <p className="eyebrow">Challenge</p>

              <p className="text-lg leading-8 text-paper">
                {problem}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid gap-6 md:grid-cols-[140px_1fr]">
              <p className="eyebrow">Strategy</p>

              <p className="text-lg leading-8 text-paper">
                {strategy}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="grid gap-6 md:grid-cols-[140px_1fr]">
              <p className="eyebrow">Solution</p>

              <p className="text-lg leading-8 text-paper">
                {solution}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid gap-6 border-b border-line pb-12 md:grid-cols-[140px_1fr]">
              <p className="eyebrow">Results</p>

              <p className="text-lg leading-8 text-paper">
                {result}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}