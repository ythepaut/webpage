import App from "next/app";
import type {AppContext, AppProps} from "next/app";
import Layout from "../components/Layout";
import Head from "next/head";
import "../styles/tailwind.css";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <title>Yohann THEPAUT</title>

                <meta name="subject" content="Yohann THEPAUT - Page web" />
                <meta name="description" content="Page web personnelle" />
                <meta name="author" content="Yohann THEPAUT (ythepaut)" />
                <meta name="keywords" content="yohann thepaut, ythepaut, yohann, thepaut, page web, site web"/>
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.ythepaut.com/" />
                <meta property="og:title" content="Yohann THEPAUT" />
                <meta property="og:description" content="Yohann THEPAUT - Page web personnelle" />
                <meta property="og:image" content="/banner.png" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.ythepaut.com/" />
                <meta property="twitter:title" content="Yohann THEPAUT" />
                <meta property="twitter:description" content="Yohann THEPAUT - Page web personnelle" />
                <meta property="twitter:image" content="/banner.png" />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
   const appProps = await App.getInitialProps(appContext);
   return {...appProps}
};

export default MyApp;
