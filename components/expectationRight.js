import styles from "./expectation.module.css";
import CreateBy from "./createby";
import Icons from "./icons";
import ButtonSecondary from "./buttonsecondary";

export default function ExpectationRight({ icons, img, altImg, titulo, desc, enlace, enlaceTexto, icon, creator, date }) {
    return (
        <article className={`${styles.expectation} ${styles.eR}`}>
            <div className={`${styles.expectationContentImg} ${styles.eCIShow}`}>
                <img src={img} alt={`${altImg} | GuppyDigital`} className={styles.expectationImg}/>
            </div>
            <header className={styles.expectationTexts}>
                <h3 className={styles.expectationTitle}>{titulo}</h3>
                <CreateBy
                    icon={icon}
                    creator={creator}
                    date={date}
                />
                <p className={styles.expectationDescription}>{desc}</p>
                <Icons 
                    icons_rs={icons}
                />
                <ButtonSecondary
                    enlace={`proyecto/${enlace}`}
                    texto={enlaceTexto}
                />
            </header>
            <div className={`${styles.expectationContentImg} ${styles.eCIHide}`}>
                <img src={img} alt={`${altImg} | GuppyDigital`} className={styles.expectationImg}/>
            </div>
        </article>
    );
}