import fs from "node:fs";
import path from "node:path";
import { Resvg } from "@resvg/resvg-js";
import sharp from "sharp";

const root = process.cwd();
const outputPath = path.join(root, "public/logos/clients/seafood-delight.png");

const sourceCandidates = [
  path.join(root, "Untitled-1-04.png"),
  path.join(root, "scripts/assets/Untitled-1-04.png"),
  path.join(root, "public/logos/clients/source/Untitled-1-04.png"),
  path.join(
    root,
    "public/projects/seafood-delight/logo/seafood-delight-logo.svg"
  ),
];

function isPng(buffer) {
  return (
    buffer.length >= 8 &&
    buffer[0] === 0x89 &&
    buffer[1] === 0x50 &&
    buffer[2] === 0x4e &&
    buffer[3] === 0x47
  );
}

function loadSourceBuffer() {
  for (const candidate of sourceCandidates) {
    if (!fs.existsSync(candidate)) continue;

    const raw = fs.readFileSync(candidate);

    if (candidate.endsWith(".svg") && !isPng(raw)) {
      const resvg = new Resvg(raw, {
        fitTo: { mode: "width", value: 1400 },
        background: "#ffffff",
      });
      return {
        buffer: resvg.render().asPng(),
        source: candidate,
      };
    }

    return {
      buffer: raw,
      source: candidate,
    };
  }

  throw new Error("Seafood Delight source asset not found.");
}

async function toWhiteTransparentLogo(inputBuffer) {
  const { data, info } = await sharp(inputBuffer)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const pixels = new Uint8Array(data.length);
  const threshold = 24;

  for (let i = 0; i < data.length; i += info.channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const distance = Math.max(255 - r, 255 - g, 255 - b);

    if (distance <= threshold) {
      pixels[i] = 255;
      pixels[i + 1] = 255;
      pixels[i + 2] = 255;
      pixels[i + 3] = 0;
      continue;
    }

    const alpha = Math.min(255, Math.round((distance - threshold) * 2.4));
    pixels[i] = 255;
    pixels[i + 1] = 255;
    pixels[i + 2] = 255;
    pixels[i + 3] = alpha;
  }

  return sharp(pixels, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4,
    },
  })
    .trim()
    .png()
    .toBuffer();
}

const { buffer, source } = loadSourceBuffer();
const processed = await toWhiteTransparentLogo(buffer);

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, processed);

console.log(`source: ${source}`);
console.log(`output: ${outputPath}`);
console.log(`bytes: ${processed.length}`);
