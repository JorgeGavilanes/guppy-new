import styles from "./createby.module.css";
import Date from "../components/date";

export default function CreateBy({icon, creator, date}){
    return (
        <section className={styles.createby}>
            <div className={styles.createby_containerImg}>
                <img 
                    src={icon}
                    className={styles.createby_img}
                />
            </div>
            <div>
                <b className={styles.createby_title}>{creator}</b>
                <br />
                <small className={styles.createby_date}><Date dateString={date} /></small>
            </div>
        </section>
    );
}