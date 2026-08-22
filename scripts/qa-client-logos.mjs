import { chromium } from "playwright";
import path from "node:path";

const outDir = path.join(process.cwd(), "qa-screenshots");
const baseUrl = process.env.QA_URL ?? "http://localhost:3001/";

const viewports = [
  { name: "390", width: 390, height: 844 },
  { name: "768", width: 768, height: 1024 },
  { name: "1024", width: 1024, height: 900 },
  { name: "1440", width: 1440, height: 900 },
  { name: "1920", width: 1920, height: 1080 },
];

const browser = await chromium.launch();
const page = await browser.newPage();

for (const vp of viewports) {
  await page.setViewportSize({ width: vp.width, height: vp.height });
  await page.goto(baseUrl, { waitUntil: "networkidle", timeout: 60000 });
  await page.locator("#clients").scrollIntoViewIfNeeded();
  await page.waitForTimeout(800);
  await page.screenshot({
    path: path.join(outDir, `client-logos-${vp.name}.png`),
  });
}

await page.setViewportSize({ width: 1440, height: 900 });
await page.goto(baseUrl, { waitUntil: "networkidle" });
await page.locator("#clients").scrollIntoViewIfNeeded();
await page.waitForTimeout(800);

const broken = await page.evaluate(() => {
  const imgs = Array.from(document.querySelectorAll('#clients img'));
  return imgs
    .map((img) => ({
      alt: img.getAttribute("alt"),
      src: img.getAttribute("src"),
      naturalWidth: img.naturalWidth,
    }))
    .filter((item) => item.naturalWidth === 0);
});

console.log("broken_images", JSON.stringify(broken));

await browser.close();
