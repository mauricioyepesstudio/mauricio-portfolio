import { chromium } from "playwright";

const baseUrl = process.env.QA_URL ?? "http://localhost:3001/";

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

  const hero = await page.evaluate(() => {
    const section = document.querySelector("section");
    if (!section) return { error: "missing hero section" };

    const h1 = section.querySelector("h1");
    const portrait = section.querySelector('img[alt="Mauricio Yepes"]');
    const portfolio = Array.from(section.querySelectorAll("a")).find((a) =>
      a.textContent?.includes("View Portfolio")
    );
    const talk = Array.from(section.querySelectorAll("a")).find((a) =>
      a.textContent?.includes("Let's Talk")
    );

    if (!h1 || !portrait || !portfolio || !talk) {
      return { error: "missing hero elements" };
    }

    const h1Rect = h1.getBoundingClientRect();
    const portraitRect = portrait.getBoundingClientRect();
    const portfolioRect = portfolio.getBoundingClientRect();
    const talkRect = talk.getBoundingClientRect();

    return {
      orderOk:
        h1Rect.top < portraitRect.top &&
        portraitRect.top < portfolioRect.top &&
        portfolioRect.top <= talkRect.top,
      h1Top: Math.round(h1Rect.top),
      portraitTop: Math.round(portraitRect.top),
      ctaTop: Math.round(portfolioRect.top),
      portfolioMinHeight: Math.round(portfolioRect.height),
      gapImageToCta: Math.round(portfolioRect.top - portraitRect.bottom),
      overflow: document.documentElement.scrollWidth > window.innerWidth + 1,
    };
  });

  await page.locator("#clients").scrollIntoViewIfNeeded();

  const logos = await page.evaluate(() => {
    const wall = document.querySelector("#clients");
    if (!wall) return { error: "no clients section" };

    const imgs = Array.from(wall.querySelectorAll("img"));
    const textOnly = Array.from(wall.querySelectorAll("span")).filter(
      (span) =>
        span.textContent &&
        span.textContent.trim().length > 2 &&
        !span.closest("h2") &&
        !span.closest("p")
    );

    return {
      imgCount: imgs.length,
      alts: imgs.map((img) => img.getAttribute("alt")),
      textOnlyCount: textOnly.length,
      broken: imgs
        .filter((img) => img.naturalWidth === 0)
        .map((img) => img.getAttribute("alt")),
      overflow: document.documentElement.scrollWidth > window.innerWidth + 1,
    };
  });

  results.push({ viewport: vp.name, hero, logos });
}

console.log(JSON.stringify(results, null, 2));
await browser.close();
