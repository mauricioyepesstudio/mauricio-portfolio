import { brandStats } from "@/lib/brand-stats";

type BrandStatsGridProps = {
  className?: string;
};

export default function BrandStatsGrid({ className = "" }: BrandStatsGridProps) {
  return (
    <div
      className={`border-t border-line ${className}`}
      aria-label="Professional highlights"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {brandStats.map((stat, index) => (
          <div
            key={stat.value}
            className={`flex min-h-[132px] flex-col justify-end px-5 py-8 sm:min-h-[148px] sm:px-6 sm:py-10 lg:px-8 lg:py-12 ${
              index % 2 === 0 ? "border-r border-line" : ""
            } ${index < 2 ? "border-b border-line lg:border-b-0" : ""} ${
              index < 3 ? "lg:border-r lg:border-line" : ""
            }`}
          >
            <p
              className={`font-semibold leading-none text-paper ${
                stat.compact
                  ? "text-xl sm:text-2xl lg:text-[1.65rem]"
                  : "text-3xl sm:text-4xl lg:text-5xl"
              }`}
            >
              {stat.value}
            </p>
            <p className="mt-4 text-[10px] uppercase leading-[1.65] tracking-[0.28em] text-bone sm:text-xs">
              <span className="block">{stat.lines[0]}</span>
              <span className="block">{stat.lines[1]}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
