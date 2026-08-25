import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicRoot = path.join(root, "public");

const flagshipFiles = {
  "resource-living": "lib/case-studies/resource-living.ts",
  microbeau: "lib/case-studies/microbeau.ts",
  evenflo: "lib/case-studies/evenflo.ts",
  getlost: "lib/case-studies/getlost.ts",
};

function parseNumberList(source) {
  return [...source.matchAll(/\d+/g)].map((match) => Number(match[0]));
}

function expandTemplateLiterals(text) {
  const paths = new Set();

  for (const match of text.matchAll(/"(\/projects\/[^"]+)"/g)) {
    paths.add(match[1]);
  }

  for (const match of text.matchAll(/'(\/projects\/[^']+)'/g)) {
    paths.add(match[1]);
  }

  for (const match of text.matchAll(/`(\/projects\/[^`]+)`/g)) {
    const template = match[1];
    if (!template.includes("${n}")) {
      paths.add(template);
    }
  }

  for (const match of text.matchAll(/const\s+(\w+)\s*=\s*\[([^\]]+)\]\.map\(\(n\)\s*=>\s*\(\{[\s\S]*?src:\s*`([^`]+)`/g)) {
    for (const n of parseNumberList(match[2])) {
      paths.add(match[3].replace(/\$\{n\}/g, String(n)));
    }
  }

  for (const match of text.matchAll(/(?:\.{3})?\[([^\]]+)\]\.map\(\(n\)\s*=>\s*\(\{[\s\S]*?src:\s*`([^`]+)`/g)) {
    for (const n of parseNumberList(match[1])) {
      paths.add(match[2].replace(/\$\{n\}/g, String(n)));
    }
  }

  return [...paths].map((p) => p.replace(/^\/projects\//, ""));
}

function exists(rel) {
  return fs.existsSync(path.join(publicRoot, "projects", rel));
}

let failed = false;

for (const [project, filePath] of Object.entries(flagshipFiles)) {
  const text = fs.readFileSync(path.join(root, filePath), "utf8");
  const refs = expandTemplateLiterals(text).filter((rel) => rel.startsWith(project));

  const missing = refs.filter((rel) => !exists(rel)).sort();
  console.log(`${project.toUpperCase()}: ${refs.length} refs, ${missing.length} broken`);
  if (missing.length) {
    failed = true;
    for (const item of missing) console.log(`  MISSING  ${item}`);
  } else {
    console.log("  BROKEN REFERENCES: 0");
  }
}

process.exit(failed ? 1 : 0);
