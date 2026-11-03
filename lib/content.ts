export const services = [
  {
    title: "Creative Direction",
    description:
      "Setting the creative direction for a brand or campaign from first concept through final production, not handing it off after the deck.",
  },
  {
    title: "Brand Identity",
    description:
      "Logo systems, typography and brand guidelines built to stay consistent once other people start applying them.",
  },
  {
    title: "Editorial Design",
    description:
      "Magazine layouts, catalogs and corporate publications — the discipline behind thirty-plus print editions a year.",
  },
  {
    title: "Advertising & Campaigns",
    description:
      "Print, digital and social campaigns built around one message and one visual system, not a different agency's version of each.",
  },
  {
    title: "Digital Marketing",
    description:
      "Creative for Meta Ads, Google Ads, email and landing pages, built to be tested and iterated, not just delivered once.",
  },
  {
    title: "Website Design",
    description:
      "Responsive websites where the layout serves the funnel, not just the mood board.",
  },
  {
    title: "AI Creative",
    description:
      "Adobe Firefly, Midjourney and ChatGPT worked directly into concepting and production where they save real time, not as a gimmick layer on top.",
  },
  {
    title: "Print & Production",
    description:
      "Production-ready artwork for magazines, packaging and large-format print — the unglamorous half of the job that keeps the glamorous half honest.",
  },
];

// Source: Mauricio's resume (Mauricio_Perfil_Planner_Real_Group.html, #experiencia).
// Dates are transcribed from the resume; location is omitted where the resume does not state it.
export type ExperienceItem = {
  role: string;
  org: string;
  location?: string;
  period: string;
  description: string;
};

export const experience: ExperienceItem[] = [
  {
    role: "Creative Director & Founder",
    org: "Real Group Entertainment LLC",
    location: "Miami, Florida",
    period: "2021 — Present",
    description:
      "Leading branding, creative direction, UI/UX, web design, editorial design and digital marketing initiatives. Developing visual identities, advertising campaigns, websites and lead generation systems for businesses across the United States.",
  },
  {
    role: "Graphic Design & Social Media Advertising",
    org: "C2 Multimedia · Resource Living Magazine",
    location: "Miami, Florida",
    period: "Dec 2024 — Present",
    description:
      "Graphic design for C2 Multimedia's Resource Living Magazine: editorial design and digital advertising, plus management of digital marketing campaigns across social media platforms.",
  },
  {
    role: "Graphic Designer / Marketing Specialist",
    org: "DB Distro Inc",
    period: "Jun 2023 — Dec 2024",
    description:
      "Visual and brand strategies for the wholesale smoke-shop market: product design, packaging and visual identity that communicate each brand's identity and values.",
  },
  {
    role: "Graphic Designer",
    org: "FK Irons",
    location: "Miami, Florida",
    period: "Jan 2022 — Jun 2023",
    description:
      "Visual identity and branding for the beauty brands Microbeau and Evenflo Colours, from packaging concepts to product graphics and digital assets.",
  },
  {
    role: "Brand Identity",
    org: "Landers S.A.",
    location: "Colombia",
    period: "Jun 2018 — Jun 2021",
    description:
      "International packaging design and graphic communication strategies for product development and launches, keeping brand identity consistent across the company's brands.",
  },
  {
    role: "Graphic Designer",
    org: "Le*Bon",
    period: "Feb — Jun 2018",
    description: "Catalog design and creative direction.",
  },
  {
    role: "Creative Designer",
    org: "GLUE",
    period: "Oct — Dec 2017",
    description:
      "Campaign proposals in collaboration with multidisciplinary teams.",
  },
  {
    role: "Design & Digital Marketing",
    org: "TYU Importaciones",
    period: "Dec 2015 — Nov 2016",
    description:
      "OpenCart e-commerce, UX/UI, social media and content.",
  },
  {
    role: "Design & Digital Marketing",
    org: "Estudio 300 DPI",
    period: "Mar 2014 — Nov 2015",
    description: "Advertising, editorial design and printed materials.",
  },
  {
    role: "Graphic Designer",
    org: "Esquema Publicidad",
    period: "Oct 2012 — Dec 2014",
    description:
      "Branding and communication materials for real estate projects.",
  },
  {
    role: "Freelance Graphic Designer",
    org: "Independent",
    period: "2010 — 2020",
    description: "Brand creation and digital communication management.",
  },
  {
    role: "Photography Production Assistant",
    org: "Fashion & catalog production",
    period: "2003 — 2007",
    description:
      "Coordination of fashion photography and catalog production.",
  },
  {
    role: "Founder & Creative Director",
    org: "BMX Colombia Magazine",
    location: "Medellín, Colombia",
    period: "2001",
    description:
      "Founded one of Colombia's pioneering BMX publications, overseeing editorial design, photography, advertising and creative direction while helping promote athletes, brands and events during the growth of the country's BMX community.",
  },
];

export const testimonials = [];

export const skills = {
  design: [
    "Creative Direction",
    "Brand Identity",
    "Editorial Design",
    "Advertising Design",
    "Packaging Design",
    "Art Direction",
    "Typography",
    "Visual Storytelling",
  ],

  production: [
    "Print Production",
    "Prepress",
    "Large Format",
    "Magazine Production",
    "Photography Direction",
    "Vendor Management",
  ],

  digital: [
    "Website Design",
    "UI Design",
    "Landing Pages",
    "Digital Marketing",
    "Meta Ads",
    "Google Ads",
    "SEO",
    "Campaign Strategy",
    "Email Marketing",
    "AI Creative",
  ],

  tools: [
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe InDesign",
    "Adobe After Effects",
    "Adobe Premiere Pro",
    "Figma",
    "WordPress",
    "Elementor",
    "Shopify",
    "Canva",
    "Midjourney",
    "ChatGPT",
  ],
};

export const languages = [
  "Spanish — Native",
  "English — Professional Working Proficiency",
];
