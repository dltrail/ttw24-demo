import cn from "classnames";
import styles from "./chatBlock.module.scss";

type ChatBlockProps = {
    Title: string
    BodyCopy: string
    CtaText: string
    CtaUrl: string
    ColorVariation: "Blue" | "Red" | "Yellow" | "Green"
}

export default function ChatBlock({ Title, BodyCopy, CtaText, CtaUrl, ColorVariation }: ChatBlockProps) {
    const styleType = ColorVariation;
    return (
        <section className={cn(`${styles.chatBlock}`, `${styles[styleType]}`)}>
            <p className={styles.chatBlockTitle}>{Title}</p>
            <p className={styles.chatBlockBody}>{BodyCopy}</p>
            <a className={styles.chatBlockLink} href={CtaUrl} target="_blank">{CtaText}</a>
        </section>
    )
}

