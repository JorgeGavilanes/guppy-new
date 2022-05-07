import styles from "./header.module.css";
import CreatedBy from "./createdby";
import Icons from "./icons";

export default function Header({ img, alt, titulo, desc, redes, fecha }){
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <img
                    src={img}
                    alt={alt}
                    className={styles.headerImg}
                />
                <section className={styles.headerTextContainer}>
                    <h1 className={styles.headerTitle}>{titulo}</h1>
                    <h2 className={styles.headerDesc}>{desc}</h2>
                    <CreatedBy
                        date={fecha}
                    />
                    <Icons icons_rs={redes}/>
                </section>
            </div>
        </header>
    );
}