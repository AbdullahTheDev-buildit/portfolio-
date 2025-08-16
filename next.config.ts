import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,  //disables Next.js optimization for Netlify
  },


};

export default nextConfig;
