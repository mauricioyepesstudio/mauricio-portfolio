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
    <section className="mt-0">

      <Reveal>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#171717] via-[#111111] to-[#0b0b0b] shadow-[0_30px_80px_rgba(0,0,0,.35)] sm:rounded-[40px]">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

            {metrics.map((metric, index) => (

              <div
                key={metric.label}
                className={`relative min-w-0 overflow-hidden p-6 transition-all duration-500 hover:bg-white/[0.03] sm:p-8 xl:px-6 xl:py-9 ${
                  index !== metrics.length - 1
                    ? "border-b border-white/10 lg:border-b-0 lg:border-r"
                    : ""
                }`}
              >

                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-gold/0 via-gold/60 to-gold/0 opacity-0 transition-opacity duration-500 hover:opacity-100" />

                <p className="text-xs uppercase tracking-[0.35em] text-gold">
                  {metric.label}
                </p>

                <div className="mt-8">

                  {/* Sizing is tuned for the 4-column desktop grid (lg:grid-cols-4), where columns are
                      narrow enough that text-4xl/xl wraps mid-phrase for common two-word values like
                      "Campaign System" or "2 Campaign Launches". Mobile/tablet keep the original sizes
                      since the 1-2 column layout there already has room. */}
                  <p
                    className={`text-balance font-semibold leading-tight tracking-tight text-paper ${
                      metric.value.length > 17
                        ? "break-words text-xl sm:text-2xl"
                        : metric.value.length > 8
                        ? "text-4xl lg:text-xl xl:text-lg"
                        : "text-6xl lg:text-4xl"
                    }`}
                  >
                    {metric.value}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </Reveal>

    </section>
  );
}
