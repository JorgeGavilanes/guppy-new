import styles from "./footer.module.css";
import Link from "next/link";

export default function nav() {
    let newDate = new Date();
    let year = newDate.getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerLogo}>
                    <img
                        src="/imagenes/GuppyWhite.svg"
                        className={styles.footerLogoImg}
                        alt="GuppyDigital"
                    />
                    <p className={styles.footerLogoTitle}>GuppyDigital</p>
                    <div className={styles.footerLogoSM}>
                        <a
                            href="https://www.facebook.com/pg/GuppyDigital"
                            target="_blank"
                            className={styles.iconSM}
                        >
                            <i className={`${styles.iconFooter} fab fa-facebook-f`}></i>
                        </a>
                        <a
                            href="https://www.instagram.com/guppydigital/"
                            target="_blank"
                            className={styles.iconSM}
                        >
                            <i className={`${styles.iconFooter} fab fa-instagram`}></i>
                        </a>
                        <a
                            href="https://wa.me/593968159654"
                            target="_blank"
                            className={styles.iconSM}
                        >
                            <i className={`${styles.iconFooter} fab fa-whatsapp`}></i>
                        </a>
                        <a
                            href="https://twitter.com/guppydigital"
                            target="_blank"
                            className={styles.iconSM}
                        >
                            <i className={`${styles.iconFooter} fab fa-twitter`}></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/company/guppydigital"
                            target="_blank"
                            className={styles.iconSM}
                        >
                            <i className={`${styles.iconFooter} fab fa-linkedin-in`}></i>
                        </a>
                        <a
                            href="https://www.google.es/maps/place/Dise%C3%B1o+y+desarrollo+de+sitios+web,+imagen+corporativa+y+edici%C3%B3n+de+video.+%7C+GuppyDigital/@-1.0552778,-80.4500152,17z/data=!3m1!4b1!4m12!1m6!3m5!1s0x902b8d1397d3e381:0x7e9ae265eab3545!2sDise%C3%B1o+y+desarrollo+de+sitios+web,+imagen+corporativa+y+edici%C3%B3n+de+video.+%7C+GuppyDigital!8m2!3d-1.0552832!4d-80.4478265!3m4!1s0x902b8d1397d3e381:0x7e9ae265eab3545!8m2!3d-1.0552832!4d-80.4478265"
                            target="_blank"
                            className={styles.iconSM}
                        >
                            <i className={`${styles.iconFooter} fas fa-map-marker-alt`}></i>
                        </a>
                    </div>
                </div>
                <div className={styles.footerSections}>
                    <div className={styles.footerSection}>
                        <p className={styles.footerTitle}>Sitios web</p>
                        <p className={styles.footerPage}>Diseño web</p>
                        <p className={styles.footerPage}>Diseño responsive</p>
                        <p className={styles.footerPage}>Desarrollo web</p>
                        <p className={styles.footerPage}>Email corporativo</p>
                        <p className={styles.footerPage}>Gestión web</p>
                    </div>
                    <div className={styles.footerSection}>
                        <p className={styles.footerTitle}>Imagen Corporativa</p>
                        <p className={styles.footerPage}>Logotipos</p>
                        <p className={styles.footerPage}>Banners</p>
                        <p className={styles.footerPage}>Tarjetas corporativas</p>
                        <p className={styles.footerPage}>Mock ups</p>
                        <p className={styles.footerPage}>Presentaciones</p>
                    </div>
                    <div className={styles.footerSection}>
                        <p className={styles.footerTitle}>Softwares</p>
                        <p className={styles.footerPage}>Diseño</p>
                        <p className={styles.footerPage}>Ingeniería</p>
                        <p className={styles.footerPage}>Marketing</p>
                        <p className={styles.footerPage}>Ventas</p>
                        <p className={styles.footerPage}>Soporte</p>
                    </div>
                    <div className={styles.footerSection}>
                        <p className={styles.footerTitle}>Acerca de</p>
                        <Link href="/servicios">
                            <a className={styles.footerPage}>
                                Servicios
                            </a>
                        </Link>
                        <Link href="/guppy">
                            <a className={styles.footerPage}>
                                GuppyDigital
                            </a>
                        </Link>
                        <Link href="/proyectos">
                            <a className={styles.footerPage}>
                                Casos de uso
                            </a>
                        </Link>
                        <Link href="/contactenos">
                            <a className={styles.footerPage}>
                                Contáctenos
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <p className={styles.footerCopyRight}>© GuppyDigital.com 2018 - {year} | Todos los derechos reservados</p>
        </footer>
    );
}