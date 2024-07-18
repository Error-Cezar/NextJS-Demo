/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

// COMMENT THE CONTENT OF NEXTCONFIG FOR LOCAL USAGE
const nextConfig = {
  reactStrictMode: isProd ? true : false,
  basePath: isProd ? '/NextJS-Demo' : '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || ''
}
// COMMENT THE CONTENT OF NEXTCONFIG FOR LOCAL USAGE

export default nextConfig;