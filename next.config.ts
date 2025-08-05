import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ This skips linting errors on Vercel build
  },
};

export default nextConfig;
