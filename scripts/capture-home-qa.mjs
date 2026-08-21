import { chromium } from "playwright";
import path from "node:path";

const outDir = path.join(process.cwd(), "qa-screenshots");
const url = "http://localhost:3001/";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(url, { waitUntil: "networkidle" });
await page.locator('[aria-label="Professional highlights"]').scrollIntoViewIfNeeded();
await page.waitForTimeout(700);
await page.screenshot({ path: path.join(outDir, "home-desktop-stats-v2.png") });

await page.setViewportSize({ width: 375, height: 812 });
await page.goto(url, { waitUntil: "networkidle" });
await page.locator('[aria-label="Professional highlights"]').scrollIntoViewIfNeeded();
await page.waitForTimeout(700);
await page.screenshot({ path: path.join(outDir, "home-mobile-stats-v2.png") });

await page.setViewportSize({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: "networkidle" });
await page.locator("#clients").scrollIntoViewIfNeeded();
await page.waitForTimeout(700);
await page.screenshot({ path: path.join(outDir, "home-desktop-logos-v2.png"), fullPage: false });

await browser.close();
