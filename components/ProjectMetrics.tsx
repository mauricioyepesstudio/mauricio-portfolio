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
        <div className="rounded-[36px] border border-line bg-gradient-to-br from-[#141414] via-[#101010] to-[#0b0b0b] overflow-hidden">

          <div className="grid grid-cols-2 lg:grid-cols-4">

            {metrics.map((metric, index) => (
              <div
                key={metric.label}
                className={`relative p-10 md:p-12 ${
                  index !== metrics.length - 1
                    ? "border-b lg:border-b-0 lg:border-r border-line"
                    : ""
                }`}
              >
                <p
  className={`font-semibold leading-tight text-paper ${
    metric.value.length > 12
      ? "text-xl md:text-2xl"
      : "text-[3rem] md:text-[4rem]"
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