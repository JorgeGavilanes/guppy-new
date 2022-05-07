import styles from "./header.module.css";
import ButtonPrincipal from "./buttonprincipal";
import ButtonSecondary from "./buttonsecondary";
import Script from "next/script";

export default function Header(){
    return (
        <>
            <header className={styles.header}>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
                <div className={styles.headerTexts}>
                    <p className={styles.headerTitle}>
                        POTENCIAMOS TU MARCA<br/>
                        EN EL MUNDO DIGITAL
                    </p>
                    <h1 className={styles.headerDescription}>
                        Desarrollamos y diseñamos<br/>
                        aplicaciones, sitios web y marcas.
                    </h1>
                    <div className={styles.buttons}>
                        <ButtonPrincipal />
                        <div className={styles.px25}></div>
                        <ButtonSecondary
                            enlace={"/guppy"}
                            texto={"o Conózcanos"}
                        />
                    </div>
                </div>
                <img
                    src="/imagenes/header/header.png"
                    alt="GuppyDigital"
                    className={`${styles.headerImg} ${styles.headerImgLight}`}
                    data-speed = "3"
                />
                {/* <img
                    src="/imagenes/header/header-dark.png"
                    alt="GuppyDigital"
                    className={`${styles.headerImg} ${styles.headerImgDark}`}
                    data-speed = "3"
                /> */}
            </header>
            <Script 
                src="/scripts/headerFunction.js"
            />
        </>
    );
}
