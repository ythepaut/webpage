import Footer from "./Footer";

interface Props {
    children: JSX.Element;
}

export default function Layout({children}: Props): JSX.Element {
    return (
        <>
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
}
