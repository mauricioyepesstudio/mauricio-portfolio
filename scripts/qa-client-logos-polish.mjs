import { chromium } from "playwright";
import path from "node:path";

const outDir = path.join(process.cwd(), "qa-screenshots");
const baseUrl = process.env.QA_URL ?? "http://localhost:3001/";

const viewports = [
  { name: "390", width: 390, height: 844 },
  { name: "430", width: 430, height: 932 },
  { name: "768", width: 768, height: 1024 },
  { name: "1024", width: 1024, height: 900 },
  { name: "1440", width: 1440, height: 900 },
  { name: "1920", width: 1920, height: 1080 },
];

const browser = await chromium.launch();
const page = await browser.newPage();
const results = [];

for (const vp of viewports) {
  await page.setViewportSize({ width: vp.width, height: vp.height });
  await page.goto(baseUrl, { waitUntil: "networkidle", timeout: 60000 });

  await page.locator("#clients").scrollIntoViewIfNeeded();
  await page.waitForTimeout(900);

  const metrics = await page.evaluate(() => {
    const section = document.querySelector("#clients");
    if (!section) return { error: "missing #clients" };

    const heading = section.querySelector("h2");
    const prev = section.previousElementSibling;
    const wall = section.querySelector('[role="list"]');
    const cells = wall ? Array.from(wall.querySelectorAll('[role="listitem"]')) : [];
    const imgs = wall ? Array.from(wall.querySelectorAll("img")) : [];
    const textOnly = wall
      ? Array.from(wall.querySelectorAll("span")).filter(
          (span) =>
            span.textContent &&
            span.textContent.trim().length > 2 &&
            !span.closest("h2") &&
            !span.closest("p")
        )
      : [];

    const sectionRect = section.getBoundingClientRect();
    const headingRect = heading?.getBoundingClientRect();
    const prevRect = prev?.getBoundingClientRect();

    const gridStyles = wall ? getComputedStyle(wall) : null;
    const cellRects = cells.map((cell) => {
      const rect = cell.getBoundingClientRect();
      const img = cell.querySelector("img");
      const imgRect = img?.getBoundingClientRect();
      return {
        height: Math.round(rect.height),
        imgWidth: imgRect ? Math.round(imgRect.width) : 0,
        imgHeight: imgRect ? Math.round(imgRect.height) : 0,
        imgRatio: imgRect ? Number((imgRect.width / rect.width).toFixed(2)) : 0,
      };
    });

    return {
      topGapFromPrev: prevRect && sectionRect ? Math.round(sectionRect.top - prevRect.bottom) : null,
      headingHasGoldScript: Boolean(
        heading?.querySelector(".font-serif.italic.text-gold")
      ),
      cellCount: cells.length,
      imgCount: imgs.length,
      alts: imgs.map((img) => img.getAttribute("alt")),
      textOnlyCount: textOnly.length,
      broken: imgs
        .filter((img) => img.naturalWidth === 0)
        .map((img) => img.getAttribute("alt")),
      overflow: document.documentElement.scrollWidth > window.innerWidth + 1,
      gridCols: gridStyles?.gridTemplateColumns ?? null,
      cellMetrics: cellRects,
      hasSeafood: imgs.some((img) =>
        img.getAttribute("alt")?.includes("Seafood Delight")
      ),
    };
  });

  await page.screenshot({
    path: path.join(outDir, `client-logos-${vp.name}.png`),
  });

  results.push({ viewport: vp.name, metrics });
}

console.log(JSON.stringify(results, null, 2));
await browser.close();
