"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Compass, Layers3, Map } from "lucide-react";

type TabId = "product" | "brand" | "journey" | "roadmap";
type Venture = "evolusa" | "belong";

const contentByVenture = {
  evolusa: {
    product: { title: "A platform built around the next step", body: "Explore the current EVOLUSA experience, including professional discovery and the professional application flow.", href: "https://evolusa.vercel.app", action: "Explore EVOLUSA" },
    brand: { title: "A visual identity with a purpose", body: "Explore the existing launch creative and brand presentation below. This section uses portfolio assets, not a live social feed.", href: "#venture-brand", action: "View brand assets" },
    journey: { title: "How it works", body: "Discover the service, find the right path, and connect with a professional. Open the live product to see its current onboarding.", href: "https://evolusa.vercel.app", action: "See the experience" },
    roadmap: { title: "What comes next", body: "Professional profiles, content planning, analytics and connected social feeds are proposed improvements. They are not yet presented here as live integrations.", href: "#venture-roadmap", action: "See current categories" },
  },
  belong: {
    product: { title: "Build with people who get it", body: "Explore BELONG's current product experience, community discovery and member journey.", href: "https://belong-ruddy.vercel.app", action: "Explore BELONG" },
    brand: { title: "An identity designed for belonging", body: "Explore the existing BELONG symbols, social visuals and campaign assets in the gallery below.", href: "#venture-brand", action: "View brand assets" },
    journey: { title: "From intention to momentum", body: "Create a profile, discover people and communities, and participate in projects. The live product is the source of truth for available features.", href: "https://belong-ruddy.vercel.app", action: "See the experience" },
    roadmap: { title: "Building in public", body: "Product improvements and milestones appear below. Live social feeds, planners and analytics will be linked only when a verified integration exists.", href: "#venture-roadmap", action: "See development" },
  },
} as const;

const tabs: { id: TabId; label: string; icon: typeof Compass }[] = [
  { id: "product", label: "Product", icon: Layers3 },
  { id: "brand", label: "Brandbook", icon: BookOpen },
  { id: "journey", label: "Guided tour", icon: Compass },
  { id: "roadmap", label: "Roadmap", icon: Map },
];

export default function VentureShowcase({ venture }: { venture: Venture }) {
  const [active, setActive] = useState<TabId>("product");
  const item = contentByVenture[venture][active];
  const external = item.href.startsWith("https://");
  return (
    <section aria-label={venture.toUpperCase() + " interactive overview"} className="mt-12 rounded-3xl border border-white/10 bg-white/[0.025] p-4 sm:p-7">
      <div className="mb-5 flex items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Explore the venture</p>
        <span className="text-xs text-bone">Curated overview</span>
      </div>
      <div role="tablist" aria-label="Venture sections" className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button key={id} id={venture + "-tab-" + id} type="button" role="tab"
            aria-selected={active === id} aria-controls={venture + "-panel"}
            onClick={() => setActive(id)}
            className={"flex min-h-12 items-center justify-center gap-2 rounded-xl border px-3 py-3 text-xs font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold sm:text-sm " +
              (active === id ? "border-gold/60 bg-gold/10 text-paper" : "border-white/10 text-bone hover:border-white/30 hover:text-paper")}>
            <Icon size={16} aria-hidden="true" />{label}
          </button>
        ))}
      </div>
      <div id={venture + "-panel"} role="tabpanel" aria-labelledby={venture + "-tab-" + active}
        className="mt-4 flex min-h-48 flex-col justify-between gap-6 rounded-2xl border border-white/10 bg-black/30 p-6 sm:flex-row sm:items-end sm:p-8">
        <div className="max-w-xl">
          <h2 className="text-2xl font-semibold tracking-tight text-paper sm:text-3xl">{item.title}</h2>
          <p className="mt-3 max-w-lg text-sm leading-6 text-bone sm:text-base">{item.body}</p>
        </div>
        {external ? (
          <a href={item.href} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-white/20 px-5 py-3 text-sm text-paper transition hover:border-gold sm:self-auto">
            {item.action}<ArrowUpRight size={16} aria-hidden="true" />
          </a>
        ) : (
          <Link href={item.href} className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-white/20 px-5 py-3 text-sm text-paper transition hover:border-gold sm:self-auto">
            {item.action}<ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        )}
      </div>
    </section>
  );
}
