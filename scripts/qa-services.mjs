import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { setTimeout as delay } from "node:timers/promises";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.QA_PLAYWRIGHT_MODULE || "playwright");
const origin = "http://127.0.0.1:3021";
const server = spawn(process.execPath, ["node_modules/next/dist/bin/next", "start", "--hostname", "127.0.0.1", "--port", "3021"], { stdio: "inherit" });
let browser;
try {
  let ready = false;
  for (let i = 0; i < 100; i++) {
    if (server.exitCode !== null) throw Error("Server exited");
    try { ready = (await fetch(origin + "/services")).ok; } catch {}
    if (ready) break;
    await delay(300);
  }
  assert.ok(ready);
  browser = await chromium.launch();
  for (const width of [360,390,430,768,1024,1280,1440,1920]) {
    const page = await browser.newPage({ viewport: { width, height: 1000 }, reducedMotion: "reduce" });
    const errors = [];
    page.on("pageerror", e => errors.push(e.message));
    await page.route("**/api/**", r => r.abort());
    assert.equal((await page.goto(origin + "/services", { waitUntil: "networkidle" })).status(), 200);
    await page.evaluate(() => document.fonts.ready);
    assert.equal(await page.locator("h1").count(), 1);
    assert.equal(await page.locator('section[aria-labelledby="capabilities-heading"] article').count(), 10);
    assert.equal(await page.locator('section[aria-labelledby="plans-heading"] article').count(), 4);
    for (const name of ["Start", "Renew", "Run", "Build"]) assert.equal(await page.getByRole("heading", { level: 3, name, exact: true }).count(), 1);
    for (const href of ["/evolusa", "/portfolio/resource-living", "/belong"]) assert.equal(await page.locator(`section[aria-labelledby="plans-heading"] a[href="${href}"]`).count(), 1);
    assert.equal(await page.locator('a[href="/resume"]').filter({ hasText: "View resume" }).count(), 1);
    assert.ok(await page.locator("main").evaluate(e => e.scrollWidth <= innerWidth));
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    assert.equal(await page.locator('section[aria-labelledby="capabilities-heading"] a[href^="/contact?topic="]').count(), 10);
    assert.equal(await page.locator('section[aria-labelledby="pilot-heading"] a[href="/contact?topic=pilot"]').count(), 1);
    const cta = page.getByRole("link", { name: "Discuss a launch" });
    await cta.click();
    await page.waitForURL("**/contact?topic=start");
    assert.equal(await page.locator("form").count(), 1);
    await page.waitForFunction(() => document.querySelector("#topic")?.value === "start");
    assert.deepEqual(errors, []);
    console.log("Services responsive + contact navigation PASS", width);
    await page.close();
  }
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, reducedMotion: "reduce" });
  await page.goto(origin + "/portfolio/resource-living", { waitUntil: "domcontentloaded" });
  await page.locator('nav[aria-label="Campaign menu"] a').first().waitFor();
  const order = await page.locator('nav[aria-label="Campaign menu"] a').evaluateAll(a => a.map(e => e.getAttribute("href")));
  assert.deepEqual(order, ["#broward-palm-beach-campaign", "#get-3-free-estimates", "#pool-leads"]);
  for (const id of order) assert.equal(await page.locator(id).count(), 1);
  const sectionOrder = await page.locator('article[id]').evaluateAll(a => a.map(e => "#"+e.id).filter(id => ["#broward-palm-beach-campaign","#get-3-free-estimates","#pool-leads"].includes(id)));
  assert.deepEqual(sectionOrder, order);
  const xml = await (await fetch(origin + "/sitemap.xml")).text();
  assert.equal(xml.split("/services</loc>").length - 1, 1);
  await page.goto(origin, { waitUntil: "domcontentloaded" });
  assert.equal(await page.locator('main a[href="/services"]').count(), 1);
  await page.close();
  console.log("Campaign menu + section order, home discovery and sitemap PASS");
} finally {
  await browser?.close();
  server.kill();
}
