import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',  // 改成 export 因为日志显示在生成静态页面
  images: {
    unoptimized: true, // 如果使用了 Next.js Image 组件
  },
  trailingSlash: true,
};

export default nextConfig;
