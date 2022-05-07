import styles from "./title.module.css";

export default function Title({titulo}) {
    return (
        <h2 className={styles.title}>{titulo}</h2>
    );
}