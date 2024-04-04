import Container from "@/components/Container/container";
import Layout from "@/components/Layout/layout";
import { getAllPostsWithSlug, getPost } from "@/lib/umbraco-heartcore";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/pages/postFull.module.scss"


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
                            <div className={styles.blogHeader}> <span>{post.author.name}</span> | <span>Date Posted</span></div>
                            <img src={post.coverImage.url} width="100%" />
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

