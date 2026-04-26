import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/chiara-site",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
