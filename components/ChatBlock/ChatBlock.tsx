import cn from "classnames";
import styles from "./chatBlock.module.scss";

type Content = {
    title: string
    bodyCopy: string
    cta: {
        url: string
        name: string
        target: string
    }
    colour: "Blue" | "Red" | "Yellow" | "Green"
}
type ChatBlockProps = {
    data: Content
}

export default function ChatBlock({ data }: ChatBlockProps) {
    const { title, bodyCopy, cta, colour } = data
    const { name, url } = cta
    const styleType = colour;
    return (
        <section className={cn(`${styles.chatBlock}`, `${styles[styleType]}`)}>
            <p className={styles.chatBlockTitle}>{title}</p>
            <p className={styles.chatBlockBody}>{bodyCopy}</p>
            <a className={styles.chatBlockLink} href={url} target={"_blank"}>{name}</a>
        </section>
    )
}

