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

// next.config.js
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    reactStrictMode: true,
    env: {
        // Change only this if your domain changes
        NEXT_PUBLIC_BASE_URL: isProd ? 'https://devphp01.awfatech.com/eboss-pro-max' : 'http://localhost:3000',
    },
};
