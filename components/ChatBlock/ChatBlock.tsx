import cn from "classnames";
import styles from "./chatBlock.module.scss";

type ChatBlockProps = {
    title: string
    bodyCopy: string
    cta: {
        url: string
        name: string
        target: string
    }
    colour: "Blue" | "Red" | "Yellow" | "Green"
}

export default function ChatBlock({ title, bodyCopy, cta, colour }: ChatBlockProps) {
const {url, name} = cta
    const styleType = colour;
    return (
        <section className={cn(`${styles.chatBlock}`, `${styles[styleType]}`)}>
            <p className={styles.chatBlockTitle}>{title}</p>
            <p className={styles.chatBlockBody}>{bodyCopy}</p>
            <a className={styles.chatBlockLink} href={url} target={"_blank"}>{name}</a>
        </section>
    )
}

