// next.config.js
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/eboss-pro-max' : '';

module.exports = {
    basePath,
    trailingSlash: true,
    output: 'standalone',
    images: {
        unoptimized: true,
    },
    env: {
        NEXT_PUBLIC_BASE_URL: isProd ? 'https://devphp01.awfatech.com' + basePath : 'http://localhost:3000' + basePath,
    },
};

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
