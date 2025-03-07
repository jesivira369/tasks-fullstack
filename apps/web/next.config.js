/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  env: {
    API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*", // Captura todas las llamadas a "/api"
        destination: "http://localhost:4000/api/:path*", // Redirige a tu backend en NestJS
      },
    ];
  },
};

module.exports = nextConfig;
