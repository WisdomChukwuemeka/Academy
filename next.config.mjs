/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats:['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000, // Forces aggressive caching (1 year)
  },
};
export default nextConfig;