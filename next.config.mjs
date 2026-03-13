/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // This tells Next.js: "Whenever a browser asks for a PNG, 
    // compress it and serve it as AVIF or WEBP instead!"
    formats: ['image/avif', 'image/webp'],
  },
};
export default nextConfig;