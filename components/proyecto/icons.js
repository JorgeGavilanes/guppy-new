import styles from "./icons.module.css";

function Icon({ icon, rs }){
    const arr = ["web", "fb", "ig", "wp", "tt", "li", "mp"];
    const iconArr = [
        "fas fa-link",
        "fab fa-facebook-f",
        "fab fa-instagram",
        "fab fa-whatsapp",
        "fab fa-twitter",
        "fab fa-linkedin-in",
        "fas fa-map-marker-alt"
    ];
    return (
        <>
            {
                arr.map((eArr,i) =>
                    (icon && rs == eArr)
                    ?(
                        <a href={icon} target="_blank" className={`${styles.container_icon} ${eArr}_border`}>
                            <i className={`${styles.icon} ${iconArr[i]} ${eArr}_icon`}></i>
                        </a>
                    )
                    :""
                )
            }
        </>
    );
}

export default function Icons({ icons_rs }){
    return (
        <section className={styles.icons}>
            {}
            <Icon icon={icons_rs.web} rs="web"/>
            <Icon icon={icons_rs.fb} rs="fb"/>
            <Icon icon={icons_rs.ig} rs="ig"/>
            <Icon icon={icons_rs.tt} rs="tt"/>
            <Icon icon={icons_rs.wp} rs="wp"/>
            <Icon icon={icons_rs.li} rs="li"/>
            <Icon icon={icons_rs.mp} rs="mp"/>
        </section>
    );
}