import styles from "./ctafaq.module.css";
import CallToAction from "./calltoaction";
import FaqSection from "./faq";

export default function CtaFaq() {
    return (
        <section className={styles.ctaFaq}>
            <div className={styles.circleBottom}></div>
            <div className={styles.circleBottom}></div>
            <div className={styles.circleBottom}></div>
            <CallToAction/>
            <FaqSection/>
        </section>
    )
}