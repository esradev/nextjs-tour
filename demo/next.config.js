/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/nextjs-tour",
  assetPrefix: "/nextjs-tour",
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  distDir: "out",
  typescript: {
    // Skip type checking during build for demo
    ignoreBuildErrors: true
  },
  eslint: {
    // Skip ESLint during build for demo
    ignoreDuringBuilds: true
  }
}

module.exports = nextConfig
