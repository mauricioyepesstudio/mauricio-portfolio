export type ProjectSection = {
  title: string;
  images: string[];
};

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: string;
  year: string;

  heroImage: string;
  heroVideo?: string;

  gallery: string[];
  sections?: ProjectSection[];

  deliverables: string[];

  cover: {
    from: string;
    to: string;
  };

  excerpt: string;

  services: string[];

  problem: string;
  strategy: string;
  solution: string;
  result: string;

  metrics: {
    label: string;
    value: string;
  }[];
};

export const projects: Project[] = [
  {
    slug: "resource-living",
    title: "Resource Living",
    client: "Resource Living Magazine",
    category: "Editorial Design",
    year: "2025",

    heroImage: "/projects/resource-living/222.png",
    heroVideo: undefined,

    gallery: [
      "/projects/resource-living/222.png",
      "/projects/resource-living/1080 X 1080 1.png",
      "/projects/resource-living/3213.png",
      "/projects/resource-living/AIR 1.png",
      "/projects/resource-living/AIR 2.png",
      "/projects/resource-living/AIR 3.png",
      "/projects/resource-living/Artboard 1.png",
      "/projects/resource-living/Artboard 2.png",
      "/projects/resource-living/Artboard 3.png",
      "/projects/resource-living/Artboard 4.png",
      "/projects/resource-living/Artboard 5.png",
      "/projects/resource-living/Artboard 6.png",
    ],

    deliverables: [
      "Editorial Design",
      "Creative Direction",
      "Magazine Layout",
      "Advertising Campaigns",
      "Lead Generation",
      "Digital Marketing",
    ],

    cover: {
      from: "#1f5eff",
      to: "#08111d",
    },

    excerpt:
      "South Florida's premier home improvement publication connecting homeowners with trusted contractors.",

    services: [
      "Creative Direction",
      "Magazine Design",
      "Advertising",
      "Brand Strategy",
      "Lead Generation",
    ],

    problem:
      "Create a premium publication capable of generating trust while helping local businesses grow.",

    strategy:
      "Combine luxury editorial design with direct-response marketing and strong visual storytelling.",

    solution:
      "Designed every issue, advertising campaigns, landing pages, digital assets and marketing materials.",

    result:
      "Built a recognizable publication that connects thousands of homeowners with home improvement professionals.",

    metrics: [
      {
        label: "Issues",
        value: "30+",
      },
      {
        label: "Advertisers",
        value: "250+",
      },
      {
        label: "Distribution",
        value: "South Florida",
      },
      {
        label: "Role",
        value: "Creative Director",
      },
    ],
  },
  ];export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}