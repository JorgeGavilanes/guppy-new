import styles from "./createdby.module.css";

export default function CreatedBy({ date }){
    return (
        <section className={styles.createdby}>
            <p className={styles.date}>{date}</p>
        </section>
    );
}