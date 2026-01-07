import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: process.env.PAGES_BASE_PATH,
  distDir: "dist",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
