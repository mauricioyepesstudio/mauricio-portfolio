import Image from "next/image";
import Reveal from "@/components/Reveal";
import NewsletterFrame from "@/components/case-study/NewsletterFrame";
import WebsiteFrame from "@/components/case-study/WebsiteFrame";
import ProjectVideoPlayer from "@/components/ProjectVideoPlayer";
import type { CampaignChapterData } from "@/lib/case-studies/types";

function SectionLabel({ title }: { title: string }) {
  return (
    <div className="mb-5 flex items-center gap-4">
      <h4 className="text-sm uppercase tracking-[0.28em] text-bone">{title}</h4>
      <span className="h-px flex-1 bg-white/10" />
    </div>
  );
}

function SocialRow({
  title,
  assets,
  aspect,
  brand,
  emphasis = "standard",
}: {
  title: string;
  assets: { src: string; alt: string }[];
  aspect: string;
  brand: string;
  emphasis?: "standard" | "large";
}) {
  const gridCols =
    emphasis === "large"
      ? "grid-cols-1 sm:grid-cols-2"
      : assets.length > 3
        ? "grid-cols-2 lg:grid-cols-4"
        : "grid-cols-2 sm:grid-cols-3";

  return (
    <div>
      <SectionLabel title={title} />
      <div className={`grid gap-4 sm:gap-5 ${gridCols}`}>
        {assets.map((asset, index) => (
          <Reveal key={asset.src} delay={Math.min(index * 0.04, 0.16)}>
            <figure className={`group relative overflow-hidden rounded-xl border border-white/10 bg-[#111] sm:rounded-2xl ${aspect}`}>
              <Image
                src={asset.src}
                alt={`${asset.alt} — ${brand}`}
                fill
                sizes={emphasis === "large" ? "(max-width: 640px) 92vw, 46vw" : "(max-width: 640px) 46vw, (max-width: 1024px) 30vw, 22vw"}
                className={`transition-transform duration-700 motion-safe:group-hover:scale-[1.03] ${emphasis === "large" ? "object-contain" : "object-cover"}`}
              />
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default function CampaignChapter({
  chapter,
  brand,
}: {
  chapter: CampaignChapterData;
  brand: string;
}) {
  const landscapeVideos = chapter.videos?.filter((v) => (v.orientation ?? "landscape") === "landscape") ?? [];
  const verticalVideos = chapter.videos?.filter((v) => v.orientation === "vertical") ?? [];

  const socialSection = (chapter.posts?.length || chapter.stories?.length) ? (
    <div className="mb-14 space-y-12 sm:mb-20 sm:space-y-16">
      {chapter.posts?.length ? <SocialRow title="Social — Feed" assets={chapter.posts} aspect="aspect-[4/5]" brand={brand} /> : null}
      {chapter.stories?.length ? <SocialRow title="Social — Stories" assets={chapter.stories} aspect="aspect-[9/16]" brand={brand} /> : null}
    </div>
  ) : null;

  const newsletterSection = chapter.newsletter ? (
    <div className="mb-14 sm:mb-20">
      <SectionLabel title="Email & Newsletter" />
      <Reveal>
        <NewsletterFrame
          src={chapter.newsletter.src}
          alt={chapter.newsletter.alt}
          note={chapter.newsletter.note}
          campaign={chapter.title}
          width={chapter.newsletter.width}
          height={chapter.newsletter.height}
        />
      </Reveal>
    </div>
  ) : null;

  return (
    <article id={chapter.slug} className="mt-24 scroll-mt-32 sm:mt-36">
      <Reveal>
        <header className="mb-10 grid gap-5 border-t border-white/10 pt-7 sm:mb-14 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.5fr)] lg:items-end">
          <div>
            <p className="eyebrow mb-3">{chapter.eyebrow}</p>
            <h2 className="max-w-4xl break-words text-[clamp(2.35rem,7vw,6rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-paper">
              {chapter.title}
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-bone sm:text-base">{chapter.intro}</p>
        </header>
      </Reveal>

      {/* Hero */}
      <Reveal>
        <div className="mb-12 overflow-hidden rounded-2xl border border-white/10 bg-[#111] sm:mb-16 sm:rounded-[32px]">
          <div className="relative aspect-[16/9]">
            <Image
              src={chapter.hero.src}
              alt={chapter.hero.alt}
              fill
              sizes="(max-width: 1536px) 92vw, 1440px"
              className="object-cover"
            />
          </div>
        </div>
      </Reveal>

      {/* Packaging — its own large, uncropped presentation */}
      {chapter.packaging && (
        <Reveal>
          <figure className="mx-auto mb-14 max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-[#111] sm:mb-20 sm:rounded-[28px]">
            <div className="relative aspect-square bg-[#0a0a0a]">
              <Image
                src={chapter.packaging.src}
                alt={chapter.packaging.alt}
                fill
                sizes="(max-width: 1024px) 92vw, 768px"
                className="object-contain"
              />
            </div>
            <figcaption className="border-t border-white/10 px-5 py-4 text-sm text-bone">Packaging Mockup</figcaption>
          </figure>
        </Reveal>
      )}

      {/* Web banners — always full content width, native aspect ratio, no crop */}
      {chapter.banners?.length ? (
        <div className="mb-14 space-y-8 sm:mb-20 sm:space-y-10">
          <SectionLabel title="Web & Digital Advertising" />
          {chapter.banners.map((banner, index) => (
            <Reveal key={banner.src} delay={Math.min(index * 0.05, 0.2)}>
              <figure className="overflow-hidden rounded-2xl border border-white/10 bg-[#111] sm:rounded-[28px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={banner.src} alt={banner.alt} loading="lazy" className="block h-auto w-full" />
              </figure>
            </Reveal>
          ))}
        </div>
      ) : null}

      {/* Social and Newsletter — order depends on chapter.layout so consecutive
          chapters don't always render the identical section sequence. Default
          closes on the newsletter; "social-close" moves the newsletter earlier
          and lets social close the chapter instead. */}
      {chapter.layout === "social-close" ? (
        <>
          {newsletterSection}
          {socialSection}
        </>
      ) : (
        <>
          {socialSection}
          {newsletterSection}
        </>
      )}

      {/* Website — full width scroll frame, with supporting shots below */}
      {chapter.website?.length ? (
        <div className="mb-14 sm:mb-20">
          <SectionLabel title="Website & Digital Experience" />
          <Reveal>
            <WebsiteFrame src={chapter.website[0].src} alt={chapter.website[0].alt} label={chapter.website[0].label} project={chapter.title} />
          </Reveal>
          {chapter.website.length > 1 ? (
            <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-6">
              {chapter.website.slice(1).map((shot, index) => (
                <Reveal key={shot.src} delay={Math.min(index * 0.05, 0.2)}>
                  <figure className="overflow-hidden rounded-2xl border border-white/10 bg-[#111] sm:rounded-[24px]">
                    <div className="relative aspect-[4/3]">
                      <Image src={shot.src} alt={shot.alt} fill sizes="(max-width: 640px) 92vw, 46vw" className="object-cover object-top" />
                    </div>
                    <figcaption className="border-t border-white/10 px-5 py-3 text-xs uppercase tracking-[0.2em] text-bone">{shot.label}</figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}

      {/* Generic supporting galleries — print, events, colorways, etc. */}
      {chapter.gallery?.map((section) => (
        <div key={section.title} className="mb-14 sm:mb-20">
          <SocialRow title={section.title} assets={section.assets} aspect="aspect-[4/3]" brand={brand} emphasis={section.emphasis} />
        </div>
      ))}

      {/* Motion — landscape films full width, vertical reels in a controlled grid */}
      {chapter.videos?.length ? (
        <div>
          <SectionLabel title="Motion" />
          {landscapeVideos.length ? (
            <div className={`grid gap-6 sm:gap-8 ${landscapeVideos.length > 1 ? "lg:grid-cols-2" : "max-w-2xl"}`}>
              {landscapeVideos.map((video) => (
                <Reveal key={video.src}>
                  <ProjectVideoPlayer src={video.src} caption={video.caption} orientation="landscape" />
                </Reveal>
              ))}
            </div>
          ) : null}
          {verticalVideos.length ? (
            <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 ${landscapeVideos.length ? "mt-8 sm:mt-10" : ""}`}>
              {verticalVideos.map((video) => (
                <Reveal key={video.src}>
                  <ProjectVideoPlayer src={video.src} caption={video.caption} orientation="vertical" />
                </Reveal>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}
