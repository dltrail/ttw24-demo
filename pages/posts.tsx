import Head from "next/head";
import { Post } from "@/types";
import { getAllPosts } from "../lib/umbraco-heartcore";
import Layout from "@/components/Layout/layout";
import Container from "@/components/Container/container";
import PostPreview from "@/components/PostPreview/PostPreview";
import styles from "@/styles/pages/posts.module.scss"

type BlogsProps = {
    posts: Post[]
};

export default function Posts({ posts }: BlogsProps) {
    return (
        <Layout>
            <Head>
                <title>Insights</title>
            </Head>
            <Container>
                <section className={styles.posts}>
                    {posts.map((post: Post) => (
                        <PostPreview post={post} key={post.id} />
                    ))}
                </section>
            </Container>
        </Layout>
    );
}

export async function getStaticProps() {
    const posts = await getAllPosts();
    return {
        props: {
            posts,
        },
    };
}