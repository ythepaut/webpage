/** @type {import('next').NextConfig} */
const nextConfig = {
    serverRuntimeConfig: {
        githubToken: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
    },
    publicRuntimeConfig: {
        contactEmail: process.env.CONTACT_EMAIL_ADDRESS,
        recaptchaPublic: process.env.RECAPTCHA_SITE_KEY,
    },
    reactStrictMode: true,
    swcMinify: true,
    i18n: {
        locales: ["fr", "en"],
        defaultLocale: "en"
    }
};

module.exports = nextConfig;
