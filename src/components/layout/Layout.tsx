import Footer from "./Footer";

interface Props {
    children: JSX.Element;
}

function Layout({children}: Props): JSX.Element {
    return (
        <>
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
}

export default Layout;
