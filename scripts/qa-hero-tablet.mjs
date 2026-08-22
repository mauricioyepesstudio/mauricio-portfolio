import { chromium } from "playwright";

const baseUrl = process.env.QA_URL ?? "http://localhost:3005/";
const widths = [700, 768, 820, 900, 1024];

const browser = await chromium.launch();
const page = await browser.newPage();
const results = [];

for (const width of widths) {
  await page.setViewportSize({ width, height: 900 });
  await page.goto(baseUrl, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForSelector('img[alt="Mauricio Yepes"]', { timeout: 30000 });
  await page.waitForTimeout(1500);

  const result = await page.evaluate(() => {
    const section = document.querySelector("section");
    const portrait = section?.querySelector('img[alt="Mauricio Yepes"]');
    const h1 = section?.querySelector("h1");
    const eyebrow = section?.querySelector("span.uppercase");
    const wordmark = document.querySelector('a[aria-label="Mauricio Yepes — Home"] span span');
    const portfolio = [...document.querySelectorAll("a")].find((a) =>
      a.textContent?.includes("View Portfolio")
    );

    const portraitRect = portrait?.getBoundingClientRect();
    const h1Rect = h1?.getBoundingClientRect();
    const portfolioRect = portfolio?.getBoundingClientRect();

    const hero = document.querySelector("main > section");
    const heroRect = hero?.getBoundingClientRect();

    return {
      overflow: document.documentElement.scrollWidth > window.innerWidth + 1,
      heroOverflow: hero ? hero.scrollWidth > window.innerWidth + 1 : null,
      scrollWidth: document.documentElement.scrollWidth,
      portraitWidth: portraitRect ? Math.round(portraitRect.width) : null,
      portraitRight: portraitRect ? Math.round(portraitRect.right) : null,
      portraitClipped: portraitRect
        ? portraitRect.right <= window.innerWidth + 1 &&
          portraitRect.left >= -1
        : null,
      headlineBeforePortrait:
        h1Rect && portraitRect ? h1Rect.bottom <= portraitRect.top + 2 : null,
      ctaAfterPortrait:
        portfolioRect && portraitRect
          ? portfolioRect.top >= portraitRect.bottom - 4
          : null,
      goldWordmark: wordmark
        ? getComputedStyle(wordmark).color === "rgb(176, 141, 87)"
        : false,
      scriptAccent: Boolean(
        section?.querySelector(".font-serif.italic.text-gold")
      ),
      eyebrowPresent: Boolean(eyebrow),
    };
  });

  results.push({ width, ...result });
}

console.log(JSON.stringify(results, null, 2));
await browser.close();
