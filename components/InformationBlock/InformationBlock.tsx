import cn from "classnames";
import styles from "./InformationBlock.module.scss";

type informationBlockProps = {
    title?: string // Only used with the 'text-tilte' options
    text: string
    cta?: {
        url: string 
        name: string
        target: string
    } | undefined
    style: "page-title" | "section-title" | "section-title-small" | "text-title" | "tinnovation-text-title"
}

export default function InformationBlock({ title, text, cta, style }: informationBlockProps) {
    const { url, name } = cta ?? {}
    const styleType = style;

    return (
        <section className={cn(`${styles.informationBlock}`, `${styles[styleType]}`)}>
            {title && (style == "text-title" || style == "tinnovation-text-title") && <p className={styles.informationBlockTitle}>{title}</p>}
            <p className={styles.informationBlockBody} dangerouslySetInnerHTML={{ __html: text }} />
            {/* #TODO: use link/button component here */}
            {url && <a className={styles.informationBlockLink} href={url} target={"_blank"}>{name}</a>
            }
        </section>
    )
}

