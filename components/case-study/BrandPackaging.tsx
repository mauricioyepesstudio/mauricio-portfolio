import Image from "next/image";
import Reveal from "@/components/Reveal";
import type { CuratedAsset } from "@/lib/case-studies/evenflo";

type Item = { asset: CuratedAsset; label: string; kind: string };

function Tile({ item, index }: { item: Item; index: number }) {
  return (
    <Reveal delay={Math.min(index * 0.05, 0.2)}>
      <figure className="group overflow-hidden rounded-2xl border border-white/10 bg-[#111] sm:rounded-[28px]">
        <div className="relative aspect-square">
          <Image
            src={item.asset.src}
            alt={item.asset.alt}
            fill
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 22vw"
            className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.03]"
          />
        </div>
        <figcaption className="flex items-center justify-between border-t border-white/10 px-5 py-4">
          <span className="text-sm text-paper">{item.label}</span>
          <span className="text-xs uppercase tracking-[0.25em] text-gold">{item.kind}</span>
        </figcaption>
      </figure>
    </Reveal>
  );
}

export default function BrandPackaging({ items }: { items: Item[] }) {
  const identity = items.filter((item) => item.kind === "Identity");
  const packaging = items.filter((item) => item.kind === "Packaging");

  return (
    <section className="mt-24 sm:mt-36">
      <Reveal>
        <div className="mb-10 border-t border-white/10 pt-7 sm:mb-14">
          <p className="eyebrow mb-3">04 — Brand &amp; Packaging</p>
          <h2 className="max-w-3xl text-[clamp(2.35rem,7vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-paper">
            One system, two launches.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-bone">
            Blonde2Brunette Ink and True Lips share one identity and packaging template — the anchor that keeps both launches unmistakably Evenflo Colours.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {identity.map((item, index) => (
          <Tile key={item.asset.src} item={item} index={index} />
        ))}
        {packaging.map((item, index) => (
          <Tile key={item.asset.src} item={item} index={index + identity.length} />
        ))}
      </div>
    </section>
  );
}
