import Reveal from "@/components/Reveal";
import type { SectionIntro } from "@/lib/case-studies/types";

export default function CaseStudySectionHeader({
  intro,
}: {
  intro: SectionIntro;
}) {
  return (
    <Reveal>
      <div className="mb-10 border-t border-white/10 pt-7 sm:mb-14">
        <p className="eyebrow mb-3">{intro.eyebrow}</p>
        <h2 className="max-w-3xl text-[clamp(2.35rem,7vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-paper">
          {intro.title}
        </h2>
        {intro.description && (
          <p className="mt-6 max-w-xl text-base leading-7 text-bone">{intro.description}</p>
        )}
      </div>
    </Reveal>
  );
}
