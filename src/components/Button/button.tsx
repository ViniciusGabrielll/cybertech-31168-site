import { NavLink } from "react-router-dom";
import styles from "./button.module.css";

type ButtonProps = {
    link: string;
    text?: string;
    icon?: string;
}


function Button({link, icon, text = "botão"}: ButtonProps) {
    return (
        <NavLink className={styles.button} to={link}>
            <img src={icon}/>
            <p>{text}</p>
        </NavLink>
    )
}

export default Button;