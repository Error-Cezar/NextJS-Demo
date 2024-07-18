// NO MORE COMMENTING FOR LOCAL USE (proud of that)

/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: isProd ? true : false,
  basePath: isProd ? '/NextJS-Demo' : '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || ''
}

export default nextConfig;