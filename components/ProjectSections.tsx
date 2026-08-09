import Image from "next/image";
import Reveal from "@/components/Reveal";
import ProjectVideoPlayer from "@/components/ProjectVideoPlayer";
import { altFromPath } from "@/lib/utils";
import type { Campaign, MediaAsset } from "@/lib/projects/types";

type Props = { campaigns: Campaign[]; brand: string };

function ImageGrid({ assets, title, brand }: { assets: MediaAsset[]; title: string; brand: string }) {
  return (
    <div className={`grid gap-4 sm:gap-6 ${assets.length === 1 ? "grid-cols-1" : "sm:grid-cols-2"}`}>
      {assets.map((asset, index) => (
        <Reveal key={asset.src} delay={Math.min(index * 0.035, 0.18)}>
          <figure className="group overflow-hidden rounded-2xl border border-white/10 bg-[#111] sm:rounded-[28px]">
            <Image src={asset.src} alt={`${altFromPath(asset.src, title)} — ${brand}`} width={1600} height={1200} sizes={assets.length === 1 ? "(max-width: 1536px) 90vw, 1400px" : "(max-width: 640px) 92vw, 46vw"} className="h-auto w-full object-contain transition-transform duration-700 motion-safe:group-hover:scale-[1.015]" />
          </figure>
        </Reveal>
      ))}
    </div>
  );
}

export default function ProjectSections({ campaigns, brand }: Props) {
  if (!campaigns.length) return null;
  return (
    <section className="mt-24 space-y-28 sm:mt-36 sm:space-y-40">
      {campaigns.map((campaign, campaignIndex) => (
        <article key={campaign.slug} id={campaign.slug} className="scroll-mt-32">
          <Reveal>
            <header className="mb-8 grid gap-5 border-t border-white/10 pt-7 sm:mb-12 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.55fr)] lg:items-end">
              <div>
                <p className="eyebrow mb-3">Campaign {String(campaignIndex + 1).padStart(2, "0")}</p>
                <h2 className="max-w-4xl break-words text-[clamp(2.35rem,7vw,5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-paper">{campaign.title}</h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-bone sm:text-base">A curated chapter organized directly from the campaign’s available creative system.</p>
            </header>
          </Reveal>
          {campaign.hero && (
            <Reveal><div className="mb-12 overflow-hidden rounded-2xl border border-white/10 bg-[#111] sm:rounded-[32px]"><Image src={campaign.hero.src} alt={`${campaign.title} campaign hero — ${brand}`} width={1920} height={1080} sizes="(max-width: 1536px) 92vw, 1440px" className="h-auto max-h-[82vh] w-full object-contain" /></div></Reveal>
          )}
          <div className="space-y-14 sm:space-y-20">
            {campaign.sections.map((section) => (
              <section key={`${campaign.slug}-${section.kind}`} aria-labelledby={`${campaign.slug}-${section.kind}`}>
                <div className="mb-6 flex items-center gap-4 sm:mb-8"><h3 id={`${campaign.slug}-${section.kind}`} className="text-xl font-medium text-paper sm:text-2xl">{section.title}</h3><span className="h-px flex-1 bg-white/10" /><span className="text-xs tabular-nums text-bone">{String(section.assets.length).padStart(2, "0")}</span></div>
                {section.kind === "video" ? <div className="grid gap-6 lg:grid-cols-2">{section.assets.map((asset) => <ProjectVideoPlayer key={asset.src} src={asset.src} caption={asset.name} />)}</div> : <ImageGrid assets={section.assets} title={`${campaign.title} ${section.title}`} brand={brand} />}
              </section>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}
