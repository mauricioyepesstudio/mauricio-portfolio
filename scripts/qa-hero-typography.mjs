import { chromium } from "playwright";

const baseUrl = process.env.QA_URL ?? "http://localhost:3002/";

const viewports = [
  { name: "390", width: 390, height: 844 },
  { name: "430", width: 430, height: 932 },
  { name: "768", width: 768, height: 1024 },
  { name: "1024", width: 1024, height: 900 },
  { name: "1440", width: 1440, height: 900 },
];

const browser = await chromium.launch();
const page = await browser.newPage();
const results = [];

for (const vp of viewports) {
  await page.setViewportSize({ width: vp.width, height: vp.height });
  await page.goto(baseUrl, { waitUntil: "networkidle", timeout: 60000 });

  const metrics = await page.evaluate(() => {
    const header = document.querySelector("header");
    const nav = header?.querySelector("nav");
    const wordmark = header?.querySelector('a[aria-label="Mauricio Yepes — Home"] span span');
    const hamburger = header?.querySelector('button[aria-label*="navigation"]');
    const section = document.querySelector("section");
    const eyebrow = section?.querySelector("span.uppercase");
    const h1 = section?.querySelector("h1");
    const scriptLine = h1?.querySelector(".font-serif.italic.text-gold");
    const sansLines = h1 ? Array.from(h1.querySelectorAll("span")).filter((s) => !s.classList.contains("font-serif")) : [];

    const navRect = nav?.getBoundingClientRect();
    const eyebrowRect = eyebrow?.getBoundingClientRect();
    const h1Rect = h1?.getBoundingClientRect();
    const wordmarkRect = wordmark?.getBoundingClientRect();
    const hamburgerRect = hamburger?.getBoundingClientRect();

    const wordmarkStyle = wordmark ? getComputedStyle(wordmark) : null;

    return {
      navToEyebrow: navRect && eyebrowRect ? Math.round(eyebrowRect.top - navRect.bottom) : null,
      eyebrowToHeadline: eyebrowRect && h1Rect ? Math.round(h1Rect.top - eyebrowRect.bottom) : null,
      headlineVisibleWithoutScroll: h1Rect ? h1Rect.bottom <= window.innerHeight : null,
      wordmarkFontSize: wordmarkStyle?.fontSize ?? null,
      wordmarkFontWeight: wordmarkStyle?.fontWeight ?? null,
      wordmarkColor: wordmarkStyle?.color ?? null,
      scriptPhrase: scriptLine?.textContent?.trim() ?? null,
      wordmarkWidth: wordmarkRect ? Math.round(wordmarkRect.width) : null,
      hamburgerLeft: hamburgerRect ? Math.round(hamburgerRect.left) : null,
      wordmarkRight: wordmarkRect ? Math.round(wordmarkRect.right) : null,
      overlapWithHamburger: wordmarkRect && hamburgerRect ? wordmarkRect.right > hamburgerRect.left - 8 : false,
      overflow: document.documentElement.scrollWidth > window.innerWidth + 1,
      sansLineCount: sansLines.length,
    };
  });

  results.push({ viewport: vp.name, metrics });
}

console.log(JSON.stringify(results, null, 2));
await browser.close();
