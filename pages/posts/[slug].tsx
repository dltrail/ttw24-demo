import Container from "@/components/Container/container";
import Layout from "@/components/Layout/layout";
import { getAllPostsWithSlug, getPost } from "@/lib/umbraco-heartcore";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/pages/postFull.module.scss"
import moment from "moment";
import { longDateFormat } from "@/lib/constants";
import Image from "next/image";

export default function PostFull({ post }: any) {
    const router = useRouter();

    if (!router.isFallback && !post?.slug) {
        return <div>error</div>;
    }

    return (
        <Layout>
            <Head>F
                <title>{post.title}</title>
            </Head>
            <Container>
                {router.isFallback ? (
                    <div>Loading…</div>
                ) : (
                    <>
                        <Link className={styles.backLink} href="/posts">Back to Posts</Link>
                        <article className={styles.blogPost}>
                            <section className={styles.titleBlock}>  <span className={styles.tag}>
                                Insights
                            </span>
                                <h1>{post.title}</h1>
                            </section>
                            <div className={styles.blogHeader}>
                                <span>By {post.authorName}</span>
                                <span>{moment(post.date).utc().format(longDateFormat)}</span>
                                <span>{post.readTime} minute read</span>
                            </div>
                            <div style={{ position: 'relative', width: '100%', height: '100%', marginInline: 'auto' }}>
                        
                                <Image src={post.coverImage.url} alt={post.title} quality={60} priority sizes="100vw" 
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                }}
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <section className={styles.content} dangerouslySetInnerHTML={{ __html: post.content }} />
                        </article>
                    </>
                )}
            </Container>
        </Layout>
    );
}

export async function getStaticPaths() {
    const posts = await getAllPostsWithSlug();
    return {
        paths: posts.map(({ slug }: any) => slug),
        fallback: true,
    };
}

export async function getStaticProps({ params, preview = false }: any) {
    const data = await getPost(params.slug)
    console.log(params.slug)
    return {
        props: {
            preview,
            post: data.post,
        },
    };
}

