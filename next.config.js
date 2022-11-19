/** @type {import('next').NextConfig} */
const nextConfig = {
    serverRuntimeConfig: {
        environment: process.env.ENVIRONMENT,
        githubToken: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
        recaptchaPrivate: process.env.RECAPTCHA_PRIVATE_KEY,
        contactEmail: process.env.CONTACT_EMAIL_ADDRESS,
    },
    publicRuntimeConfig: {
        name: process.env.NAME,
        linkedinUrl: process.env.LINKEDIN_URL,
        githubUsername: process.env.GITHUB_USERNAME,
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
