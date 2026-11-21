"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
import { Check, Clock, Mail, Phone } from "lucide-react";
import type { FlowVisual, SystemFlow } from "@/lib/system-flows";

const STEP_MS = 3200;
const focus = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  return reduced;
}

function Phone916({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto aspect-[9/16] h-full max-h-[340px] overflow-hidden rounded-[1.6rem] border-[6px] border-[#1c1c1c] bg-[#0f0f0f] shadow-[0_30px_80px_-30px_rgba(176,141,87,0.45)]">
      {children}
    </div>
  );
}

function Visual({ visual, animate }: { visual: FlowVisual; animate: boolean }) {
  const pop = animate ? "animate-[flowPop_.6s_cubic-bezier(.16,1,.3,1)_both]" : "";
  switch (visual.kind) {
    case "image":
      return (
        <Phone916>
          {visual.label && <p className="absolute left-3 top-3 z-10 rounded bg-black/60 px-2 py-0.5 text-[10px] uppercase tracking-widest text-paper">{visual.label}</p>}
          <Image src={visual.src} alt={visual.alt} fill sizes="200px" className={`object-cover ${pop}`} />
        </Phone916>
      );
    case "form":
      return (
        <Phone916>
          <div className="flex h-full flex-col gap-2.5 p-4 pt-6">
            <p className="text-xs font-semibold text-paper">Get your free estimate</p>
            {["Full name", "Phone", "ZIP code", "Project type"].map((field, i) => (
              <div key={field} className={`rounded-md border border-white/15 bg-white/[0.04] px-2.5 py-2 ${pop}`} style={{ animationDelay: `${i * 120}ms` }}>
                <p className="text-[9px] uppercase tracking-wider text-bone">{field}</p>
                <div className="mt-1 h-1.5 w-2/3 rounded bg-white/25" />
              </div>
            ))}
            <div className="mt-auto rounded-full bg-gold py-2 text-center text-[11px] font-semibold text-ink">Submit</div>
          </div>
        </Phone916>
      );
    case "clock":
      return (
        <div className="flex h-full flex-col items-center justify-center gap-4">
          <div className="relative grid size-40 place-items-center rounded-full border border-gold/50">
            <div className={`absolute inset-2 rounded-full border-2 border-transparent border-t-gold ${animate ? "animate-spin [animation-duration:2.4s]" : ""}`} aria-hidden="true" />
            <Clock className="text-gold" size={44} aria-hidden="true" />
          </div>
          <p className="text-sm uppercase tracking-[0.3em] text-gold">{visual.label}</p>
          <p className="text-xs text-bone">New requests only · no duplicates</p>
        </div>
      );
    case "email":
      return (
        <div className={`mx-auto w-full max-w-xs rounded-xl border border-white/15 bg-[#141414] p-4 ${pop}`}>
          <div className="flex items-center gap-2 border-b border-white/10 pb-3">
            <span className="grid size-8 place-items-center rounded-full bg-gold/20 text-gold"><Mail size={16} aria-hidden="true" /></span>
            <div>
              <p className="text-xs font-semibold text-paper">New lead · Pools</p>
              <p className="text-[10px] text-bone">just now</p>
            </div>
          </div>
          <dl className="mt-3 space-y-2 text-[11px]">
            {["Name", "Phone", "ZIP", "Project"].map((k) => (
              <div key={k} className="flex items-center justify-between gap-3"><dt className="text-bone">{k}</dt><dd className="h-1.5 w-24 rounded bg-white/25" /></div>
            ))}
          </dl>
          <div className="mt-4 flex items-center justify-center gap-2 rounded-full border border-gold/60 py-2 text-[11px] text-paper"><Phone size={12} aria-hidden="true" /> Call back</div>
        </div>
      );
    case "pipeline":
      return (
        <div className="flex h-full flex-col justify-center gap-3">
          {["New", "Contacted", "Quoted", "Won / Lost"].map((stage, i) => (
            <div key={stage} className={`flex items-center gap-3 ${pop}`} style={{ animationDelay: `${i * 140}ms` }}>
              <span className="w-24 shrink-0 text-right text-xs text-bone">{stage}</span>
              <div className="h-8 flex-1 overflow-hidden rounded-md bg-white/[0.05]">
                <div className="h-full rounded-md bg-gradient-to-r from-gold/70 to-gold/30" style={{ width: `${88 - i * 18}%` }} />
              </div>
            </div>
          ))}
        </div>
      );
    case "library":
      return (
        <div className="relative mx-auto h-full w-full max-w-[260px]">
          {visual.srcs.map((src, i) => (
            <div key={src} className="absolute top-1/2 w-[62%] -translate-y-1/2" style={{ left: `${i * 19}%`, rotate: `${(i - 1) * 6}deg`, zIndex: i }}>
              <div className={`relative aspect-[4/5] overflow-hidden rounded-lg border border-white/15 shadow-2xl ${pop}`} style={{ animationDelay: `${i * 120}ms` }}>
                <Image src={src} alt="" fill sizes="160px" className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      );
    case "check":
      return (
        <ul className="flex h-full flex-col justify-center gap-3">
          {visual.items.map((item, i) => {
            const warn = /review/i.test(item);
            return (
              <li key={item + i} className={`flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 ${pop}`} style={{ animationDelay: `${i * 160}ms` }}>
                <span className={`grid size-7 place-items-center rounded-full ${warn ? "bg-white/10 text-bone" : "bg-gold text-ink"}`}>{warn ? "!" : <Check size={14} aria-hidden="true" />}</span>
                <span className="text-sm text-paper">{item}</span>
              </li>
            );
          })}
        </ul>
      );
    case "social":
      return (
        <div className="flex h-full items-center justify-center gap-4">
          {["Facebook", "Instagram"].map((network, i) => (
            <div key={network} className={`w-[44%] max-w-[150px] overflow-hidden rounded-xl border border-white/15 bg-[#141414] ${pop}`} style={{ animationDelay: `${i * 160}ms` }}>
              <p className="px-2.5 py-2 text-[10px] font-semibold uppercase tracking-wider text-paper">{network}</p>
              <div className="relative aspect-[4/5]"><Image src={visual.src} alt="" fill sizes="150px" className="object-cover" /></div>
              <p className="px-2.5 py-2 text-[10px] text-gold">Posted 8:00 PM</p>
            </div>
          ))}
        </div>
      );
    case "formats":
      return (
        <div className="flex h-full items-end justify-center gap-3">
          <div className={`relative aspect-[4/5] w-[38%] max-w-[140px] overflow-hidden rounded-lg border border-white/15 ${pop}`}>
            <Image src={visual.post} alt="" fill sizes="140px" className="object-cover" />
            <span className="absolute bottom-1.5 left-1.5 rounded bg-black/70 px-1.5 text-[9px] uppercase tracking-wider text-paper">Post 4:5</span>
          </div>
          <div className={`relative aspect-[9/16] w-[28%] max-w-[110px] overflow-hidden rounded-lg border border-white/15 ${pop}`} style={{ animationDelay: "120ms" }}>
            <Image src={visual.story} alt="" fill sizes="110px" className="object-cover" />
            <span className="absolute bottom-1.5 left-1.5 rounded bg-black/70 px-1.5 text-[9px] uppercase tracking-wider text-paper">Story</span>
          </div>
          <div className={`relative grid aspect-[9/16] w-[28%] max-w-[110px] place-items-center overflow-hidden rounded-lg border border-gold/50 bg-[#141414] ${pop}`} style={{ animationDelay: "240ms" }}>
            <span className="grid size-10 place-items-center rounded-full bg-gold text-ink" aria-hidden="true">▶</span>
            <span className="absolute bottom-1.5 left-1.5 rounded bg-black/70 px-1.5 text-[9px] uppercase tracking-wider text-paper">Reel</span>
          </div>
        </div>
      );
    case "calendar":
      return (
        <div className={`mx-auto w-full max-w-xs rounded-xl border border-white/15 bg-[#141414] p-4 ${pop}`}>
          <div className="grid grid-cols-7 gap-1 text-center text-[10px] text-bone">
            {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => <span key={i}>{d}</span>)}
            {Array.from({ length: 14 }, (_, i) => (
              <span key={i} className={`grid aspect-square place-items-center rounded ${i === 9 ? "bg-gold text-ink" : "bg-white/[0.05]"}`}>{i + 10}</span>
            ))}
          </div>
          <ul className="mt-4 space-y-2">
            {visual.slots.map((slot) => (
              <li key={slot} className="flex items-center gap-2 rounded-md border border-gold/40 px-3 py-2 text-xs text-paper"><span className="size-2 rounded-full bg-gold" />{slot}</li>
            ))}
          </ul>
        </div>
      );
    case "brief":
      return (
        <div className={`mx-auto w-full max-w-xs space-y-3 rounded-xl border border-white/15 bg-[#141414] p-5 ${pop}`}>
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold">{visual.heading}</p>
          {visual.rows.map((row) => (
            <div key={row.label}>
              <p className="text-[10px] text-bone">{row.label}</p>
              {row.quote ? <p className="font-serif text-lg leading-snug text-paper">&ldquo;{row.value}&rdquo;</p> : <p className="text-sm text-paper">{row.value}</p>}
            </div>
          ))}
        </div>
      );
  }
}

export default function SystemFlowExplainer({ flows, eyebrow, heading }: { flows: readonly SystemFlow[]; eyebrow?: string; heading?: string }) {
  const id = useId();
  const reduced = usePrefersReducedMotion();
  const [flowIndex, setFlowIndex] = useState(0);
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);
  const flow = flows[flowIndex];
  const total = flow.steps.length;
  const current = flow.steps[step];

  useEffect(() => {
    if (reduced || paused) return;
    const timer = window.setTimeout(() => setStep((s) => (s + 1) % total), STEP_MS);
    return () => window.clearTimeout(timer);
  }, [step, reduced, paused, total]);

  const progress = total > 1 ? (step / (total - 1)) * 100 : 100;

  return (
    <div className="border border-line bg-[#0d0d0d] p-5 sm:p-8 lg:p-10" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {(eyebrow || heading) && (
        <div className="max-w-3xl">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          {heading && <h2 className="mt-4 font-serif text-[clamp(2rem,5vw,3.4rem)] leading-[1.05] text-paper">{heading}</h2>}
        </div>
      )}

      {flows.length > 1 && (
        <div role="tablist" aria-label="Choose a system" className={`${eyebrow || heading ? "mt-8" : ""} flex flex-wrap gap-2`}>
          {flows.map((f, i) => (
            <button
              key={f.id}
              role="tab"
              type="button"
              id={`${id}-tab-${f.id}`}
              aria-selected={i === flowIndex}
              aria-controls={`${id}-panel`}
              onClick={() => { setFlowIndex(i); setStep(0); }}
              className={`min-h-11 rounded-full border px-5 text-sm transition-colors ${i === flowIndex ? "border-gold bg-gold text-ink" : "border-white/15 text-paper hover:border-gold"} ${focus}`}
            >
              {f.label}
            </button>
          ))}
        </div>
      )}

      <div id={`${id}-panel`} role={flows.length > 1 ? "tabpanel" : undefined} aria-labelledby={flows.length > 1 ? `${id}-tab-${flow.id}` : undefined} className="mt-8">
        <h3 className="max-w-3xl text-2xl font-semibold leading-tight text-paper sm:text-3xl">{flow.title}</h3>
        <p className="mt-3 max-w-2xl text-base leading-7 text-bone">{flow.intro}</p>

        <ol className="relative mt-10 grid grid-cols-5 gap-2" aria-label="Steps">
          <span className="absolute left-[10%] right-[10%] top-5 h-px bg-white/15" aria-hidden="true" />
          <span className="absolute left-[10%] top-5 h-px bg-gold transition-[width] duration-700 ease-apple" style={{ width: `${progress * 0.8}%` }} aria-hidden="true" />
          {flow.steps.map((s, i) => {
            const active = i === step;
            const done = i < step;
            return (
              <li key={s.title} className="relative flex flex-col items-center text-center">
                <button
                  type="button"
                  onClick={() => { setStep(i); setPaused(true); }}
                  aria-current={active ? "step" : undefined}
                  aria-label={`Step ${i + 1}: ${s.title}`}
                  className={`relative z-10 grid size-10 place-items-center rounded-full border text-sm font-semibold transition-all duration-500 ${active ? "scale-110 border-gold bg-gold text-ink shadow-[0_0_0_8px_rgba(176,141,87,0.15)]" : done ? "border-gold bg-[#0d0d0d] text-gold" : "border-white/20 bg-[#0d0d0d] text-bone"} ${focus}`}
                >
                  {i + 1}
                </button>
                <span className={`mt-3 hidden text-sm sm:block ${active ? "text-paper" : "text-bone"}`}>{s.title}</span>
              </li>
            );
          })}
        </ol>

        <div className="mt-8 grid items-center gap-8 md:grid-cols-[1fr_1.1fr] lg:gap-14">
          <div key={`${flow.id}-${step}-text`} className={reduced ? "" : "animate-[flowFade_.5s_ease_both]"}>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Step {step + 1} of {total}</p>
            <p className="mt-3 font-serif text-3xl leading-tight text-paper sm:text-4xl">{current.title}</p>
            <p className="mt-4 text-lg leading-8 text-paper">{current.short}</p>
            <p className="mt-3 text-base leading-7 text-bone">{current.detail}</p>
            <div className="mt-6 flex gap-3">
              <button type="button" onClick={() => { setStep((step - 1 + total) % total); setPaused(true); }} className={`min-h-11 rounded-full border border-white/15 px-5 text-sm text-paper hover:border-gold ${focus}`}>Previous</button>
              <button type="button" onClick={() => { setStep((step + 1) % total); setPaused(true); }} className={`min-h-11 rounded-full border border-gold px-5 text-sm text-paper hover:bg-gold hover:text-ink ${focus}`}>Next step</button>
            </div>
          </div>
          <div key={`${flow.id}-${step}-visual`} className="relative h-[340px] rounded-2xl bg-[radial-gradient(circle_at_50%_40%,rgba(176,141,87,0.16),transparent_65%)] p-4" aria-hidden="true">
            <Visual visual={current.visual} animate={!reduced} />
          </div>
        </div>
      </div>
    </div>
  );
}
