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

  // The Resource Living case ran anonymously under this slug until 2026-10-09;
  // keep old links working.
  async redirects() {
    return [
      {
        source: "/portfolio/south-florida-home-magazine",
        destination: "/portfolio/resource-living",
        permanent: true,
      },
    ];
  },

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
