import { NavLink } from "react-router-dom";
import styles from "./button.module.css";

type ButtonProps = {
  link: string;
  text?: string;
  icon?: string;
  download?: boolean;
};

function Button({ link, icon, text = "botão", download }: ButtonProps) {
  if (download) {
    return (
      <a className={styles.button} href={link} download>
        {icon && <img src={icon} alt="" />}
        <p>{text}</p>
      </a>
    );
  }
  return (
    <NavLink className={styles.button} to={link}>
      <img src={icon} />
      <p>{text}</p>
    </NavLink>
  );
}

export default Button;
