/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    i18n: {
        locales: ["fr", "en"],
        defaultLocale: "en"
    }
};

module.exports = nextConfig;
