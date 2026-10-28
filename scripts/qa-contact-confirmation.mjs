import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { setTimeout as delay } from "node:timers/promises";
import { chromium } from "playwright";

// Production-built LOCAL UI. Every contact request is fulfilled/aborted here;
// never continue a route to the real API or mail provider.
const origin = "http://127.0.0.1:3017";
const server = spawn(process.execPath, ["node_modules/next/dist/bin/next", "start", "--hostname", "127.0.0.1", "--port", "3017"], { stdio: "inherit" });
const cases = [
  { name: "false", body: '{"success":false}' },
  { name: "malformed", body: "not JSON" },
  { name: "empty", body: "" },
  { name: "missing", body: "{}" },
  { name: "null", body: "null" },
  { name: "array", body: '[{"success":true}]' },
  { name: "string-true", body: '{"success":"true"}' },
  { name: "string-false", body: '{"success":"false"}' },
  { name: "network-abort", abort: true },
  { name: "HTTP-503", status: 503, body: '{"success":true}' },
  { name: "HTTP-500", status: 500, body: '{"success":true}' },
  { name: "confirmed", body: '{"success":true}', confirmed: true },
];
const draft = { name: "QA Draft", email: "draft@example.invalid", company: "QA only", budget: "5k-15k", topic: "pilot", message: "This is an intercepted browser test, never send it." };
const results = [];
let browser;
let observedWrites = 0;
let interceptedWrites = 0;
let escapedWrites = 0;
try {
  let ready = false;
  for (let attempt = 0; attempt < 100; attempt++) {
    if (server.exitCode !== null) throw new Error("Production server exited before QA");
    try { ready = (await fetch(origin)).ok; } catch { /* Startup only. */ }
    if (ready) break;
    await delay(300);
  }
  assert.ok(ready, "Production server did not become ready");
  browser = await chromium.launch();
  for (const width of [360, 1440]) {
    for (const scenario of cases) {
      const context = await browser.newContext({ viewport: { width, height: 1000 }, serviceWorkers: "block", reducedMotion: "reduce" });
      const errors = [];
      const consoleErrors = [];
      let attempts = 0;
      const gates = [];
      // Fail closed for every write, even outside /api, before it can leave.
      await context.route("**/*", async route => {
        const method = route.request().method();
        if (["GET", "HEAD"].includes(method) && !new URL(route.request().url()).pathname.startsWith("/api/")) {
          return route.continue();
        }
        if (route.request().url() !== `${origin}/api/contact`) {
          escapedWrites++;
          return route.abort("blockedbyclient");
        }
        if (method !== "POST") {
          escapedWrites++;
          return route.abort("blockedbyclient");
        }
        interceptedWrites++;
        attempts++;
        const attempt = attempts;
        const gate = gates[attempt - 1];
        assert.ok(gate, "Every contact attempt must have an explicit response gate");
        assert.deepEqual(route.request().postDataJSON(), draft);
        gate.intercepted = true;
        await gate.promise;
        if (attempt === 1 && scenario.abort) return route.abort("failed");
        return route.fulfill({ status: attempt > 1 ? 200 : scenario.status ?? 200, contentType: "application/json", body: attempt > 1 ? '{"success":true}' : scenario.body });
      });
      const page = await context.newPage();
      page.on("pageerror", error => errors.push(error.message));
      page.on("console", message => { if (message.type() === "error") consoleErrors.push(message.text()); });
      page.on("request", request => {
        if (!["GET", "HEAD"].includes(request.method())) {
          if (request.url() === `${origin}/api/contact`) observedWrites++;
          else escapedWrites++;
        }
      });
      async function submitWithKeyboard() {
        let release;
        const promise = new Promise(resolve => { release = resolve; });
        const gate = { promise, release, intercepted: false };
        gates.push(gate);
        const submit = page.getByRole("button", { name: "Send Message", exact: true });
        await submit.focus();
        assert.ok(await submit.evaluate(element => element === document.activeElement), "Submit must receive keyboard focus");
        await page.keyboard.press("Enter");
        for (let poll = 0; poll < 500 && !gate.intercepted; poll++) await delay(20);
        assert.ok(gate.intercepted, "Keyboard submit must reach the intercepted contact route");
        await page.locator('form[aria-busy="true"]').waitFor();
        assert.equal(await page.locator("form").getAttribute("aria-busy"), "true");
        assert.ok(await page.getByRole("button", { name: "Sending...", exact: true }).isDisabled());
        assert.equal(await page.getByRole("heading", { name: "Message sent.", exact: true }).count(), 0);
        gate.release();
      }
      try {
        await page.goto(`${origin}/contact`, { waitUntil: "networkidle" });
        await page.locator("form").waitFor();
        for (const field of ["name", "email", "company", "message"]) await page.locator(`#${field}`).fill(draft[field]);
        await page.locator("#budget").selectOption(draft.budget);
        await page.locator("#topic").selectOption(draft.topic);
        await submitWithKeyboard();
        if (!scenario.confirmed) {
          await page.getByRole("alert").filter({ hasText: "Something went wrong." }).waitFor();
          assert.equal(await page.locator("form").getAttribute("aria-busy"), "false");
          assert.equal(await page.getByText("Message sent.", { exact: true }).count(), 0);
          assert.equal(await page.evaluate(() => document.activeElement?.textContent?.trim() === "Message sent."), false);
          for (const field of ["name", "email", "company", "budget", "topic", "message"]) assert.equal(await page.locator(`#${field}`).inputValue(), draft[field]);
          assert.ok(await page.locator('form a[href="mailto:rgentertainmentmanagement@gmail.com"]').isVisible());
          assert.ok(await page.getByRole("button", { name: "Send Message", exact: true }).isEnabled());
          // A real second submit of the retained draft, with confirmed delivery.
          await submitWithKeyboard();
        }
        const successHeading = page.getByRole("heading", { name: "Message sent.", exact: true });
        await successHeading.waitFor();
        await page.waitForFunction(() => document.activeElement?.textContent?.trim() === "Message sent.");
        assert.equal(await successHeading.evaluate(element => element.tabIndex), -1);
        assert.ok(await successHeading.evaluate(element => element === document.activeElement));
        assert.equal(await page.locator("form").count(), 0, "Confirmed success must remove the editable draft");
        assert.equal(attempts, scenario.confirmed ? 1 : 2);
        assert.deepEqual(errors, [], "Unexpected client runtime exception");
        const unexpectedConsole = consoleErrors.filter(text => !(
          scenario.abort && text.includes("net::ERR_FAILED") ||
          scenario.status >= 500 && text.includes(String(scenario.status))
        ));
        assert.deepEqual(unexpectedConsole, [], "Unexpected browser console error");
        results.push({ width, scenario: scenario.name, attempts, passed: true, expectedNetworkErrors: consoleErrors });
      } catch (error) {
        results.push({ width, scenario: scenario.name, passed: false, error: String(error), errors, consoleErrors });
      } finally {
        for (const gate of gates) gate.release();
        await context.close();
      }
    }
  }
  console.log("CONTACT_CONFIRMATION_QA", JSON.stringify({ results, observedWrites, interceptedWrites, escapedWrites }, null, 2));
  assert.equal(escapedWrites, 0, "No writes outside contact interception are permitted");
  assert.equal(observedWrites, interceptedWrites, "Every contact write must be intercepted");
  assert.equal(results.length, cases.length * 2);
  assert.ok(results.every(result => result.passed), "Contact confirmation QA failed");
} finally {
  await browser?.close();
  server.kill("SIGTERM");
}
