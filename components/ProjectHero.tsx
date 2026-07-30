import Image from "next/image";
import Reveal from "@/components/Reveal";

type ProjectHeroProps = {
  title: string;
  category: string;
  client: string;
  year: string;
  image?: string;
  from: string;
  to: string;
};

export default function ProjectHero({
  title,
  category,
  client,
  year,
  image,
  from,
  to,
}: ProjectHeroProps) {
  return (
    <Reveal delay={0.15}>
      <section className="mt-16">
        <div className="relative overflow-hidden rounded-[40px] border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,.45)]">

          <div className="relative h-[75vh] md:h-[82vh]">

            {image ? (
              <>
                <Image
                  src={image}
                  alt={title}
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover scale-105 transition-transform duration-[7000ms] hover:scale-100"
                />

                <div className="absolute inset-0 bg-black/40" />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />
              </>
            ) : (
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, ${from}, ${to})`,
                }}
              />
            )}

            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 xl:p-24">

              <div className="max-w-6xl">

                <p className="eyebrow mb-6">
                  {category}
                </p>

                <h1 className="font-sans font-semibold text-paper leading-[0.9] tracking-[-0.04em] text-5xl md:text-7xl xl:text-[7rem]">
                  {title}
                </h1>

                <div className="mt-14 flex flex-wrap gap-16">

                  <div>
                    <p className="text-[11px] uppercase tracking-[0.35em] text-neutral-500 mb-2">
                      Client
                    </p>

                    <p className="text-paper text-xl">
                      {client}
                    </p>
                  </div>

                  <div>
                    <p className="text-[11px] uppercase tracking-[0.35em] text-neutral-500 mb-2">
                      Year
                    </p>

                    <p className="text-paper text-xl">
                      {year}
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>
    </Reveal>
  );
}