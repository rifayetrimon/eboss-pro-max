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

// // next.config.js
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    reactStrictMode: true,
    env: {
        BASE_URL: isProd
            ? 'https://devphp01.awfatech.com/eboss-pro-max' // Production domain
            : 'http://localhost:3000', // Local dev
    },
};
