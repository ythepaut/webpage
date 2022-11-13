import "../styles/globals.css";
import type {AppProps} from "next/app";
import Head from "next/head";
import {NextIntlProvider} from "next-intl";
import Layout from "../components/layout/Layout";
import {AnimatePresence} from "framer-motion";

export default function App({Component, pageProps, router}: AppProps) {
    return (
        <>
            <Head>
                <title>Yohann THEPAUT</title>

                <meta name="subject" content="Yohann THEPAUT"/>
                <meta name="description" content="Page web personnelle"/>
                <meta name="author" content="Yohann THEPAUT (ythepaut)"/>
                <meta name="keywords" content="yohann thepaut, ythepaut, yohann, thepaut, page web, site web"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://www.ythepaut.com/"/>
                <meta property="og:title" content="Yohann THEPAUT"/>
                <meta property="og:description" content="Page web personnelle"/>
                <meta property="og:image" content="/banner.png"/>
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="https://www.ythepaut.com/"/>
                <meta property="twitter:title" content="Yohann THEPAUT"/>
                <meta property="twitter:description" content="Page web personnelle"/>
                <meta property="twitter:image" content="/banner.png"/>
            </Head>
            <NextIntlProvider messages={pageProps.messages}>
                <Layout>
                    <AnimatePresence mode="wait">
                        <Component {...pageProps} key={router.route}/>
                    </AnimatePresence>
                </Layout>
            </NextIntlProvider>
            <script async defer src={"https://stats.ythepaut.com/latest.js"}/>
            <noscript>
                <img src="https://stats.ythepaut.com/noscript.gif" alt=""/>
            </noscript>
        </>
    );
}
