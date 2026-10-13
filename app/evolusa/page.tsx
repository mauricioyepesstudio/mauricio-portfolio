import { EvolusaPageContent } from "@/components/building/EvolusaPageContent";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";

const evolusaTitle = "EVOLUSA";
const evolusaDescription =
  "EVOLUSA connects Spanish-speaking immigrants in the U.S. with verified professionals — a Real Group Entertainment venture.";

export const metadata: Metadata = pageMetadata({
  title: evolusaTitle,
  description: evolusaDescription,
  path: "/evolusa",
  ogTitle: "EVOLUSA — Real Group Entertainment",
  image: {
    url: "/brand/evolusa/EVOLUSA_Profile_1080x1080.png",
    width: 1080,
    height: 1080,
    alt: "EVOLUSA",
  },
});

const categories = [
  { name: "Marketing & Digital Presence", status: "Live" },
  { name: "Business Operations", status: "Live" },
  { name: "Notary", status: "Activating" },
  { name: "Tax & Accounting", status: "Coming soon" },
  { name: "Legal & Immigration", status: "Coming soon" },
];

export default function EvolusaPage() { return <EvolusaPageContent />; }
