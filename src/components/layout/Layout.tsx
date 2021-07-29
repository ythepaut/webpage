import Nav from "./Nav";
import Footer from "./Footer";

interface Props {
    children: JSX.Element;
}

function Layout({children}: Props): JSX.Element {
    return (
        <>
            <Nav />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
}

export default Layout;
