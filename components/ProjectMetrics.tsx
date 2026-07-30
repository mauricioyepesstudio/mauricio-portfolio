import Reveal from "@/components/Reveal";

type Metric = {
  label: string;
  value: string;
};

type ProjectMetricsProps = {
  metrics: Metric[];
};

export default function ProjectMetrics({
  metrics,
}: ProjectMetricsProps) {
  return (
    <section className="w-full">
      <Reveal>
        <div className="overflow-hidden rounded-[36px] border border-line bg-gradient-to-br from-[#141414] via-[#101010] to-[#0b0b0b]">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric, index) => (
              <div
                key={metric.label}
                className={`p-10 md:p-12 ${
                  index !== metrics.length - 1
                    ? "border-b border-line lg:border-b-0 lg:border-r"
                    : ""
                }`}
              >
                <p className="mb-3 text-xs uppercase tracking-[0.28em] text-gold">
                  {metric.label}
                </p>

                <p
                  className={`font-semibold leading-tight text-paper ${
                    metric.value.length > 15
                      ? "text-xl md:text-2xl"
                      : metric.value.length > 8
                      ? "text-2xl md:text-3xl"
                      : "text-5xl md:text-6xl"
                  }`}
                >
                  {metric.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}