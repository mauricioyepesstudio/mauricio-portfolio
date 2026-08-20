import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const siteUrl = "https://mauricioyepes.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mauricio Yepes — Creative Director & Brand Strategist",
    template: "%s — Mauricio Yepes",
  },
  description:
    "Mauricio Yepes is a Miami-based Creative Director and Brand Strategist with 12+ years of experience in branding, packaging, editorial design, advertising, and AI-powered creative for international brands.",
  keywords: [
    "Creative Director",
    "Brand Strategist",
    "Marketing Designer",
    "Brand Identity Designer Miami",
    "Packaging Design",
    "Editorial Design",
    "Freelance Creative Director",
    "Mauricio Yepes",
  ],
  authors: [{ name: "Mauricio Yepes" }],
  creator: "Mauricio Yepes",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Mauricio Yepes — Creative Director & Brand Strategist",
    description:
      "Helping brands grow through strategy, design, advertising and AI-powered creativity.",
    siteName: "Mauricio Yepes",
    images: [
      {
        url: "/images/mauricio.png",
        width: 900,
        height: 1200,
        alt: "Mauricio Yepes — Creative Director",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mauricio Yepes — Creative Director & Brand Strategist",
    description:
      "Helping brands grow through strategy, design, advertising and AI-powered creativity.",
    images: ["/images/mauricio.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mauricio Yepes",
  jobTitle: "Creative Director",
  url: siteUrl,
  image: `${siteUrl}/images/mauricio.png`,
  worksFor: {
    "@type": "Organization",
    name: "Real Group Entertainment LLC",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Miami",
    addressRegion: "FL",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.linkedin.com/in/mauricio-yepes-lotero/",
    "https://www.behance.net/mauricioyepes01",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${instrument.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-gold focus:text-ink focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to content
        </a>
        <div className="grain-overlay" aria-hidden="true" />
        <MotionConfig reducedMotion="user">
          <Nav />
          <PageTransition>
            <main id="main-content">{children}</main>
          </PageTransition>
          <Footer />
        </MotionConfig>
      </body>
    </html>
  );
}
