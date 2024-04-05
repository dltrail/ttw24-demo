import { Post } from "@/types"
import styles from "./postContent.module.scss"
import moment from "moment";
import { longDateFormat } from "@/lib/constants";
import Image from "next/image";
import classNames from "classnames";

type PostPageProps = {
  post: Post
}
export default function PostContent({ post }: PostPageProps) {
const {   authorName, id, title, date, readTime, coverImage, content} = post
const {url} = coverImage
  return (
    <>
      {/* Blog Header section */}
      <section className={classNames(styles.titleBlock, styles.section)}>
        <span className={styles.tag}>
          {post.tags}
        </span>
        <h1>{title}</h1>
      </section>

      {/* Blog Meta section */}
      <section className={styles.blogHeader}>
        <span>By {authorName}</span>
        <span>{moment(date).utc().format(longDateFormat)}</span>
        <span>{readTime.toString()} minute read</span>
      </section>

      {/* Blog cover image */}
      <section style={{ position: 'relative', width: '100%', height: '100%', marginInline: 'auto' }}>
        <Image src={url} alt={title} quality={60} priority sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
          width={100}
          height={100}
        />
      </section>

      {/* Blog long text*/}
      <section className={styles.blogContent} dangerouslySetInnerHTML={{ __html: content }} />
    </>
  )
}