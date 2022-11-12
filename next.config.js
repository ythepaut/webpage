/** @type {import('next').NextConfig} */
const nextConfig = {
    publicRuntimeConfig: {
        githubToken: process.env.GITHUB_PERSONAL_ACCESS_TOKEN
    },
    reactStrictMode: true,
    swcMinify: true,
    i18n: {
        locales: ["fr", "en"],
        defaultLocale: "en"
    }
};

module.exports = nextConfig;
