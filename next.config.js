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

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    reactStrictMode: true,
    eslint: { ignoreDuringBuilds: true },
    output: 'standalone',
    basePath: isProd ? '/eboss-pro-max' : '',
    assetPrefix: isProd ? '/eboss-pro-max/' : '',
    publicRuntimeConfig: {
        basePath: isProd ? '/eboss-pro-max' : '',
    },
};
