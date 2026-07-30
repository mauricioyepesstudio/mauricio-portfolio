import resourceLiving from "./resource-living";
import microbeau from "./microbeau";
import fkIrons from "./fk-irons";
import evenflo from "./evenflo";
import getlost from "./getlost";
import branding from "./branding";
import biker from "./biker";
import bloom from "./bloom";
import carWash from "./car-wash";
import cinemark from "./cinemark";
import claveEstrategica from "./clave-estrategica";
import leciel from "./leciel";
import loana from "./loana";
import onebike from "./onebike";
import pizzaTacum from "./pizza-tacum";
import realGroupEntertainment from "./real-group-entertainment";
import seafoodDelight from "./seafood-delight";
import stamina from "./stamina";
import stiloGroup from "./stilogroup";

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
  resourceLiving,
  microbeau,
  fkIrons,
  evenflo,
  getlost,
  branding,
  biker,
  bloom,
  carWash,
  cinemark,
  claveEstrategica,
  leciel,
  loana,
  onebike,
  pizzaTacum,
  realGroupEntertainment,
  seafoodDelight,
  stamina,
  stiloGroup,
];

console.log("==================================");
console.log("PROJECT COUNT:", projects.length);
console.log(
  "PROJECT SLUGS:",
  projects.map((p) => p.slug)
);
console.log("==================================");

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export default projects;