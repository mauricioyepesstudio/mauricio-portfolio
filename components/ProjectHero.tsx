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
      <section className="mt-12">
        <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#0b0b0b]">

          <div className="relative h-[68vh] min-h-[620px]">

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

            <div className="absolute inset-x-0 bottom-0 p-8 md:p-14 xl:p-20">

              <div className="max-w-5xl">

                <span className="inline-flex rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/80">
                  Case Study
                </span>

                <p className="mt-8 text-sm uppercase tracking-[0.35em] text-white/60">
                  {category}
                </p>

                <h1 className="mt-4 text-5xl font-semibold leading-[0.9] tracking-[-0.04em] text-white md:text-7xl xl:text-8xl">
                  {title}
                </h1>

                <div className="mt-12 grid grid-cols-3 gap-10 max-w-2xl">

                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                      Client
                    </p>

                    <p className="mt-2 text-lg text-white">
                      {client}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                      Year
                    </p>

                    <p className="mt-2 text-lg text-white">
                      {year}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                      Role
                    </p>

                    <p className="mt-2 text-lg text-white">
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