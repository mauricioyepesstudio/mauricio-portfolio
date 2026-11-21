"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { contactHref, type Package, type StepVisual } from "@/lib/services";

const STEP_MS = 2600;
const focus = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold";

function StepArt({ visual }: { visual: StepVisual }) {
  switch (visual.kind) {
    case "image":
      return (
        <div className="relative h-full w-full" style={{ background: visual.bg }}>
          <Image
            src={visual.src}
            alt={visual.alt}
            fill
            sizes="(min-width: 1024px) 22vw, 45vw"
            className={visual.fit === "contain" ? "object-contain p-[14%]" : "object-cover"}
            style={visual.pos ? { objectPosition: visual.pos } : undefined}
          />
        </div>
      );
    case "report":
      return (
        <div className="flex h-full flex-col gap-3 bg-[#141414] p-4" aria-hidden="true">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold">Monthly report</p>
          {["Published", "Responses", "Next month"].map((row, i) => (
            <div key={row}>
              <p className="text-[11px] text-bone">{row}</p>
              <div className="mt-1.5 h-2 rounded bg-white/[0.06]"><div className="h-full rounded bg-gradient-to-r from-gold/80 to-gold/30" style={{ width: `${80 - i * 20}%` }} /></div>
            </div>
          ))}
          <div className="mt-auto flex items-end gap-1.5">
            {[40, 65, 50, 80, 70].map((h, i) => <span key={i} className="flex-1 rounded-t bg-gold/40" style={{ height: `${h * 0.6}px` }} />)}
          </div>
        </div>
      );
    case "wireframe":
      return (
        <div className="flex h-full items-center justify-center gap-3 bg-[#141414] p-4" aria-hidden="true">
          {[0, 1].map((screen) => (
            <div key={screen} className="flex aspect-[9/16] w-[42%] flex-col gap-2 rounded-lg border border-white/20 p-2">
              <div className="h-2 w-1/2 rounded bg-gold/70" />
              <div className="h-10 rounded bg-white/10" />
              <div className="h-1.5 w-3/4 rounded bg-white/20" />
              <div className="h-1.5 w-2/3 rounded bg-white/20" />
              <div className="mt-auto h-4 rounded-full border border-gold/60" />
            </div>
          ))}
        </div>
      );
    case "checks":
      return (
        <ul className="flex h-full flex-col justify-center gap-2.5 bg-[#141414] p-4" aria-hidden="true">
          {visual.items.map((item) => (
            <li key={item} className="flex items-center gap-2.5 rounded-md border border-white/10 px-3 py-2 text-sm text-paper">
              <span className="grid size-6 shrink-0 place-items-center rounded-full bg-gold text-ink"><Check size={12} /></span>
              {item}
            </li>
          ))}
        </ul>
      );
  }
}

// One package shown as the path the client walks: four steps, each with a piece of real work.
// The steps light up one after another while the section is on screen; hover or tap stops it.
export default function PackageJourney({ plan, index }: { plan: Package; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const total = plan.steps.length;

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.35 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reduced || paused || !visible) return;
    const timer = window.setTimeout(() => setActive((s) => (s + 1) % total), STEP_MS);
    return () => window.clearTimeout(timer);
  }, [active, reduced, paused, visible, total]);

  const progress = reduced ? 100 : total > 1 ? (active / (total - 1)) * 100 : 100;

  return (
    <article
      ref={ref}
      id={plan.id}
      aria-labelledby={`${plan.id}-title`}
      className="scroll-mt-28 border-t border-line pt-10 lg:grid lg:grid-cols-[minmax(0,0.8fr)_minmax(0,2fr)] lg:gap-12"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="lg:sticky lg:top-28 lg:self-start">
        <p className="text-xs uppercase tracking-[0.35em] text-gold">
          <span className="text-bone">0{index + 1}</span> · {plan.format}
        </p>
        <h3 id={`${plan.id}-title`} className="mt-3 font-serif text-5xl leading-none text-paper sm:text-6xl">{plan.title}</h3>
        <p className="mt-5 font-serif text-2xl leading-tight text-paper sm:text-3xl">
          {plan.headline[0]} <span className="text-gold">{plan.headline[1]}</span>
        </p>
        <p className="mt-4 max-w-sm text-base leading-7 text-bone">{plan.sub[0]} {plan.sub[1]}</p>
        <Link
          href={contactHref(plan.id)}
          className={`mt-6 inline-flex min-h-11 items-center gap-2 rounded-full border border-gold px-6 text-sm text-paper transition-colors hover:bg-gold hover:text-ink ${focus}`}
        >
          {plan.cta} <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>

      <div className="mt-10 lg:mt-0">
        <p className="text-sm text-bone">What you get, step by step</p>
        <div className="relative mt-5 hidden h-px bg-white/15 lg:block" aria-hidden="true">
          <span className="absolute inset-y-0 left-0 bg-gold transition-[width] duration-700 ease-apple" style={{ width: `${progress}%` }} />
        </div>
        <ol className="mt-5 grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4 lg:gap-5">
          {plan.steps.map((step, i) => {
            const on = reduced || i === active;
            const done = !reduced && i < active;
            return (
              <li key={step.title}>
                <button
                  type="button"
                  onClick={() => { setActive(i); setPaused(true); }}
                  aria-current={i === active && !reduced ? "step" : undefined}
                  className={`group block w-full text-left ${focus}`}
                >
                  <span className="flex items-center gap-3">
                    <span className={`grid size-9 shrink-0 place-items-center rounded-full border text-sm font-semibold transition-all duration-500 ${on ? "border-gold bg-gold text-ink" : done ? "border-gold text-gold" : "border-white/20 text-bone"}`}>
                      {i + 1}
                    </span>
                    <span className={`text-sm font-semibold leading-tight transition-colors ${on ? "text-paper" : "text-bone"}`}>{step.title}</span>
                  </span>
                  <span
                    className={`relative mt-4 block aspect-[4/5] overflow-hidden rounded-xl border transition-all duration-700 ease-apple ${on ? "border-gold/80 opacity-100 shadow-[0_30px_70px_-35px_rgba(176,141,87,0.7)] lg:-translate-y-2" : "border-white/10 opacity-55 group-hover:opacity-90"}`}
                  >
                    <StepArt visual={step.visual} />
                  </span>
                  <span className={`mt-3 block text-sm leading-6 transition-colors ${on ? "text-paper" : "text-bone/80"}`}>{step.text}</span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </article>
  );
}
