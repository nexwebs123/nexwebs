import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["pbs.twimg.com"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
