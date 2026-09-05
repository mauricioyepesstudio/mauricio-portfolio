import Image from "next/image";
import Reveal from "@/components/Reveal";
import type { CuratedAsset } from "@/lib/case-studies/types";

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

function DisciplineBlock({
  title,
  items,
  startIndex,
}: {
  title: string;
  items: Item[];
  startIndex: number;
}) {
  if (!items.length) return null;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <h3 className="text-sm uppercase tracking-[0.28em] text-bone">{title}</h3>
        <span className="h-px flex-1 bg-white/10" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {items.map((item, index) => (
          <Tile key={item.asset.src} item={item} index={startIndex + index} />
        ))}
      </div>
    </div>
  );
}

type Props = {
  items: Item[];
  eyebrow?: string;
  title?: string;
  description?: string;
};

export default function BrandPackaging({
  items,
  eyebrow = "04 — Brand & Packaging",
  title = "One system, two launches.",
  description = "Blonde2Brunette Ink and True Lips share one identity and packaging template — the anchor that keeps both launches unmistakably Evenflo Colours.",
}: Props) {
  const identity = items.filter((item) => item.kind === "Identity");
  const packaging = items.filter((item) => item.kind === "Packaging");
  const showDisciplineHeaders = identity.length > 0 && packaging.length > 0;

  return (
    <section className="mt-24 sm:mt-36">
      <Reveal>
        <div className="mb-10 border-t border-white/10 pt-7 sm:mb-14">
          <p className="eyebrow mb-3">{eyebrow}</p>
          <h2 className="max-w-3xl text-[clamp(2.35rem,7vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-paper">
            {title}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-bone">{description}</p>
        </div>
      </Reveal>

      {showDisciplineHeaders ? (
        <div className="space-y-12 sm:space-y-16">
          <DisciplineBlock title="Identity / Brand System" items={identity} startIndex={0} />
          <DisciplineBlock title="Packaging" items={packaging} startIndex={identity.length} />
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {items.map((item, index) => (
            <Tile key={item.asset.src} item={item} index={index} />
          ))}
        </div>
      )}
    </section>
  );
}
