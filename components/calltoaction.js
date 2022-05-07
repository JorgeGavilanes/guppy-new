import styles from "./calltoaction.module.css";
import Title from "./title";
import ButtonPrincipal from "./buttonprincipal";

export default function CallToAction(){
    return (
        <section className={styles.callToAction}>
            <Title
                titulo="¿NECESITAS POTENCIAR TU MARCA?"
            />
            <p className={styles.ctaDescription}>
                Impulsamos tu marca brindandote las mejores<br/>
                tecnologías a medida para tu proyecto.
            </p>
            <ButtonPrincipal/>
        </section>
    );
}