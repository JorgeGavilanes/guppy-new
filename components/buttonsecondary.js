import styles from "./buttonsecondary.module.css";
import Link from "next/link";

export default function ButtonSecondary({enlace, texto}) {
    return (
        <Link href={enlace}>
            <a className={styles.buttonSecondary}>
                {texto}&nbsp;&nbsp;<span className={styles.space}>&nbsp;</span><i className={`${styles.arrow} fas fa-arrow-right`}></i>
            </a>
        </Link>
    );
}
