// next.config.js
const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    basePath: isProd ? '/eboss-pro-max' : '',
    trailingSlash: true,
    output: 'standalone',
    images: {
        unoptimized: true, // Keep this for static export
    },
    env: {
        NEXT_PUBLIC_BASE_URL: isProd ? 'https://devphp01.awfatech.com/eboss-pro-max' : '',
    },
};

module.exports = nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: true,
//     eslint: {
//         ignoreDuringBuilds: true,
//     },
//     output: 'standalone',
//     basePath: '/eboss-pro-max',
//     assetPrefix: '/eboss-pro-max/',
// };

// module.exports = nextConfig;
