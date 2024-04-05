import styles from "./articleTag.module.scss";

type ArticleTagProps = {
    tag: string
}

export default function ArticleTag({ tag }: ArticleTagProps) {
    return (
        <div className={styles.tag} >
         {tag}
        </div>
    )
}