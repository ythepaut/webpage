import styles from "../styles/Layout.module.css";

interface Props {
    children: JSX.Element;
}

function Layout({children}: Props): JSX.Element {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    );
}

export default Layout;
