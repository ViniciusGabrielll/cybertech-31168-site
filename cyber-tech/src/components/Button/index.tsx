type ButtonProps = {
    link: string;
    text?: string;
}


function Button({link, text = "botão"}: ButtonProps) {
    return (
        <>
            <a href={link}>{text}</a>
        </>
    )
}

export default Button;