import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

const SITE_NAME = "Real Group Entertainment";
const DEFAULT_IMAGE = {
  url: "/images/rge-og.png",
  width: 1200,
  height: 630,
  alt: "Real Group Entertainment by Mauricio Yepes",
};

type OgImage = { url: string; width?: number; height?: number; alt?: string };

/**
 * Per-page metadata with its own canonical URL and Open Graph / Twitter cards.
 * Without this, pages that don't define openGraph inherit the root layout's
 * og:url (the home page), so every share preview pointed at "/".
 */
export function pageMetadata({
  title,
  description,
  path,
  ogTitle,
  image,
}: {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  image?: OgImage;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const shareTitle = ogTitle ?? `${title} — ${SITE_NAME}`;
  const ogImage = image ?? DEFAULT_IMAGE;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: SITE_NAME,
      title: shareTitle,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images: [ogImage.url],
    },
  };
}
