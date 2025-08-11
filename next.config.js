// next.config.js
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    reactStrictMode: true,
    basePath: isProd ? '/eboss-pro-max' : '',
    env: {
        NEXT_PUBLIC_BASE_URL: isProd ? 'https://devphp01.awfatech.com' : 'http://localhost:3000',
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
