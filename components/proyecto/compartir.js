import styles from "./compartir.module.css";

export default function Compartir({ruta}){
    return (
        <section className={styles.compartir}>
            <hr className={styles.divisor}/>
            <p className={styles.texto}>Compartir</p>
            <div className={styles.compartirContainer}>
                <a
                    className={`fab fa-facebook-f fb_border ${styles.icon}`}
                    href={`https://www.facebook.com/sharer/sharer.php?u=${ruta}`}
                    target="_blank"
                />
                <a
                    className={`fab fa-whatsapp wp_border ${styles.icon}`}
                    href={`https://api.whatsapp.com/send?phone=&text=Hola,%20puedes%20revisar%20este%20proyecto%20de%20GuppyDigital%0A${ruta}`}
                    target="_blank"
                />
                <a
                    className={`fab fa-twitter tt_border ${styles.icon}`}
                    href={`https://twitter.com/intent/tweet?text=Hola,%20puedes%20revisar%20este%20proyecto%20de%20GuppyDigital%0A${ruta}`}
                    target="_blank"
                />
            </div>
        </section>
    );
}