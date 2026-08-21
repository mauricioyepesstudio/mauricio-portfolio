const LOGO_DIR = "/logos/clients";

function logoPath(filename: string) {
  return `${LOGO_DIR}/${encodeURIComponent(filename)}`;
}

export type ClientEntry = {
  name: string;
  alt: string;
  logo?: string;
  scale?: number;
  maxWidth?: number;
  maxHeight?: number;
  mobileMaxWidth?: number;
  mobileMaxHeight?: number;
  width?: number;
  height?: number;
  invert?: boolean;
  hasCaseStudy?: boolean;
  caseStudySlug?: string;
  visibleInLogoWall?: boolean;
  hiddenUntilLogo?: boolean;
};

export const clientLogos: ClientEntry[] = [
  {
    name: "FK Irons",
    alt: "FK Irons logo",
    hiddenUntilLogo: true,
  },
  {
    name: "Microbeau",
    alt: "Microbeau International logo",
    logo: logoPath("Microbeau Logo.png"),
    maxWidth: 112,
    maxHeight: 72,
    mobileMaxWidth: 72,
    mobileMaxHeight: 46,
    width: 200,
    height: 200,
    hasCaseStudy: true,
    caseStudySlug: "microbeau",
    visibleInLogoWall: true,
  },
  {
    name: "Grupo Nutresa",
    alt: "Grupo Nutresa logo",
    logo: logoPath("Grupo Nutresa Logo.png"),
    maxWidth: 168,
    maxHeight: 56,
    mobileMaxWidth: 88,
    mobileMaxHeight: 30,
    width: 320,
    height: 120,
    visibleInLogoWall: true,
  },
  {
    name: "Evenflo Colours",
    alt: "Evenflo Colours logo",
    logo: logoPath("Evenflo Logo.png"),
    maxWidth: 176,
    maxHeight: 52,
    mobileMaxWidth: 92,
    mobileMaxHeight: 28,
    width: 360,
    height: 100,
    hasCaseStudy: true,
    caseStudySlug: "evenflo",
    visibleInLogoWall: true,
  },
  {
    name: "Landers",
    alt: "Landers logo",
    hiddenUntilLogo: true,
  },
  {
    name: "LeBon",
    alt: "LeBon logo",
    hiddenUntilLogo: true,
  },
  {
    name: "Resource Living",
    alt: "Resource Living Magazines logo",
    logo: logoPath("Resource Living Magazines Logo.png"),
    maxWidth: 188,
    maxHeight: 58,
    mobileMaxWidth: 96,
    mobileMaxHeight: 30,
    width: 360,
    height: 120,
    hasCaseStudy: true,
    caseStudySlug: "resource-living",
    visibleInLogoWall: true,
  },
  {
    name: "C2 Multimedia",
    alt: "C2 Multimedia logo",
    hiddenUntilLogo: true,
  },
  {
    name: "DB Distro",
    alt: "DB Distro logo",
    hiddenUntilLogo: true,
  },
  {
    name: "Oakley Colombia",
    alt: "Oakley Colombia logo",
    logo: logoPath("Oakley Colombia Logo.png"),
    maxWidth: 96,
    maxHeight: 72,
    mobileMaxWidth: 52,
    mobileMaxHeight: 40,
    width: 160,
    height: 160,
    visibleInLogoWall: true,
  },
  {
    name: "Mariana Pajón",
    alt: "Mariana Pajón logo",
    hiddenUntilLogo: true,
  },
  {
    name: "Real Group Entertainment",
    alt: "Real Group Entertainment logo",
    logo: logoPath("Real Group Entertainment Logo.png"),
    maxWidth: 184,
    maxHeight: 64,
    mobileMaxWidth: 94,
    mobileMaxHeight: 34,
    width: 360,
    height: 120,
    hasCaseStudy: true,
    caseStudySlug: "real-group-entertainment",
    visibleInLogoWall: true,
  },
  {
    name: "Consumo Supermarket",
    alt: "Consumo Supermarket logo",
    logo: logoPath("Consumo Supermaket Logo.png"),
    maxWidth: 132,
    maxHeight: 76,
    mobileMaxWidth: 68,
    mobileMaxHeight: 40,
    width: 200,
    height: 200,
    visibleInLogoWall: true,
  },
  {
    name: "Pastelitos Colombia",
    alt: "Pastelitos Colombia logo",
    logo: logoPath("Pastelitos Colombia Logo.png"),
    maxWidth: 172,
    maxHeight: 48,
    mobileMaxWidth: 90,
    mobileMaxHeight: 26,
    width: 320,
    height: 80,
    visibleInLogoWall: true,
  },
  {
    name: "Revista Biker",
    alt: "Revista Biker logo",
    logo: logoPath("Revista Biker Logo.png"),
    maxWidth: 164,
    maxHeight: 52,
    mobileMaxWidth: 86,
    mobileMaxHeight: 28,
    width: 280,
    height: 100,
    visibleInLogoWall: true,
  },
  {
    name: "Seafood Delight",
    alt: "Seafood Delight logo",
    logo: logoPath("seafood-delight.png"),
    maxWidth: 120,
    maxHeight: 88,
    mobileMaxWidth: 64,
    mobileMaxHeight: 48,
    width: 280,
    height: 200,
    hasCaseStudy: true,
    caseStudySlug: "seafood-delight",
    visibleInLogoWall: true,
  },
];

export function getClientCaseStudyHref(client: ClientEntry) {
  if (!client.hasCaseStudy || !client.caseStudySlug) return undefined;
  return `/portfolio/${client.caseStudySlug}`;
}

export function getVisibleClientLogos() {
  return clientLogos.filter(
    (client) => client.visibleInLogoWall === true && Boolean(client.logo)
  );
}

export function getHiddenClientsAwaitingLogos() {
  return clientLogos.filter(
    (client) => client.hiddenUntilLogo === true || !client.logo
  );
}
