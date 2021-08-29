import Nav from "../sections/Nav";
import Footer from "../sections/Footer";

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
