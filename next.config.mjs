/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000, // 1 year aggressive caching
  },
  async rewrites() {
    return [
      {
        source: "/api/clerk/:path*",
        destination: "https://clerk.scippra.com/:path*",
      },
    ];
  },
};

export default nextConfig;


