// Recorre todas las páginas del sitemap y comprueba que cada enlace interno responda
// (sin errores 4xx/5xx) y que los enlaces mailto/tel/WhatsApp tengan un formato válido.
// No visita enlaces externos ni envía formularios.
import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { setTimeout as delay } from "node:timers/promises";
const origin = process.env.QA_ORIGIN || "http://127.0.0.1:3022";
const local = !process.env.QA_ORIGIN;
const server = local ? spawn(process.execPath, ["node_modules/next/dist/bin/next", "start", "--hostname", "127.0.0.1", "--port", "3022"], { stdio: "inherit" }) : null;
try {
  let ready = false;
  for (let i = 0; i < 100 && !ready; i++) {
    if (server && server.exitCode !== null) throw Error("Server exited");
    try { ready = (await fetch(origin + "/")).ok; } catch {}
    if (!ready) await delay(300);
  }
  assert.ok(ready, "server not ready");
  const xml = await (await fetch(origin + "/sitemap.xml")).text();
  const pages = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => new URL(m[1]).pathname);
  assert.ok(pages.length > 5, "sitemap has too few pages");
  const internal = new Set(pages), special = new Set(), failures = [];
  for (const path of pages) {
    const res = await fetch(origin + path);
    if (res.status >= 400) { failures.push(`${path} -> ${res.status}`); continue; }
    const html = await res.text();
    for (const [, href] of html.matchAll(/<a[^>]+href="([^"]+)"/g)) {
      const h = href.replace(/&amp;/g, "&");
      if (h.startsWith("/") && !h.startsWith("//")) internal.add(h.split("#")[0].split("?")[0] || "/");
      else if (/^(mailto|tel):/.test(h) || /wa\.me\//.test(h)) special.add(h);
      else if (h === "#" || h === "") failures.push(`${path} has an empty link`);
    }
  }
  for (const path of internal) {
    const res = await fetch(origin + path, { redirect: "follow" });
    if (res.status >= 400) failures.push(`${path} -> ${res.status}`);
  }
  for (const h of special) {
    if (h.startsWith("mailto:")) { if (!/^mailto:[^@\s]+@[^@\s]+\.[a-z]{2,}/i.test(h)) failures.push(`bad mailto ${h}`); }
    else if (h.startsWith("tel:")) { if (!/^tel:\+?[\d\s()-]{7,}$/.test(h)) failures.push(`bad tel ${h}`); }
    else if (!/wa\.me\/\d{8,15}/.test(h)) failures.push(`bad WhatsApp link ${h}`);
  }
  // El formulario rechaza datos inválidos sin enviar nada.
  const bad = await fetch(origin + "/api/contact", { method: "POST", headers: { "content-type": "application/json" }, body: "{}" });
  if (bad.status !== 400) failures.push(`/api/contact invalid body -> ${bad.status}`);
  assert.deepEqual(failures, [], failures.join("\n"));
  console.log(`Links PASS: ${pages.length} pages, ${internal.size} internal paths, ${special.size} mailto/tel/WhatsApp links`);
} finally {
  server?.kill();
}
