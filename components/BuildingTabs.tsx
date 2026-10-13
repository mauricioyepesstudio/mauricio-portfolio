"use client";
import { useState, type ReactNode } from "react";
const tabs = [{id:"evolusa",label:"EvolUSA"},{id:"belong",label:"BELONG"},{id:"personal-cfo",label:"Personal CFO"},{id:"park-place",label:"Park Place"}] as const;
export default function BuildingTabs({panels}:{panels:ReactNode[]}) {
 const [active,setActive]=useState(0);
 return <div className="mt-12">
  <div role="tablist" aria-label="Building projects" className="sticky top-20 z-20 -mx-2 flex gap-2 overflow-x-auto rounded-2xl border border-line bg-[#0B0B0B]/95 p-2 backdrop-blur-xl sm:top-24">
  {tabs.map((t,i)=><button key={t.id} type="button" role="tab" id={"tab-"+t.id} aria-controls={"panel-"+t.id} aria-selected={active===i} onClick={()=>setActive(i)} className={`min-w-max flex-1 rounded-xl px-4 py-4 text-sm font-semibold transition ${active===i?"bg-gold text-black":"text-bone hover:bg-white/10 hover:text-paper"}`}>{t.label}</button>)}
  </div>
  {tabs.map((t,i)=><div key={t.id} id={"panel-"+t.id} role="tabpanel" aria-labelledby={"tab-"+t.id} hidden={active!==i} className="min-w-0">{panels[i]}</div>)}
 </div>;
}
