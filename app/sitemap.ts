import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import type { MetadataRoute } from "next";
import { getProjects } from "@/lib/projects";
import { SITE_URL } from "@/lib/site";

function git(args: string[]): string {
  return execFileSync("git", args, {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "ignore"],
  }).trim();
}

// Commits at the edge of a shallow clone (as in Vercel builds) stand in for all
// older history, so their dates are not real modification dates.
function shallowBoundary(): Set<string> {
  try {
    const file = git(["rev-parse", "--git-path", "shallow"]);
    return new Set(readFileSync(file, "utf8").split("\n").filter(Boolean));
  } catch {
    return new Set();
  }
}

const SHALLOW = shallowBoundary();

/**
 * Last commit date touching any of the given paths. Returns undefined when the
 * real date isn't known (no git, or only the shallow boundary commit), so the
 * sitemap omits lastmod instead of claiming every page changed at build time.
 */
function lastCommitDate(paths: string[]): Date | undefined {
  try {
    const [hash, date] = git(["log", "-1", "--format=%H %cI", "--", ...paths]).split(" ");
    if (!hash || !date || SHALLOW.has(hash)) return undefined;
    return new Date(date);
  } catch {
    return undefined;
  }
}

const STATIC_ROUTES: { route: string; sources: string[] }[] = [
  { route: "", sources: ["app/page.tsx", "components/rge", "components/SelectedWork.tsx"] },
  { route: "/portfolio", sources: ["app/portfolio/page.tsx", "lib/projects"] },
  { route: "/about", sources: ["app/about/page.tsx"] },
  { route: "/resume", sources: ["app/resume/page.tsx", "public/resume.pdf"] },
  { route: "/contact", sources: ["app/contact/page.tsx"] },
  { route: "/evolusa", sources: ["app/evolusa/page.tsx"] },
  { route: "/belong", sources: ["app/belong/page.tsx"] },
  { route: "/real-group-entertainment", sources: ["app/real-group-entertainment/page.tsx"] },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = STATIC_ROUTES.map(({ route, sources }) => ({
    url: `${SITE_URL}${route}`,
    lastModified: lastCommitDate(sources),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const projectRoutes = getProjects().map((p) => ({
    url: `${SITE_URL}/portfolio/${p.slug}`,
    lastModified: lastCommitDate([
      `lib/case-studies/${p.slug}.ts`,
      `public/projects/${p.slug}`,
      "lib/projects/catalog.ts",
    ]),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes];
}
