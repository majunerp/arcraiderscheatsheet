import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  async rewrites() {
    return [
      { source: "/maps/:slug", destination: "/map/:slug" },
      { source: "/maps", destination: "/map" },
    ];
  },
};

export default nextConfig;
