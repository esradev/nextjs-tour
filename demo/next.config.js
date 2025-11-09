/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === "production"
const isExport = process.env.NEXT_BUILD_MODE === "export"

const nextConfig = {
  // Only use export and basePath for production builds
  ...(isProduction && isExport
    ? {
        output: "export",
        basePath: "/nextjs-tour",
        assetPrefix: "/nextjs-tour",
        trailingSlash: true
      }
    : {}),
  images: {
    unoptimized: true
  },
  typescript: {
    // Skip type checking during build for demo
    ignoreBuildErrors: true
  }
}

module.exports = nextConfig
