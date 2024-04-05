import { Post } from "@/types"
import Image from "next/image";
import Link from "next/link";
import styles from "./postPreview.module.scss";
import moment from "moment";
import { longDateFormat } from "@/lib/constants";

type PostPreviewProps = {
    post: Post
}

export default function PostPreview({ post }: PostPreviewProps) {
    const { coverImage, summaryTitle, date, slug, tags, readTime } = post

    return (
        <div className={styles.post} >
        
            <Link href={slug}>
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
