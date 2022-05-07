import styles from "./headerservices.module.css";

export default function HeaderServices(){
    return (
        <>
            <header className={styles.container}>
                <section className={styles.header}>
                    <section className={`${styles.contenido} ${styles.textos}`}>
                        <h1 className={styles.title}>¿Qué <span className={styles.span}>hacemos</span>?</h1>
                        <p className={styles.desc}>En GuppyDigital nos encargamos del desarrollo de sitios y aplicaciones webs,
                        imagen corporativa y softwares administrativos.</p>
                    </section>
                    <img className={styles.contenido} src="./imagenes/servicios.png"/>
                </section>
            </header>
            <main className={styles.main}>
                <div className={styles.service}>
                    <div className={styles.serviceS1}>
                        <img
                            className={styles.serviceS1}
                            src="https://guppydigital.com/media/src/SitiosWeb_principal.svg"
                        />
                    </div>
                    <div className={styles.serviceS2}>
                        <h2 className={styles.titles}>Sitios web</h2>
                        <p className={styles.descs}>Ofrecemos servicios como la construcción y maquetación de sitios y aplicaciones web, interfaz e interacción de usuario.</p>
                    </div>
                </div>
                <hr className={styles.hr}/>
                <div className={styles.service}>
                    <div className={styles.serviceS1}>
                        <img
                            className={styles.serviceS1}
                            src="https://guppydigital.com/media/src/ImagenCorporativa_principal.svg"
                        />
                    </div>
                    <div className={styles.serviceS2}>
                        <h2 className={styles.titles}>Imagen corporativa</h2>
                        <p className={styles.descs}>Diseño de Logotipos, banners publicitarios, tarjetas de presentación, recursos y elementos gráficos.</p>
                    </div>
                </div>
                <hr className={styles.hr}/>
                <div className={styles.service}>
                    <div className={styles.serviceS1}>
                        <img
                            className={styles.serviceS1}
                            src="https://guppydigital.com/media/src/EdicionVideos_principal.svg"
                        />
                    </div>
                    <div className={styles.serviceS2}>
                        <h2 className={styles.titles}>Softwares administrativos</h2>
                        <p className={styles.descs}>Softwares administrativos a medida enfocada en diversas áreas como el diseño, ingeniería, marketing, ventas y soporte.</p>
                    </div>
                </div>
            </main>
        </>
    );
}