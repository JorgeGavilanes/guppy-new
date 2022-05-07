import Link from "next/link";
import styles from "./nav.module.css";
import ButtonPrincipal from "./buttonprincipal";
// import DarkMode from "./darkmode";

export default function nav() {
  return (
      <>
        <nav className={styles.navBar}>
            <Link href="/">
                <a className={styles.logoNavBar}>
                    <img
                        src="/imagenes/Guppy.svg"
                        className={`${styles.logoImg} logoImgLight`}
                        alt="GuppyDigital"
                    />
                    <img
                        src="/imagenes/Guppy.svg"
                        className={`${styles.logoImg} ${styles.logoImgDark}`}
                        alt="GuppyDigital"
                    />
                    <p className={styles.logoText}>GuppyDigital</p>
                </a>
            </Link>
            <div className={styles.routes}>
                <Link href="/servicios">
                    <a className={styles.route}>Servicios</a>
                </Link>
                <Link href="/guppy">
                    <a className={styles.route}>Guppy</a>
                </Link>
                <Link href="/proyectos">
                    <a className={styles.route}>Proyectos</a>
                </Link>
                {/* <Link href="/descubre">
                    <a className={styles.route}>Descubre</a>
                </Link> */}
            </div>
            <div className={styles.options}>
                {/* <DarkMode /> */}
                <ButtonPrincipal />
            </div>
        </nav>
        <footer className={styles.footer}>
                <Link href="/servicios">
                    <a className={styles.route}><i className={`fas fa-wrench ${styles.i}`}></i><span className={styles.tEF}>Servicios</span></a>
                </Link>
                <Link href="/guppy">
                    <a className={styles.route}><i className={`fas fa-info ${styles.i}`}></i><span className={styles.tEF}>Guppy</span></a>
                </Link>
                <Link href="/proyectos">
                    <a className={styles.route}><i className={`far fa-folder ${styles.i}`}></i><span className={styles.tEF}>Proyectos</span></a>
                </Link>
                <Link href="/contactenos">
                    <a className={`${styles.route} ${styles.route_cUs}`}><i className={`far fa-envelope ${styles.i}`}></i></a>
                </Link>
        </footer>
    </>
  );
}