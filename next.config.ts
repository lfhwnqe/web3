import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  images: {
    unoptimized: true, // 如果使用了 Next.js Image 组件
  },
};

export default nextConfig;
