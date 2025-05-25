/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',  // Static HTML export
  images: {
    domains: [],
    unoptimized: true,
  },
  // Configure basePath and assetPrefix for GitHub Pages
  // Uncomment and update these when you know your repository name
  basePath: '/eklavya-software-technology',
  assetPrefix: '/eklavya-software-technology',
}

module.exports = nextConfig