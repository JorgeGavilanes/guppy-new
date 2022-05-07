import styles from "./contenido.module.css";
import Compartir from "./compartir";

export default function Contenido({content, ruta}){
    return (
        <main className={styles.contenido}>
            <div
                dangerouslySetInnerHTML={content}
            />
            <Compartir ruta={ruta} />
        </main>
    );
}