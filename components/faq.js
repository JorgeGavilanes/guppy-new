import styles from "./faq.module.css";
import Title from "./title";
import Faq from "react-faq-component";

const data = {
    rows: [
        {
            title: <p className={styles.faqQuestion}>¿Qué es GuppyDigital?</p>,
            content: <div className={styles.faqAnswer}>Somos una agencia encargada del diseño y desarrollo de sitios y aplicaciones web, identidad de marca e imagen corporativa, y softwares administrativos a medida para la gestión de tu negocio.</div>
        },
        {
            title: <p className={styles.faqQuestion}>¿Qué proyectos impulsaron?</p>,
            content: <div className={styles.faqAnswer}>Hemos trabajado con marcas nacionales y extranjeras las cuales han destacado por su identidad de marca, puedes revisar algunos de nuestros proyectos destacados en la página de proyectos.</div>
        },
        {
            title: <p className={styles.faqQuestion}>¿Pueden asesorarme?</p>,
            content: <div className={styles.faqAnswer}>Si tienes un negocio en marcha o en mente y quieres impulsarlo en el mundo digital, puedes pulsar el botón de <strong>Contáctenos</strong> y completar el formulario para contactarnos contigo.</div>
        },
        {
            title: <p className={styles.faqQuestion}>¿Cómo les contacto?</p>,
            content: <div className={styles.faqAnswer}>Queremos que tu negocio crezca en el mundo digital, puedes pulsar el botón de <strong>Contáctenos</strong>, completar el formulario con tus datos y nos pondremos en contacto contigo.</div>
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