import type { MetadataRoute } from "next";
import { getProjects } from "@/lib/projects";

const siteUrl = "https://mauricio-portfolio-v2.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getProjects();
  const staticRoutes = ["", "/portfolio", "/about", "/resume", "/contact", "/evolusa", "/belong", "/real-group-entertainment"].map(
    (route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })
  );

  const projectRoutes = projects.map((p) => ({
    url: `${siteUrl}/portfolio/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes];
}
