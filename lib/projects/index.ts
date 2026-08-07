import resourceLiving from "./resource-living";
import microbeau from "./microbeau";
import evenflo from "./evenflo";
import getlost from "./getlost";
import seafoodDelight from "./seafood-delight";

export type ProjectSection = {
  title: string;
  description?: string;
  images: string[];
};

export type ProjectVideo = {
  src: string;
  poster?: string;
  caption?: string;
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

  videos?: ProjectVideo[];

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
  resourceLiving,
  microbeau,
  getlost,
  evenflo,
  seafoodDelight,
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export default projects;