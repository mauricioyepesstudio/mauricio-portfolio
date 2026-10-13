import type { Metadata } from "next";
import BuildingTabs from "@/components/BuildingTabs";
import { EvolusaPageContent } from "@/app/evolusa/page"
import { BelongPageContent } from "@/app/belong/page"
import { PersonalCFOPageContent } from "@/app/personal-cfo/page"
import { ParkPlacePageContent } from "@/app/park-place/page"
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
 title: "Building — Products in Progress",
 description: "Explore EvolUSA, BELONG, Personal CFO and Park Place in one scrollable, visual project studio.",
 path: "/building",
});

export default function BuildingPage() {
 return <main className="pb-28 pt-32 sm:pt-40">
  <div className="container-px mx-auto max-w-content">
   <p className="eyebrow mb-5">Building / Product studio</p>
   <h1 className="max-w-5xl text-[clamp(3rem,9vw,6.8rem)] font-semibold leading-[0.94] tracking-[-0.05em] text-paper">Ideas made <span className="font-serif italic text-gold">visible.</span></h1>
   <p className="mt-7 max-w-2xl text-lg leading-8 text-bone">Explore the complete identity, creative campaigns, product screens and development of each venture without leaving Building.</p>
   <BuildingTabs panels={[
    <EvolusaPageContent key="evolusa" embedded/>,
    <BelongPageContent key="belong" embedded/>,
    <PersonalCFOPageContent key="personal-cfo" embedded/>,
    <ParkPlacePageContent key="park-place" embedded/>
   ]}/>
  </div>
 </main>;
}
