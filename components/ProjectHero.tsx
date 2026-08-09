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
    <Reveal delay={0.1}>
      <section className="mt-4 sm:mt-8 md:mt-12">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] sm:rounded-[36px]">

          <div className="relative min-h-[560px] sm:h-[68vh] sm:min-h-[620px]">

            {image ? (
              <>
                <Image
                  src={image}
                  alt={title}
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-black/35" />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-transparent to-transparent" />
              </>
            ) : (
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, ${from}, ${to})`,
                }}
              />
            )}

            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 md:p-14 xl:p-20">

              <div className="max-w-5xl">

                <span className="inline-flex rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/80">
                  Case Study
                </span>

                <p className="mt-6 max-w-full text-[10px] uppercase tracking-[0.25em] text-white/70 sm:mt-8 sm:text-sm sm:tracking-[0.35em]">
                  {category}
                </p>

                <h1 className="mt-4 break-words text-[clamp(2.65rem,13vw,6rem)] font-semibold leading-[0.9] tracking-[-0.045em] text-white">
                  {title}
                </h1>

                <div className="mt-8 grid max-w-2xl grid-cols-2 gap-x-5 gap-y-6 border-t border-white/20 pt-6 sm:mt-12 sm:grid-cols-3 sm:gap-10 sm:border-0 sm:pt-0">

                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                      Client
                    </p>

                    <p className="mt-2 text-sm text-white sm:text-lg">
                      {client}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                      Year
                    </p>

                    <p className="mt-2 text-sm text-white sm:text-lg">
                      {year}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                      Role
                    </p>

                    <p className="mt-2 text-sm text-white sm:text-lg">
                      Creative Director
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
