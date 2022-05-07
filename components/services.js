import styles from "./services.module.css";
import Title from "./title";
import { Swiper, SwiperSlide } from "swiper/react";
import ButtonSecondary from "./buttonsecondary";

export default function Services({buttonShow}){
    return (
        <main className={styles.services}>
            <Title
                titulo="¡LO QUE NECESITAS LO TENEMOS!"
            />
            <Swiper
                className={styles.servicesContainer}
                spaceBetween={10}
                slidesPerView={1}
                breakpoints={{
                    "530": {
                    "slidesPerView": 2,
                    "spaceBetween": 10
                    },
                    "800": {
                        "slidesPerView": 2,
                        "spaceBetween": 10
                    },
                    "1065": {
                    "slidesPerView": 3,
                    "spaceBetween": 10
                    },
                    "1340": {
                    "slidesPerView": 3,
                    "spaceBetween": 10
                    }
                }}
            >
                <div className={styles.servicesContainer}>
                    <SwiperSlide className={styles.service}>
                        <lord-icon
                            src="https://cdn.lordicon.com/qhgmphtg.json"
                            trigger="hover"
                            colors="primary:#383838,secondary:#2598dd"
                            stroke="25"
                            scale="65"
                            style={{width:"175px",height:"175px"}}
                        >
                        </lord-icon>
                        <h3 className={styles.servicesTitle}>Sitios web</h3>
                    </SwiperSlide>
                    <SwiperSlide className={styles.service}>
                        <lord-icon
                            src="https://cdn.lordicon.com/fgkmrslx.json"
                            trigger="hover"
                            colors="primary:#383838,secondary:#2598dd"
                            stroke="25"
                            scale="65"
                            style={{width:"175px",height:"175px"}}
                        >
                        </lord-icon>
                        <h3 className={styles.servicesTitle}>Imagen Corporativa</h3>
                    </SwiperSlide>
                    <SwiperSlide className={styles.service}>
                        <lord-icon
                            src="https://cdn.lordicon.com/gqdnbnwt.json"
                            trigger="hover"
                            colors="primary:#383838,secondary:#2598dd"
                            stroke="25"
                            scale="65"
                            style={{width:"175px",height:"175px"}}
                        >
                        </lord-icon>
                        <h3 className={styles.servicesTitle}>Softwares administrativos</h3>
                    </SwiperSlide>
                </div>
                {buttonShow &&
                    <ButtonSecondary
                        texto = {"Explorar"}
                        enlace = {"/servicios"}
                    />
                }
            </Swiper>
        </main>
    );
}