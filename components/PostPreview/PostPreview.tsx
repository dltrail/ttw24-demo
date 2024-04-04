import { Post } from "@/types"
import Image from "next/image";
import Link from "next/link";
import styles from "./postPreview.module.scss";

type PostPreviewProps = {
    post: Post
}

export default function PostPreview({ post }: PostPreviewProps) {
    const { coverImage, author, slug } = post
    return (
        <div className={styles.post} >
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
            <p>{post.title}</p>

            <p>{author.name}</p>
            <Link href={slug}>Read article</Link>
        </div>
    )
}
