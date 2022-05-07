import navStyles from "./nav.module.css";

export default function DarkMode() {
  return (
    <button
    type="button"
    className={`option ${navStyles.lightDark}`}
    id="darkMode"
    >
        <i className={`${navStyles.icon} ${navStyles.iconLight} far fa-sun`}></i>
        <i className={`${navStyles.icon} ${navStyles.iconDark} far fa-moon`}></i>
    </button>
  );
};
