import Image from "next/image";
import Reveal from "@/components/Reveal";
import ProjectVideoPlayer from "@/components/ProjectVideoPlayer";
import { altFromPath } from "@/lib/utils";
import type { Campaign, MediaAsset, MediaSection } from "@/lib/projects/types";

type Props = { campaigns: Campaign[]; supportingWork?: MediaSection[]; brand: string };

/** Ratios above this render full-width — wide banners and landscape advertising. */
const WIDE_RATIO = 2;
/** Ratios below this render in a scrollable, height-contained frame — tall newsletter/web captures. */
const LONG_RATIO = 0.4;

function ratioOf(asset: MediaAsset) {
  if (asset.aspectRatio) return asset.aspectRatio;
  if (asset.width && asset.height) return asset.width / asset.height;
  return 1;
}

function clampRatio(ratio: number) {
  return Math.min(Math.max(ratio, 0.55), 2.4);
}

function StandardFigure({ asset, title, brand, sizes }: { asset: MediaAsset; title: string; brand: string; sizes: string }) {
  return (
    <figure className="group overflow-hidden rounded-2xl border border-white/10 bg-[#111] sm:rounded-[28px]">
      <div className="relative w-full" style={{ aspectRatio: ratioOf(asset) }}>
        <Image
          src={asset.src}
          alt={`${altFromPath(asset.src, title)} — ${brand}`}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.03]"
        />
      </div>
    </figure>
  );
}

function WideFigure({ asset, title, brand }: { asset: MediaAsset; title: string; brand: string }) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-white/10 bg-[#111] sm:rounded-[28px]">
      <Image
        src={asset.src}
        alt={`${altFromPath(asset.src, title)} — ${brand}`}
        width={asset.width ?? 1600}
        height={asset.height ?? 800}
        sizes="(max-width: 1024px) 94vw, 1200px"
        className="h-auto w-full object-cover"
      />
    </figure>
  );
}

function LongFormatFigure({ asset, title, brand }: { asset: MediaAsset; title: string; brand: string }) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] sm:rounded-[28px]">
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.03] px-4 py-3" aria-hidden="true">
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
      </div>
      <div className="max-h-[65vh] w-full overflow-y-auto">
        <Image
          src={asset.src}
          alt={`${altFromPath(asset.src, title)} — ${brand}`}
          width={asset.width ?? 1080}
          height={asset.height ?? 1920}
          sizes="(max-width: 640px) 92vw, 640px"
          className="h-auto w-full object-contain"
        />
      </div>
      <figcaption className="flex items-center justify-between gap-4 border-t border-white/10 px-6 py-4 text-xs uppercase tracking-[0.2em] text-bone">
        <span className="truncate">{altFromPath(asset.src, title)}</span>
        <span className="shrink-0 text-bone/80">Scroll to view</span>
      </figcaption>
    </figure>
  );
}

/** Small brand marks get a contained, non-cropping presentation — a neutral card the logo sits on,
 * not a photography-style crop. */
function IdentityFigure({ asset, title, brand }: { asset: MediaAsset; title: string; brand: string }) {
  return (
    <div className="flex h-40 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-8 sm:h-48 sm:rounded-[28px]">
      <div className="relative h-full w-full">
        <Image
          src={asset.src}
          alt={`${altFromPath(asset.src, title)} — ${brand} identity`}
          fill
          sizes="(max-width: 640px) 45vw, 220px"
          className="object-contain"
        />
      </div>
    </div>
  );
}

function IdentityGrid({ assets, title, brand }: { assets: MediaAsset[]; title: string; brand: string }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
      {assets.map((asset) => (
        <IdentityFigure key={asset.src} asset={asset} title={title} brand={brand} />
      ))}
    </div>
  );
}

function StandardGrid({ assets, title, brand }: { assets: MediaAsset[]; title: string; brand: string }) {
  if (assets.length === 1) {
    return <StandardFigure asset={assets[0]} title={title} brand={brand} sizes="(max-width: 1536px) 90vw, 1200px" />;
  }
  return (
    <div className="columns-1 gap-4 sm:columns-2 sm:gap-6 lg:columns-3 [&>*]:mb-4 sm:[&>*]:mb-6">
      {assets.map((asset) => (
        <div key={asset.src} className="break-inside-avoid">
          <StandardFigure asset={asset} title={title} brand={brand} sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 31vw" />
        </div>
      ))}
    </div>
  );
}

function MediaSectionBlock({ assets, title, brand }: { assets: MediaAsset[]; title: string; brand: string }) {
  const wide = assets.filter((asset) => ratioOf(asset) >= WIDE_RATIO);
  const long = assets.filter((asset) => ratioOf(asset) <= LONG_RATIO);
  const standard = assets.filter((asset) => !wide.includes(asset) && !long.includes(asset));

  return (
    <div className="space-y-6 sm:space-y-8">
      {wide.map((asset) => (
        <WideFigure key={asset.src} asset={asset} title={title} brand={brand} />
      ))}
      {standard.length > 0 && <StandardGrid assets={standard} title={title} brand={brand} />}
      {long.map((asset) => (
        <LongFormatFigure key={asset.src} asset={asset} title={title} brand={brand} />
      ))}
    </div>
  );
}

/** Vertical/reel videos get a multi-column grid (up to 3 desktop / 2 tablet / 1 mobile); landscape videos get a wider, lower-column layout. */
function VideoSectionBlock({ assets }: { assets: MediaAsset[] }) {
  const vertical = assets.filter((asset) => ratioOf(asset) < 0.85);
  const landscape = assets.filter((asset) => ratioOf(asset) >= 0.85);
  return (
    <div className="space-y-6 sm:space-y-8">
      {landscape.length > 0 && (
        <div className="grid gap-6 lg:grid-cols-2">
          {landscape.map((asset) => (
            <ProjectVideoPlayer key={asset.src} src={asset.src} caption={asset.name} aspectRatio={ratioOf(asset)} />
          ))}
        </div>
      )}
      {vertical.length > 0 && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {vertical.map((asset) => (
            <div key={asset.src} className="mx-auto w-full max-w-[300px] sm:max-w-[320px]">
              <ProjectVideoPlayer src={asset.src} caption={asset.name} aspectRatio={ratioOf(asset)} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function SectionGroup({ sections, brand }: { sections: MediaSection[]; brand: string }) {
  return (
    <div className="space-y-14 sm:space-y-20">
      {sections.map((section) => (
        <section key={section.kind} aria-labelledby={`section-${section.kind}`}>
          <div className="mb-6 flex items-center gap-4 sm:mb-8">
            <h3 id={`section-${section.kind}`} className="text-xl font-medium text-paper sm:text-2xl">
              {section.title}
            </h3>
            <span className="h-px flex-1 bg-white/10" />
            <span className="text-xs tabular-nums text-bone">{String(section.assets.length).padStart(2, "0")}</span>
          </div>
          {section.kind === "video" ? (
            <VideoSectionBlock assets={section.assets} />
          ) : section.kind === "logo" ? (
            <IdentityGrid assets={section.assets} title={section.title} brand={brand} />
          ) : (
            <MediaSectionBlock assets={section.assets} title={section.title} brand={brand} />
          )}
        </section>
      ))}
    </div>
  );
}

export default function ProjectSections({ campaigns, supportingWork, brand }: Props) {
  if (!campaigns.length && !supportingWork?.length) return null;

  return (
    <section className="mt-24 space-y-28 sm:mt-36 sm:space-y-40">
      {campaigns.map((campaign, campaignIndex) => (
        <article key={campaign.slug} id={campaign.slug} className="scroll-mt-32">
          <Reveal>
            <header className="mb-8 grid gap-5 border-t border-white/10 pt-7 sm:mb-12 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.55fr)] lg:items-end">
              <div className="flex items-start gap-4 sm:gap-6">
                <p aria-hidden="true" className="shrink-0 font-serif text-[clamp(2.25rem,5vw,3.5rem)] italic leading-[0.9] text-gold/70">
                  {String(campaignIndex + 1).padStart(2, "0")}
                </p>
                <div>
                  <p className="eyebrow mb-3">{campaign.eyebrow ?? `Chapter ${String(campaignIndex + 1).padStart(2, "0")}`}</p>
                  <h2 className="max-w-3xl break-words text-[clamp(2.1rem,5.5vw,4rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-paper">
                    {campaign.title}
                  </h2>
                </div>
              </div>
              <p className="max-w-xl text-sm leading-7 text-bone sm:text-base">
                {campaign.context ?? "A curated chapter organized directly from the campaign's available creative system."}
              </p>
            </header>
          </Reveal>

          {campaign.hero && (
            <Reveal>
              <div
                className="relative mb-12 w-full overflow-hidden rounded-2xl border border-white/10 bg-[#111] sm:rounded-[32px]"
                style={{ aspectRatio: clampRatio(ratioOf(campaign.hero)), maxHeight: "82vh" }}
              >
                <Image
                  src={campaign.hero.src}
                  alt={`${campaign.title} campaign hero — ${brand}`}
                  fill
                  sizes="(max-width: 1536px) 92vw, 1440px"
                  className="object-cover"
                />
              </div>
            </Reveal>
          )}

          <SectionGroup sections={campaign.sections} brand={brand} />
        </article>
      ))}

      {supportingWork && supportingWork.length > 0 && (
        <article className="scroll-mt-32">
          <Reveal>
            <header className="mb-8 border-t border-white/10 pt-7 sm:mb-12">
              <p className="eyebrow mb-3">Selected Supporting Work</p>
              <h2 className="max-w-4xl text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-paper">
                Additional creative supporting the campaign system.
              </h2>
            </header>
          </Reveal>
          <SectionGroup sections={supportingWork} brand={brand} />
        </article>
      )}
    </section>
  );
}
