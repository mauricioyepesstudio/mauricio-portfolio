import { PersonalCFOPageContent } from "@/components/building/PersonalCFOPageContent";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, BarChart3, BookOpen, LayoutDashboard, ShieldCheck, TrendingUp } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
export const metadata: Metadata = pageMetadata({ title: "Personal CFO — Brand & Product", description: "Explore the identity, brandbook, experience and development roadmap for Personal CFO.", path: "/personal-cfo" });
const palette = [
  { name: "Navy", hex: "#102A43", note: "Foundation" },{ name: "Mint", hex: "#72E3B2", note: "Accent" },
  { name: "Teal", hex: "#127C70", note: "Actions" },{ name: "Teal dark", hex: "#0B5147", note: "Contrast" },
  { name: "Muted", hex: "#526B7F", note: "Secondary" },{ name: "Loss", hex: "#A04F4A", note: "Warnings" },
];
const sections = [
  { title: "Financial overview", description: "Net worth, assets and liabilities in a single overview.", Icon: LayoutDashboard },
  { title: "Monthly movement", description: "Understand what changed from one month to the next.", Icon: TrendingUp },
  { title: "Spending and cash flow", description: "See income, spending and category movement clearly.", Icon: BarChart3 },
  { title: "Data and privacy", description: "Missing values stay unregistered rather than becoming zero; sensitive figures are never shown here.", Icon: ShieldCheck },
];
export default function PersonalCFOPage() { return <PersonalCFOPageContent />; }
