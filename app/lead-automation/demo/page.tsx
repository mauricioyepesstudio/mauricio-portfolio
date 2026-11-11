"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, RotateCcw } from "lucide-react";

type Stage = "New" | "Assigned" | "Contacted" | "Quoted" | "Won" | "Lost";
type DemoLead = {
  id: number;
  client: string;
  service: string;
  owner: string;
  stage: Stage;
  quote: number;
};

const originals: DemoLead[] = [
  { id: 101, client: "Sample Business A", service: "Website + CRM", owner: "Unassigned", stage: "New", quote: 0 },
  { id: 102, client: "Sample Business B", service: "Lead automation", owner: "Account manager", stage: "Contacted", quote: 0 },
  { id: 103, client: "Sample Business C", service: "Monthly marketing", owner: "Account manager", stage: "Quoted", quote: 850 },
];
const stages: Stage[] = ["New", "Assigned", "Contacted", "Quoted", "Won", "Lost"];
const nextStage: Partial<Record<Stage, Stage>> = {
  New: "Assigned", Assigned: "Contacted", Contacted: "Quoted", Quoted: "Won",
};

export default function DemoPage() {
  const [leads, setLeads] = useState<DemoLead[]>(originals);
  const [quoteInputs, setQuoteInputs] = useState<Record<number, number>>({});
  const won = leads.filter((l) => l.stage === "Won");
  const revenue = useMemo(() => won.reduce((sum, l) => sum + l.quote, 0), [won]);
  const quoted = leads.filter((l) => l.stage === "Quoted").length;

  function advance(id: number) {
    setLeads((current) => current.map((lead) => {
      if (lead.id !== id) return lead;
      const next = nextStage[lead.stage];
      if (!next) return lead;
      const amount = quoteInputs[id] ?? lead.quote;
      if ((next === "Quoted" || next === "Won") && !(amount > 0)) return lead;
      return { ...lead, stage: next, owner: lead.owner === "Unassigned" ? "Account manager" : lead.owner, quote: amount };
    }));
  }

  function reset() {
    setLeads(originals);
    setQuoteInputs({});
  }

  return (
    <main className="container-px mx-auto max-w-content pb-28 pt-32 text-paper sm:pt-40">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="eyebrow text-gold">Real Group · Interactive demo</p>
        <span className="rounded-full border border-gold px-4 py-1 text-xs font-bold tracking-widest text-gold">DEMO DATA ONLY</span>
      </div>
      <h1 className="mt-5 font-serif text-[clamp(2.8rem,7vw,5.5rem)] leading-tight">From request to <span className="italic text-gold">revenue.</span></h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-bone">
        This simulation uses fictitious businesses. Click the next action for each opportunity and watch the pipeline update.
        No emails are sent, no real customer data is used, and your changes are not saved.
      </p>
      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          ["Sample requests", leads.length],
          ["Being quoted", quoted],
          ["Sample wins", won.length],
          ["Simulated revenue", `$${revenue.toLocaleString("en-US")}`],
        ].map(([label, value]) => (
          <div key={label} className="rounded-xl border border-line bg-[#111] p-5">
            <p className="text-xs uppercase tracking-[0.1em] text-bone">{label}</p>
            <strong className="mt-3 block text-2xl text-gold">{value}</strong>
          </div>
        ))}
      </div>
      <section className="mt-12 rounded-2xl border border-line bg-[#101010] p-5 sm:p-8" aria-label="Example pipeline">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="font-serif text-3xl">Example sales pipeline</h2>
          <button type="button" onClick={reset} className="inline-flex min-h-11 items-center gap-2 border border-line px-4 text-sm hover:border-gold">
            <RotateCcw size={16} aria-hidden="true"/> Reset demo
          </button>
        </div>
        <div className="mt-8 grid gap-5">
          {leads.map((lead) => (
            <article key={lead.id} className="rounded-xl border border-line bg-black/40 p-5">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-xs tracking-wide text-gold">EXAMPLE #{lead.id}</p>
                  <h3 className="mt-2 text-xl font-semibold">{lead.client}</h3>
                  <p className="mt-1 text-sm text-bone">{lead.service} · {lead.owner}</p>
                </div>
                <span className="rounded-full border border-gold/60 px-4 py-2 text-sm font-semibold">{lead.stage}</span>
              </div>
              <div className="mt-5 flex flex-wrap items-end gap-3">
                {(["Contacted", "Quoted"].includes(lead.stage)) && (
                  <label className="text-sm text-bone">
                    Example quote (USD)
                    <input
                      type="number" min="1" max="1000000" step="1"
                      value={quoteInputs[lead.id] ?? lead.quote}
                      onChange={(e) => setQuoteInputs((values) => ({ ...values, [lead.id]: Number(e.target.value) }))}
                      className="mt-1 block h-11 w-36 rounded-lg border border-line bg-[#222] px-3 text-paper"
                    />
                  </label>
                )}
                {nextStage[lead.stage] && (
                  <button type="button" onClick={() => advance(lead.id)}
                    className="inline-flex min-h-11 items-center gap-2 rounded-full bg-gold px-5 font-semibold text-black hover:bg-paper">
                    Mark {nextStage[lead.stage]} <ArrowRight size={16} aria-hidden="true"/>
                  </button>
                )}
                {lead.stage === "Quoted" && (
                  <button type="button" onClick={() => setLeads((rows) => rows.map(l => l.id === lead.id ? { ...l, stage: "Lost" } : l))}
                    className="min-h-11 rounded-full border border-line px-5 text-bone hover:text-paper">Mark Lost</button>
                )}
                {lead.stage === "Won" && <p className="text-sm text-gold">Example closed value: ${lead.quote.toLocaleString("en-US")}</p>}
              </div>
              <div className="mt-5 flex flex-wrap gap-1" aria-label="Sales progress">
                {stages.slice(0, 5).map((step, i) => (
                  <span key={step} title={step} className={`h-1.5 flex-1 rounded ${lead.stage !== "Lost" && stages.indexOf(lead.stage) >= i ? "bg-gold" : "bg-[#35312d]"}`}/>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link href="/contact?topic=automation" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-gold px-6 font-bold text-black hover:bg-paper">Request your own system <ArrowRight size={18} aria-hidden="true"/></Link>
        <Link href="/lead-automation" className="inline-flex min-h-12 items-center border-b border-gold px-2 text-bone hover:text-paper">Explore the service</Link>
      </div>
      <p className="mt-8 text-sm text-bone">This demonstration is illustrative, not a report of Real Group revenue or actual customers.</p>
    </main>
  );
}
