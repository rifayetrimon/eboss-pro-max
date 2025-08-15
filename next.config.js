// next.config.js
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    reactStrictMode: false,
    eslint: { ignoreDuringBuilds: true },
    output: 'standalone',
    basePath: isProd ? '/eboss-pro-max' : '',
    assetPrefix: isProd ? '/eboss-pro-max' : '',
    publicRuntimeConfig: {
        basePath: isProd ? '/eboss-pro-max' : '',
    },
    images: {
        domains: ['master.d1owhjfq4wkbrq.amplifyapp.com'], // Add your API's domain here
    },
};
