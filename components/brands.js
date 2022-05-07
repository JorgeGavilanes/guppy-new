import styles from "./brands.module.css";
import Title from "./title";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';

SwiperCore.use([Autoplay]);

export default function Brands() {
    return (
        <div className={styles.brands}>
            <Title
                titulo="MARCAS QUE CONFÍAN EN NOSOTROS"
            />
            <Swiper
                className={styles.brandContainer}
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                }}
                breakpoints={{
                    "530": {
                        "slidesPerView": 2,
                        "spaceBetween": 20
                    },
                    "800": {
                        "slidesPerView": 3,
                        "spaceBetween": 30
                        },
                    "1065": {
                        "slidesPerView": 4,
                        "spaceBetween": 40
                    },
                    "1340": {
                        "slidesPerView": 5,
                        "spaceBetween": 50
                    }
                    }}
            >
                <div className={styles.brandContainer}>
                    <SwiperSlide>
                        <img
                            className={styles.brand}
                            src="/imagenes/brands/brand-beaca.png"
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className={styles.brand}
                            src="/imagenes/brands/brand-getcode.png"
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className={styles.brand}
                            src="/imagenes/brands/brand-catedral.png"
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className={styles.brand}
                            src="/imagenes/brands/brand-overtime.png"
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className={styles.brand}
                            src="/imagenes/brands/brand-viewcube.png"
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className={styles.brand}
                            src="/imagenes/brands/brand-startgeeks.png"
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className={styles.brand}
                            src="/imagenes/brands/brand-familygroup.png"
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className={styles.brand}
                            src="/imagenes/brands/brand-sunflower.png"
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className={styles.brand}
                            src="/imagenes/brands/brand-arteam.png"
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className={styles.brand}
                            src="/imagenes/brands/brand-z.png"
                            alt=""
                        />
                    </SwiperSlide>
                </div>
            </Swiper>
        </div>
    );
}



