/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    /** Allow `quality={88}` on `next/image` (e.g. YouTube thumbnails in Trending). */
    qualities: [70, 75, 80, 88],
    formats: ["image/avif", "image/webp"],
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
  async headers() {
    const longCache = [
      { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
    ];
    return [
      { source: "/images/:path*", headers: longCache },
      { source: "/videos/:path*", headers: longCache },
      { source: "/logo192.png", headers: longCache },
      { source: "/logo512.png", headers: longCache },
      { source: "/favicon.ico", headers: longCache },
      {
        source: "/og-image.jpg",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" },
        ],
      },
    ];
  },
};

export default nextConfig;
