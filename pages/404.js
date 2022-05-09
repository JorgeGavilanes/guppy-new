import Head from "next/head"
import Nav from "../components/nav";
import Footer from "../components/footer";
import styles from "../components/404.module.css";
import ButtonPrincipal from "../components/buttonprincipal";
import ButtonSecondary from "../components/buttonsecondary";

export default function Custom404() {
    return (
        <>
            <Head>
                <title>Página no encontrada</title>
            </Head>
            <Nav />
            <header className={styles.header}>
                <section className={styles.headerSection}>
                    <h1 className={styles.headerTitle}>ERROR 404</h1>
                    <p className={styles.headerDesc}>Página no encontrada</p>
                    <p className={styles.headerDescs}>Tal vez te perdiste buscando en el océano o el pez que buscas ya nos lo comimos, si gustas puedes contactarnos o volver a la página principal.</p>
                    <div className={styles.buttons}>
                        <ButtonPrincipal />
                        <div className={styles.w25}/>
                        <ButtonSecondary
                            enlace={"/"}
                            texto={"Inicio"}
                        />
                    </div>
                </section>
            </header>
            <Footer />
        </>
    );
}