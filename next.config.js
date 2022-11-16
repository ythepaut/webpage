/** @type {import('next').NextConfig} */
const nextConfig = {
    serverRuntimeConfig: {
        githubToken: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
        contactEmail: process.env.CONTACT_EMAIL_ADDRESS,
        recaptchaPrivate: process.env.RECAPTCHA_PRIVATE_KEY,
        environment: process.env.ENVIRONMENT,
    },
    publicRuntimeConfig: {
        recaptchaPublic: process.env.RECAPTCHA_SITE_KEY,
    },
    reactStrictMode: true,
    swcMinify: true,
    i18n: {
        locales: ["fr", "en"],
        defaultLocale: "fr"
    }
};

module.exports = nextConfig;
