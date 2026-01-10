import styles from "./button.module.css";

type ButtonProps = {
    link: string;
    text?: string;
    icon?: string;
}


function Button({link, icon, text = "botão"}: ButtonProps) {
    return (
        <a className={styles.button} href={link}>
            <img src={icon}/>
            <p>{text}</p>
        </a>
    )
}

export default Button;