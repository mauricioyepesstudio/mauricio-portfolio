import Image from "next/image";
import Reveal from "@/components/Reveal";

type HeroInset = {
  src: string;
  alt: string;
  label?: string;
};

type ProjectHeroProps = {
  title: string;
  category: string;
  client: string;
  year: string;
  image?: string;
  from: string;
  to: string;
  /** Optional smaller layered image (e.g. packaging or lifestyle shot) composited over the main hero for added editorial depth. */
  inset?: HeroInset;
};

export default function ProjectHero({
  title,
  category,
  client,
  year,
  image,
  from,
  to,
  inset,
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

                {inset && (
                  <div className="absolute right-4 top-4 w-24 overflow-hidden rounded-lg border border-white/20 shadow-2xl shadow-black/50 sm:right-8 sm:top-8 sm:w-40 sm:rounded-xl md:right-12 md:top-12 md:w-52 lg:w-60">
                    <div className="relative aspect-[4/5]">
                      <Image
                        src={inset.src}
                        alt={inset.alt}
                        fill
                        sizes="(max-width: 640px) 96px, (max-width: 1024px) 208px, 240px"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    </div>
                    {inset.label && (
                      <p className="absolute bottom-0 left-0 right-0 px-2 py-1.5 text-[9px] uppercase tracking-[0.2em] text-white/85 sm:px-3 sm:py-2 sm:text-[10px]">
                        {inset.label}
                      </p>
                    )}
                  </div>
                )}
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
