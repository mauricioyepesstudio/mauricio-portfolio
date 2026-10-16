import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { setTimeout as delay } from "node:timers/promises";
import { chromium } from "playwright";

// Public, production-built local pages only. No accounts, email or API writes.
const origin = "http://127.0.0.1:3016";
const server = spawn(process.execPath, ["node_modules/next/dist/bin/next", "start", "--hostname", "127.0.0.1", "--port", "3016"], {
  stdio: "inherit",
});
let browser;
const results = [];
try {
  let ready = false;
  for (let attempt = 0; attempt < 100; attempt++) {
    if (server.exitCode !== null) throw new Error("Production server exited before QA");
    try { ready = (await fetch(origin)).ok; } catch { /* Wait for startup only. */ }
    if (ready) break;
    await delay(300);
  }
  assert.ok(ready, "Production server did not become ready");
  browser = await chromium.launch();
  for (const reducedMotion of ["no-preference", "reduce"]) {
    for (const width of [360, 390, 430, 768, 1024, 1280, 1440, 1920]) {
      const page = await browser.newPage({ viewport: { width, height: 1000 }, reducedMotion });
      const errors = [];
      page.on("pageerror", error => errors.push(error.message));
      page.on("console", message => { if (message.type() === "error") errors.push(message.text()); });
      page.on("response", response => {
        if (response.url().startsWith(origin) && response.status() >= 400) errors.push(`HTTP ${response.status()} ${response.url()}`);
      });
      try {
        const response = await page.goto(origin, { waitUntil: "networkidle" });
        assert.equal(response.status(), 200);
        await page.evaluate(() => document.fonts.ready);
        await page.waitForTimeout(1800); // Let the existing entrance animation finish.
        const layout = await page.evaluate(() => {
          const hero = document.querySelector("main section");
          const heading = hero?.querySelector("h1");
          const range = document.createRange();
          if (heading) range.selectNodeContents(heading);
          const textRects = heading ? [...range.getClientRects()] : [];
          const links = [...(hero?.querySelectorAll("a") ?? [])];
          const images = [...(hero?.querySelectorAll("img") ?? [])];
          return {
            viewport: document.documentElement.clientWidth,
            scrollWidth: document.documentElement.scrollWidth,
            heading: heading?.textContent,
            headingFits: textRects.length > 0 && textRects.every(rect => rect.left >= -1 && rect.right <= innerWidth + 1),
            headingVisible: !!heading && Number(getComputedStyle(heading).opacity) > 0.9,
            heroImagesLoaded: images.length >= 2 && images.every(img => img.complete && img.naturalWidth > 0),
            heroLinksFit: links.length >= 2 && links.every(link => {
              const rect = link.getBoundingClientRect();
              return rect.width > 0 && rect.left >= -1 && rect.right <= innerWidth + 1 && rect.height >= 44;
            }),
          };
        });
        const services = page.locator('main section a[href="#services"]').first();
        await services.click();
        const serviceTarget = await page.locator("#services").count();
        await page.waitForFunction(() => {
          const rect = document.getElementById("services")?.getBoundingClientRect();
          return location.hash === "#services" && rect && rect.top >= -2 && rect.top < innerHeight;
        });
        if (width < 768) {
          const menu = page.getByRole("button", { name: "Open navigation" });
          await menu.focus();
          await page.keyboard.press("Enter");
          await page.getByRole("button", { name: "Close navigation" }).waitFor();
          await page.keyboard.press("Escape");
          await menu.waitFor();
          await menu.click();
        }
        await page.locator('header a[href="/contact"]:visible').first().click();
        await page.waitForURL(`${origin}/contact`);
        await page.waitForLoadState("networkidle");
        const contact = await page.evaluate(() => ({
          fits: document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1,
          hasForm: !!document.querySelector("form"),
          hasEmailFallback: !!document.querySelector('a[href^="mailto:"]'),
        }));
        const passed = layout.scrollWidth <= layout.viewport + 1 && layout.headingFits && layout.headingVisible &&
          layout.heroImagesLoaded && layout.heroLinksFit && serviceTarget === 1 && contact.fits && contact.hasForm && contact.hasEmailFallback && errors.length === 0;
        results.push({ width, reducedMotion, ...layout, serviceTarget, contact, errors, passed });
      } catch (error) {
        results.push({ width, reducedMotion, passed: false, error: String(error), errors });
      } finally { await page.close(); }
    }
  }
  console.log("HOME_RESPONSIVE_QA", JSON.stringify(results, null, 2));
  assert.equal(results.length, 16);
  assert.ok(results.every(result => result.passed), "Responsive/contact QA failed; inspect HOME_RESPONSIVE_QA above");
} finally {
  await browser?.close();
  server.kill("SIGTERM");
}
