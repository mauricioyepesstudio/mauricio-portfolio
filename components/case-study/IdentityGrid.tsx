import Image from "next/image";
import Reveal from "@/components/Reveal";
import type { IdentityTile } from "@/lib/case-studies/types";

function Tile({ item, index }: { item: IdentityTile; index: number }) {
  return (
    <Reveal delay={Math.min(index * 0.05, 0.2)}>
      <figure className="group overflow-hidden rounded-2xl border border-white/10 bg-[#111] sm:rounded-[28px]">
        <div className="relative aspect-square">
          <Image
            src={item.asset.src}
            alt={item.asset.alt}
            fill
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 22vw"
            className="object-contain p-6 transition-transform duration-700 motion-safe:group-hover:scale-[1.03]"
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

export default function IdentityGrid({ items }: { items: IdentityTile[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
      {items.map((item, index) => (
        <Tile key={item.asset.src} item={item} index={index} />
      ))}
    </div>
  );
}
