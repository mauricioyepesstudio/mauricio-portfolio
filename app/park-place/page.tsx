import { ParkPlacePageContent } from "@/components/building/ParkPlacePageContent";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, FileSpreadsheet, FileText, Layers3, Users } from "lucide-react";
import ParkPlaceTour from "@/components/ParkPlaceTour";
import { pageMetadata } from "@/lib/seo";
export const metadata: Metadata=pageMetadata({title:"Park Place — Owner Portal",description:"Explore the owner and admin experiences, monthly statements, Excel imports, 1099 workflow and development roadmap.",path:"/park-place"});
const modules=[{title:"Owner portal",description:"Unit-specific monthly and YTD income, expenses and owner payout.",Icon:Users},{title:"Admin workspace",description:"Bulk Excel intake and per-unit PDF statement uploads.",Icon:FileSpreadsheet},{title:"Statements",description:"Monthly reports, detailed expenses and owner-visible documents.",Icon:Layers3},{title:"Annual 1099",description:"Admin upload and owner access by unit and year.",Icon:FileText}];
export default function ParkPlacePage() { return <ParkPlacePageContent />; }
