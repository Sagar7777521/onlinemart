/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: ["http://localhost:3000/*"],
  },
};

export default nextConfig;
