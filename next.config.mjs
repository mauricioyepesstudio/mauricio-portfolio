/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    formats: ["image/avif", "image/webp"],
  },

  compress: true,

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;