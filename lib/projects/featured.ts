/** Flagship case studies — deep curated storytelling. Order reflects portfolio priority. */
export const FEATURED_CASE_STUDY_SLUGS = [
  "resource-living",
  "microbeau",
  "getlost",
  "evenflo",
] as const;

export type FeaturedCaseStudySlug = (typeof FEATURED_CASE_STUDY_SLUGS)[number];

export function isFeaturedCaseStudy(slug: string): slug is FeaturedCaseStudySlug {
  return (FEATURED_CASE_STUDY_SLUGS as readonly string[]).includes(slug);
}
