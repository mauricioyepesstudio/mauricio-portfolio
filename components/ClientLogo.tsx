"use client";

import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import type { ClientEntry } from "@/lib/client-logos";
import { getClientCaseStudyHref } from "@/lib/client-logos";

type ClientLogoProps = {
  client: ClientEntry;
};

function logoStyle(client: ClientEntry): CSSProperties {
  const maxWidth = client.maxWidth ?? 148;
  const maxHeight = client.maxHeight ?? 58;
  const mobileMaxWidth = client.mobileMaxWidth ?? Math.round(maxWidth * 0.52);
  const mobileMaxHeight = client.mobileMaxHeight ?? Math.round(maxHeight * 0.52);

  return {
    "--logo-max-w-mobile": `${mobileMaxWidth}px`,
    "--logo-max-h-mobile": `${mobileMaxHeight}px`,
    "--logo-max-w": `${maxWidth}px`,
    "--logo-max-h": `${maxHeight}px`,
    transform: client.scale ? `scale(${client.scale})` : undefined,
  } as CSSProperties;
}

function LogoMark({ client }: { client: ClientEntry }) {
  if (!client.logo) return null;

  return (
    <Image
      src={client.logo}
      alt={client.alt}
      width={client.width ?? 240}
      height={client.height ?? 80}
      className={`client-logo-mark object-contain opacity-[0.9] transition-all duration-300 group-hover:opacity-100 group-hover:drop-shadow-[0_0_20px_rgba(216,169,74,0.22)] group-focus-visible:opacity-100 group-focus-visible:drop-shadow-[0_0_20px_rgba(216,169,74,0.22)] ${
        client.invert
          ? "brightness-0 invert group-hover:brightness-100 group-hover:invert-0 group-focus-visible:brightness-100 group-focus-visible:invert-0"
          : ""
      }`}
    />
  );
}

export default function ClientLogo({ client }: ClientLogoProps) {
  if (!client.logo) return null;

  const href = getClientCaseStudyHref(client);
  const shellClass =
    "group relative flex h-[136px] w-full flex-col items-center justify-center px-6 py-7 transition-colors duration-300 sm:px-7 lg:h-[152px] lg:px-7 lg:py-12";
  const style = logoStyle(client);

  const content = <LogoMark client={client} />;

  if (href) {
    return (
      <Link
        href={href}
        style={style}
        className={`${shellClass} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold`}
        aria-label={`${client.name} — view case study`}
      >
        {content}
      </Link>
    );
  }

  return (
    <div className={shellClass} style={style} aria-label={client.alt}>
      {content}
    </div>
  );
}
