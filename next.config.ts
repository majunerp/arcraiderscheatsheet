import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/maps/:slug", destination: "/map/:slug" },
      { source: "/maps", destination: "/map" },
    ];
  },
};

export default nextConfig;
