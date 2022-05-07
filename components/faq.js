import styles from "./faq.module.css";
import Title from "./title";
import Faq from "react-faq-component";

const data = {
    rows: [
        {
            title: <p className={styles.faqQuestion}>¿Cuánto cuesta mi proyecto?</p>,
            content: <div className={styles.faqAnswer}>To use parametric estimating, first divide a project into units of work. Then, you must determine the cost per unit, and then multiply the number of units by the cost per unit to estimate the total cost.</div>
        },
        {
            title: <p className={styles.faqQuestion}>¿Cuánto demora mi proyecto?</p>,
            content: <div className={styles.faqAnswer}>To use parametric estimating, first divide a project into units of work. Then, you must determine the cost per unit, and then multiply the number of units by the cost per unit to estimate the total cost.</div>
        },
        {
            title: <p className={styles.faqQuestion}>¿Pueden asesorarme?</p>,
            content: <div className={styles.faqAnswer}>To use parametric estimating, first divide a project into units of work. Then, you must determine the cost per unit, and then multiply the number of units by the cost per unit to estimate the total cost.</div>
        },
        {
            title: <p className={styles.faqQuestion}>¿Cómo les contacto?</p>,
            content: <div className={styles.faqAnswer}>To use parametric estimating, first divide a project into units of work. Then, you must determine the cost per unit, and then multiply the number of units by the cost per unit to estimate the total cost.</div>
        }
    ]
}

const stylesMod = {
    bgColor: 'none',
    rowTitleColor: "#17202A",
    rowContentColor: "#17202A",
    arrowColor: "#17202A"
};

const config = {
    tabFocus: true
};

export default function FaqSection(){
    return (
        <section className={styles.faq}>
            <Title
                titulo="RESOLVEMOS TUS DUDAS"
            />
            <div>
                <div className={styles.faqContainer}>
                    <Faq
                        data={data}
                        styles={stylesMod}
                        config={config}
                    />
                </div>
            </div>
        </section>
    );
}