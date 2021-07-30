import {AppProps} from "next/app";
import Layout from "../components/layout/Layout";
import Head from "next/head";
import "../styles/tailwind.css";

function App({Component, pageProps}: AppProps): JSX.Element {
    return (
        <>
            <Head>
                <title>Yohann THEPAUT</title>

                <meta name="description" content="Yohann THEPAUT - Page web personnelle" />
                <meta name="author" content="Yohann THEPAUT <contact@ythepaut.com> (ythepaut)" />
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

export default App;
