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
    default: "Real Group Entertainment — Venture Studio",
    template: "%s — Real Group Entertainment",
  },
  description:
    "Real Group Entertainment is a Miami-based venture studio building real products — EVOLUSA and BELONG — backed by 20+ years of brand strategy and creative direction.",
  keywords: [
    "Real Group Entertainment",
    "Venture Studio",
    "EVOLUSA",
    "BELONG",
    "Creative Director",
    "Brand Strategist",
    "Mauricio Yepes",
  ],
  authors: [{ name: "Mauricio Yepes" }],
  creator: "Mauricio Yepes",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Real Group Entertainment — Venture Studio",
    description:
      "Building real products — EVOLUSA and BELONG — backed by 20+ years of brand strategy and creative direction.",
    siteName: "Real Group Entertainment",
    images: [
      {
        url: "/images/mauricio.png",
        width: 900,
        height: 1200,
        alt: "Real Group Entertainment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Group Entertainment — Venture Studio",
    description:
      "Building real products — EVOLUSA and BELONG — backed by 20+ years of brand strategy and creative direction.",
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
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Real Group Entertainment",
      url: siteUrl,
      logo: `${siteUrl}/images/mauricio.png`,
      founder: { "@id": `${siteUrl}/#person` },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Miami",
        addressRegion: "FL",
        addressCountry: "US",
      },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Mauricio Yepes",
      jobTitle: "Creative Director",
      url: `${siteUrl}/about`,
      image: `${siteUrl}/images/mauricio.png`,
      worksFor: { "@id": `${siteUrl}/#organization` },
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
    },
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
