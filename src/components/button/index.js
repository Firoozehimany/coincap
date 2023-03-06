import Style from "./style"
export default function Button({text, link, click}) {
    return (
        <Style>
            <a href={link} onClick={click}>{text}</a>
        </Style>
    )
}
