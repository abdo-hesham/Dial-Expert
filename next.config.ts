import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    imageSizes: [32, 48, 64, 96, 118, 128, 150, 205, 242, 256, 384, 389],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "framerusercontent.com",
      },
    ],
  },
};

export default nextConfig;
