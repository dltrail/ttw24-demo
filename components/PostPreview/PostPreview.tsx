import { Post } from "@/types"
import Image from "next/image";
import Link from "next/link";
import styles from "./postPreview.module.scss";
import moment from "moment";
// import { longDateFormat } from "@/lib/constants";
export const longDateFormat = 'Do MMMM YY'

type PostPreview = Pick<Post, "coverImage" | "summaryTitle" | "date" | "slug" | "tags">

type PostPreviewProps = {
    post: PostPreview
}

export default function PostPreview({ post }: PostPreviewProps) {
    const { coverImage, summaryTitle, date, slug, tags } = post
    return (
        <div className={styles.post} >
            <Link className={styles.link}
            href={slug}>
                <Image
                src={coverImage.url}
                alt="hero image"
                quality={60}
                priority
                sizes="100vw"
                style={{
                    width: '100%',
                    height: 'auto',
                }}
                width={100}
                height={100}
            />
            <p className={styles.title}>{summaryTitle}</p>
            
            </Link>
            <div className={styles.previewMeta}>
            <p>{tags.map((tag, i)=>(<span key={i}>{tag}</span>))}</p>
                <p className={styles.date}>{moment(date).utc().format(longDateFormat)}</p>
            </div>
        </div>
    )
}
