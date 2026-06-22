import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    imageSizes: [32, 48, 64, 96, 118, 128, 150, 205, 242, 256, 384, 389],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "framerusercontent.com",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
