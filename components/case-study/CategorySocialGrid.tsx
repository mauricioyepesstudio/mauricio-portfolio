import Image from "next/image";
import Reveal from "@/components/Reveal";
import type { CuratedAsset } from "@/lib/case-studies/types";

export default function CategorySocialGrid({
  assets,
  brand,
}: {
  assets: CuratedAsset[];
  brand: string;
}) {
  return (
    <div className="mt-14 grid min-w-0 grid-cols-2 gap-4 sm:mt-16 sm:grid-cols-3 sm:gap-6 lg:grid-cols-5">
      {assets.map((asset, index) => (
        <Reveal key={asset.src} delay={Math.min(index * 0.04, 0.16)} className="min-w-0">
          <figure className="group relative min-w-0 overflow-hidden rounded-xl border border-white/10 bg-[#111] sm:rounded-2xl">
            <div className="relative aspect-[4/5]">
              <Image
                src={asset.src}
                alt={`${asset.alt} — ${brand}`}
                fill
                sizes="(max-width: 640px) 46vw, (max-width: 1024px) 30vw, 18vw"
                className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.03]"
              />
            </div>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}
