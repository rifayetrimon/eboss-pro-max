// next.config.js
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    reactStrictMode: true,

    // Set base path and asset prefix only in production
    basePath: isProd ? '/eboss-pro-max' : '',
    assetPrefix: isProd ? '/eboss-pro-max/' : '',

    // Optional: If you want images to work with the basePath
    images: {
        unoptimized: true, // Disable Image Optimization if using static export
    },

    // Optional: If you want to handle trailing slashes consistently
    trailingSlash: false,
};
