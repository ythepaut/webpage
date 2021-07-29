import {AppProps} from "next/app";
import Layout from "../components/Layout";
import Head from "next/head";
import "../styles/globals.css";

function App({Component, pageProps}: AppProps): JSX.Element {
    return (
        <>
            <Head>
                <title>Hello</title>
                <meta name="description" content="Hello" />
                <link rel="icon" href="/assets/img/favicon.ico" />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default App;
