import "server-only";

import fs from "node:fs";

export type Dimensions = { width: number; height: number };

const VIDEO_CONTAINER_EXTENSIONS = new Set([".mp4", ".mov", ".m4v"]);
const HEADER_READ_BYTES = 262144; // 256KB — enough for magic bytes plus typical JPEG metadata before the SOF marker

type ImageFormat = "png" | "gif" | "jpeg" | "webp" | "svg";

/** Identifies the real file format from its bytes, ignoring the (sometimes wrong) extension. */
function detectImageFormat(buffer: Buffer): ImageFormat | null {
  if (buffer.length >= 8 && buffer[0] === 0x89 && buffer[1] === 0x50 && buffer[2] === 0x4e && buffer[3] === 0x47) return "png";
  if (buffer.length >= 6 && buffer.toString("ascii", 0, 3) === "GIF") return "gif";
  if (buffer.length >= 3 && buffer[0] === 0xff && buffer[1] === 0xd8) return "jpeg";
  if (buffer.length >= 12 && buffer.toString("ascii", 0, 4) === "RIFF" && buffer.toString("ascii", 8, 12) === "WEBP") return "webp";
  const head = buffer.subarray(0, Math.min(buffer.length, 512)).toString("utf8").trimStart();
  if (head.startsWith("<?xml") || /^<svg[\s>]/i.test(head) || head.slice(0, 256).toLowerCase().includes("<svg")) return "svg";
  return null;
}

function readPngSize(buffer: Buffer): Dimensions | null {
  if (buffer.length < 24) return null;
  const width = buffer.readUInt32BE(16);
  const height = buffer.readUInt32BE(20);
  return width && height ? { width, height } : null;
}

function readGifSize(buffer: Buffer): Dimensions | null {
  if (buffer.length < 10) return null;
  const width = buffer.readUInt16LE(6);
  const height = buffer.readUInt16LE(8);
  return width && height ? { width, height } : null;
}

function readJpegSize(buffer: Buffer): Dimensions | null {
  if (buffer.length < 4 || buffer[0] !== 0xff || buffer[1] !== 0xd8) return null;
  let offset = 2;
  while (offset + 4 <= buffer.length) {
    if (buffer[offset] !== 0xff) {
      offset++;
      continue;
    }
    const marker = buffer[offset + 1];
    if (marker === 0xff) {
      offset++;
      continue;
    }
    if (marker === 0xd8 || marker === 0x01 || (marker >= 0xd0 && marker <= 0xd9)) {
      offset += 2;
      continue;
    }
    const segmentLength = buffer.readUInt16BE(offset + 2);
    const isSofMarker = marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc;
    if (isSofMarker) {
      if (offset + 9 > buffer.length) return null;
      const height = buffer.readUInt16BE(offset + 5);
      const width = buffer.readUInt16BE(offset + 7);
      return width && height ? { width, height } : null;
    }
    offset += 2 + segmentLength;
  }
  return null;
}

function readWebpSize(buffer: Buffer): Dimensions | null {
  if (buffer.length < 30) return null;
  const format = buffer.toString("ascii", 12, 16);
  if (format === "VP8 ") {
    const width = buffer.readUInt16LE(26) & 0x3fff;
    const height = buffer.readUInt16LE(28) & 0x3fff;
    return width && height ? { width, height } : null;
  }
  if (format === "VP8L") {
    const b = buffer.readUInt32LE(21);
    const width = (b & 0x3fff) + 1;
    const height = ((b >> 14) & 0x3fff) + 1;
    return width && height ? { width, height } : null;
  }
  if (format === "VP8X") {
    const width = (buffer[24] | (buffer[25] << 8) | (buffer[26] << 16)) + 1;
    const height = (buffer[27] | (buffer[28] << 8) | (buffer[29] << 16)) + 1;
    return width && height ? { width, height } : null;
  }
  return null;
}

function readSvgSize(buffer: Buffer): Dimensions | null {
  const text = buffer.toString("utf8", 0, Math.min(buffer.length, 4000));
  const viewBoxMatch = text.match(/viewBox=["']\s*[\d.-]+\s+[\d.-]+\s+([\d.]+)\s+([\d.]+)/i);
  if (viewBoxMatch) {
    const width = parseFloat(viewBoxMatch[1]);
    const height = parseFloat(viewBoxMatch[2]);
    if (width && height) return { width, height };
  }
  const widthMatch = text.match(/\swidth=["']([\d.]+)/i);
  const heightMatch = text.match(/\sheight=["']([\d.]+)/i);
  if (widthMatch && heightMatch) {
    const width = parseFloat(widthMatch[1]);
    const height = parseFloat(heightMatch[1]);
    if (width && height) return { width, height };
  }
  return null;
}

/** Walks an ISO-BMFF (mp4/mov) box tree looking for the video track's tkhd box, which carries its display width/height. */
function readIsoBmffVideoSize(buffer: Buffer): Dimensions | null {
  function walk(start: number, end: number, depth: number): Dimensions | null {
    if (depth > 16) return null;
    let offset = start;
    while (offset + 8 <= end) {
      let size = buffer.readUInt32BE(offset);
      const type = buffer.toString("ascii", offset + 4, offset + 8);
      let headerSize = 8;
      if (size === 1) {
        if (offset + 16 > end) break;
        const high = buffer.readUInt32BE(offset + 8);
        const low = buffer.readUInt32BE(offset + 12);
        size = high * 2 ** 32 + low;
        headerSize = 16;
      } else if (size === 0) {
        size = end - offset;
      }
      if (size < headerSize || offset + size > end) break;

      if (type === "moov" || type === "trak" || type === "mdia" || type === "minf" || type === "udta") {
        const result = walk(offset + headerSize, offset + size, depth + 1);
        if (result) return result;
      } else if (type === "tkhd") {
        const contentStart = offset + headerSize;
        if (contentStart < end) {
          const version = buffer[contentStart];
          const widthOffset = version === 1 ? contentStart + 96 : contentStart + 76;
          const heightOffset = widthOffset + 4;
          if (heightOffset + 4 <= end && heightOffset + 4 <= buffer.length) {
            const width = buffer.readUInt32BE(widthOffset) >>> 16;
            const height = buffer.readUInt32BE(heightOffset) >>> 16;
            if (width && height) return { width, height };
          }
        }
      }
      offset += size;
    }
    return null;
  }
  return walk(0, buffer.length, 0);
}

/**
 * Probes real dimensions from file content (not the filename extension — several source
 * assets carry a mismatched extension, e.g. WebP bytes saved as .png). Returns null rather
 * than throwing when a file can't be parsed, so callers can fall back gracefully.
 */
export function probeDimensions(absolutePath: string, extension: string): Dimensions | null {
  try {
    if (VIDEO_CONTAINER_EXTENSIONS.has(extension.toLowerCase())) {
      const buffer = fs.readFileSync(absolutePath);
      return readIsoBmffVideoSize(buffer);
    }

    const fd = fs.openSync(absolutePath, "r");
    let buffer: Buffer;
    try {
      const { size: fileSize } = fs.fstatSync(fd);
      const readSize = Math.min(HEADER_READ_BYTES, fileSize);
      buffer = Buffer.alloc(readSize);
      fs.readSync(fd, buffer, 0, readSize, 0);
    } finally {
      fs.closeSync(fd);
    }

    const format = detectImageFormat(buffer);
    if (format === "png") return readPngSize(buffer);
    if (format === "gif") return readGifSize(buffer);
    if (format === "jpeg") return readJpegSize(buffer);
    if (format === "webp") return readWebpSize(buffer);
    if (format === "svg") return readSvgSize(buffer);
    return null;
  } catch {
    return null;
  }
}
