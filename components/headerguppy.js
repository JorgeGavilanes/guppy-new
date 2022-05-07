import styles from "./headerguppy.module.css";
import ButtonPrincipal from "./buttonprincipal";
import ButtonSecondary from "./buttonsecondary";
import Title from "./title";

export default function HeaderGuppy (){
    return (
        <>
            <header className={styles.header}>
                <img
                    src="./imagenes/Guppy.svg"
                    className={styles.img}
                />
                <section className={styles.headerSection}>
                    <h1 className={styles.headerTitle}>GUPPYDIGITAL</h1>
                    <p className={styles.headerDesc}>Innovamos la web</p>
                    <p className={styles.headerDescs}>Sitios webs minimalistas y aplicaciones webs a tu alcance. Mejoramos la imagen corporativa de tu negocio a través de nuestros diseños.</p>
                    <div className={styles.buttons}>
                        <ButtonPrincipal />
                        <div className={styles.w25}/>
                        <ButtonSecondary
                            enlace={"/"}
                            texto={"Inicio"}
                        />
                    </div>
                </section>
            </header>
            <section className={styles.whyUs}>
                <Title titulo={"¿POR QUÉ GUPPY?"} />
                <div className={styles.containerDescs}>
                    <p className={styles.headerDescs}>Somos un equipo en constante aprendizaje, empleando tecnologías y herramientas modernas te ayudamos a llevar a tu negocio al mundo digital.</p>
                    <p className={`${styles.headerDescs} ${styles.none}`}>Tecnologías como NodeJs, Express, React, Next, MongoDB, Html, Css, Js, Wordpress, PHP, Strapi, integración de pasarelas de pagos, entre otros.</p>
                    <p className={`${styles.headerDescs} ${styles.none}`}>Herramientas como Adobe Illustrator, Photoshop, After Effects, Premiere, herramientas de modelado 3D y demás herramientas adaptadas a tus necesidades.</p>
                    <p className={styles.headerDescs}>Hemos trabajado con marcas nacionales y extranjeras dándonos un plus y gracias a nuestra experiencia podemos asesorarte para escalar tu negocio.</p>
                </div>
            </section>
        </>
    );
}