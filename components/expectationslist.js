import styles from "./expectations.module.css";
import Title from "./title";
import ExpectationRight from  "./expectationRight";
import ExpectationLeft from  "./expectationLeft";

export default function ExpectationsList({ proyectos }){
    return (
        <section className={styles.expectations}>
            <Title
                titulo="SATISFACEMOS TUS ESPECTATIVAS"
            />
            {proyectos
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
        </section>
    );
}

// export default function Expectations() {
//     const postList = data.map((post, i) =>
//         {
//             if (i % 2 === 0){
//                 return <ExpectationLeft
//                             image = {data[i][0]}
//                             imageAlt = {data[i][1]}
//                             title = {data[i][2]}
//                             description = {data[i][3]}
//                             buttonA = {data[i][4]}
//                             buttonText = "Ver proyecto"
//                         />
//             }else{
//                 return <ExpectationRight
//                             image = {data[i][0]}
//                             imageAlt = {data[i][1]}
//                             title = {data[i][2]}
//                             description = {data[i][3]}
//                             buttonA = {data[i][4]}
//                             buttonText = "Ver proyecto"
//                         />
//             }
//         }
//     );
//     return (
        
//     )
// }
