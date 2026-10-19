import "server-only";
import { getProject } from "@/lib/projects";

export function getStudioCreative(slug: string) {
  if (slug === "owner-statements") return {
    strategy: "Reduce manual month-end work through traceable imports, reviewed exceptions and clear owner reports. Develop a repeatable subscription product with separate owner and administrator experiences.",
    cover: "/studio/owner-statements/workflow.svg",
    images: ["/studio/owner-statements/workflow.svg"],
  };
  if (slug === "evolusa") return {
    strategy: "Connect Spanish-speaking communities with relevant professionals through a clear next step, supported by a recognizable identity and educational content.",
    cover: "/brand/live-product/evolusa-hero-creative.webp",
    images: ["/brand/evolusa/EVOLUSA_Profile_1080x1080.png", "/brand/live-product/linkedin-post-evolusa.png", "/brand/live-product/evolusa-live-homepage.png"],
  };
  if (slug === "belong") return {
    strategy: "Build a mission-first community around shared projects, participation and visible progress. Carry the B symbol and community message consistently across identity, campaigns and product.",
    cover: "/projects/real-group-entertainment/campaigns/02-belong-brand/hero/belong-community-banner.jpg",
    images: getProject("real-group-entertainment")?.campaigns.find(c => c.slug.includes("belong-brand"))?.sections.flatMap(s => s.assets.filter(a => a.kind !== "video").map(a => a.src)) ?? [],
  };
  if (!["personal-cfo", "real-group-entertainment"].includes(slug)) return null;
  const project = getProject(slug);
  if (!project) return null;
  const campaigns = slug === "real-group-entertainment" ? [] : project.campaigns;
  const images = [...(project.brandAssets ?? []).map(a => a.src), ...campaigns.flatMap(c => c.sections.flatMap(s => s.assets.filter(a => a.kind !== "video").map(a => a.src))), ...(project.supportingWork ?? []).flatMap(s => s.assets.filter(a => a.kind !== "video").map(a => a.src))];
  return { strategy: project.strategy, cover: project.heroImage, images: [...new Set(images)] };
}
