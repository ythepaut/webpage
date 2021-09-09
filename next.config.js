module.exports = {
    reactStrictMode: true,
    env: {
        RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY,
    },
    images: {
        disableStaticImages: true
    },
    webpack: (config, _) => {
        config.module.rules.push(
            {
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 100000
                    }
                }
            }
        );
        return config;
    },
    i18n: {
        locales: ["fr", "en"],
        defaultLocale: "en"
    }
};
