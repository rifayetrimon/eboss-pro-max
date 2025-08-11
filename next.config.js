/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    output: 'standalone',
    basePath: '/eboss-pro-max',
    assetPrefix: '/eboss-pro-max/',
};

module.exports = nextConfig;
