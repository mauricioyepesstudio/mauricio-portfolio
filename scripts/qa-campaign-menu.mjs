import fs from "node:fs";
import path from "node:path";

const directory = path.join(process.cwd(), ".next/server/app/portfolio");
let checked = 0;
for (const name of fs.readdirSync(directory).filter((value) => value.endsWith(".html"))) {
  const html = fs.readFileSync(path.join(directory, name), "utf8");
  const menus = [...html.matchAll(/<nav\b[^>]*aria-label="Campaign menu"[^>]*>([\s\S]*?)<\/nav>/g)];
  if (menus.length > 1) throw new Error(`Repeated menu: ${name}`);
  if (!menus.length) continue;
  const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]));
  const links = [...menus[0][1].matchAll(/href="#([^"]+)"/g)].map((match) => match[1]);
  const choices = [...menus[0][1].matchAll(/<option value="([^"]+)"/g)].map((match) => match[1]).filter(Boolean);
  if (!links.length || links.join("|") !== choices.join("|")) throw new Error(`Menu options differ: ${name}`);
  if (new Set(links).size !== links.length) throw new Error(`Repeated chapter: ${name}`);
  for (const target of links) if (!ids.has(target)) throw new Error(`Broken anchor ${target}: ${name}`);
  checked++;
  console.log(`${name}: ${links.length} campaign links and mobile options verified`);
}
if (!checked) throw new Error("No rendered campaign menus found");
console.log(`${checked} project menus verified against the production build.`);
