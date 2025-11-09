/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/nextjs-tour",
  assetPrefix: "/nextjs-tour",
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  distDir: "out"
}

module.exports = nextConfig
