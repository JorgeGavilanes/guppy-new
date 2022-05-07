import styles from "./buttonprincipal.module.css";
import Link from "next/link";

export default function ButtonPrincipal() {
    return (
        <Link href="/contactenos">
            <a className={styles.buttonPrincipal}>
                Contáctenos
            </a>
        </Link>    
    );
}