/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Allow backend API calls from the browser
  env: {
    NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
    NEXT_PUBLIC_WS_URL: process.env.NEXT_PUBLIC_WS_URL,
  },

  // Needed for Codespaces + Vercel compatibility
  experimental: {
    serverActions: true,
  },
};
