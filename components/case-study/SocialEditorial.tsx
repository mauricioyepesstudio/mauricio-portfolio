import Image from "next/image";
import Reveal from "@/components/Reveal";
import type { SocialPick } from "@/lib/case-studies/evenflo";

const SIZE_CLASS: Record<SocialPick["size"], string> = {
  feature: "sm:col-span-2 sm:row-span-2 aspect-[4/5] sm:aspect-auto",
  tall: "row-span-2 aspect-[9/16] sm:aspect-auto",
  support: "aspect-[4/5] sm:aspect-auto",
};

export default function SocialEditorial({ picks }: { picks: SocialPick[] }) {
  return (
    <section className="mt-24 sm:mt-36">
      <Reveal>
        <div className="mb-10 border-t border-white/10 pt-7 sm:mb-14">
          <p className="eyebrow mb-3">07 — Social Campaign System</p>
          <h2 className="max-w-3xl text-[clamp(2.35rem,7vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-paper">
            The strongest moments, side by side.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-bone">
            Feed and story executions from both launches, curated into one editorial sequence rather than a full export dump.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6 sm:[grid-auto-rows:130px] lg:[grid-auto-rows:150px]">
        {picks.map((pick, index) => (
          <Reveal key={pick.src} delay={Math.min(index * 0.04, 0.2)} className={SIZE_CLASS[pick.size]}>
            <figure className="group relative h-full min-h-[220px] w-full overflow-hidden rounded-xl border border-white/10 bg-[#111] sm:min-h-0 sm:rounded-2xl">
              <Image
                src={pick.src}
                alt={pick.alt}
                fill
                sizes="(max-width: 640px) 46vw, (max-width: 1024px) 46vw, 24vw"
                className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.03]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-xs uppercase tracking-[0.25em] text-white">{pick.campaign}</p>
              </div>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
