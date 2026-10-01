import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: projectRoot,

  images: {
    formats: ["image/avif", "image/webp"],
  },

  compress: true,

  eslint: {
    ignoreDuringBuilds: true,
  },

  // Anonymous case study: serve its source folder under a neutral path so the
  // client's name never appears in a public URL (requires written permission).
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/projects/south-florida-home-magazine/:path*",
          destination: "/projects/resource-living/:path*",
        },
      ],
    };
  },
};

export default nextConfig;
