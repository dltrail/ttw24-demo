
import cn from "classnames";
import styles from "./Link.module.scss";

interface LinkProps {
    linkText: string
    url: string
    type: "inText" | "tinnovation"
}

export default function Link({linkText, url, type}: LinkProps) {
    const styleType = type;
    return (
        <a href={url} className={cn(`${styles.Link}`, `${styles[styleType]}`)}>{linkText}</a>
    )
}