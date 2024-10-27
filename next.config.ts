import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',  // 改回 standalone 以支持 API 路由
  images: {
    unoptimized: true, // 如果使用了 Next.js Image 组件
  },
  trailingSlash: true,
};

export default nextConfig;
