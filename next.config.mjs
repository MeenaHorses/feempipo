/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    /** Allow `quality={88}` on `next/image` (e.g. YouTube thumbnails in Trending). */
    qualities: [70, 75, 88],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/vi/**",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
        pathname: "/vi/**",
      },
    ],
  },
};

export default nextConfig;
