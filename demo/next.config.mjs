/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production"

const nextConfig = {
  // Static export for GitHub Pages
  output: "export",
  trailingSlash: true,
  // Ensure all asset URLs work when served from a subpath like /nextjs-tour
  basePath: isProd ? "/nextjs-tour" : undefined,
  assetPrefix: isProd ? "/nextjs-tour/" : undefined,
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    unoptimized: true
  }
}

export default nextConfig
