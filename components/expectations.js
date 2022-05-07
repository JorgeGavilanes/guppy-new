import styles from "./expectations.module.css";
import Title from "./title";
import ExpectationLeft from "./expectationLeft";
import ExpectationRight from "./expectationRight";
import ButtonSecondary from "./buttonsecondary";

export default function Expectations({ proyectos }) {
    return (
        <section className={styles.expectations}>
            <Title
                titulo={"SATISFACEMOS TUS ESPECTATIVAS"}
            />
            {proyectos
                .filter((e, i) => i < 3)
                .map(({ id, titulo, imagen, descripcion, alt, fecha, creator, icon, icons }, i) => (
                    (i % 2 === 0)
                    ?
                        <ExpectationLeft
                            altImg={alt}
                            desc={descripcion}
                            enlace={id}
                            enlaceTexto={"Ver proyecto"}
                            img={imagen}
                            titulo={titulo}
                            icon={icon}
                            creator={creator}
                            date={fecha}
                            icons={icons}
                        />
                    :
                        <ExpectationRight
                            altImg={alt}
                            desc={descripcion}
                            enlace={id}
                            enlaceTexto={"Ver proyecto"}
                            img={imagen}
                            titulo={titulo}
                            icon={icon}
                            creator={creator}
                            date={fecha}
                            icons={icons}
                        />
            ))}
            <div className={styles.botonCenter}>
                <ButtonSecondary
                    enlace={"/proyectos"}
                    texto={"Ver más"}
                />
            </div>
        </section>
    )
}
