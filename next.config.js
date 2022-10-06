/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: 'build',
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: './',
}

module.exports = nextConfig
