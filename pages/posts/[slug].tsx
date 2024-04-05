import Container from "@/components/Container/container";
import Layout from "@/components/Layout/layout";
import { getAllPostsWithSlug, getPost } from "@/lib/umbraco-heartcore";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import PostContent from "@/components/PostPage/PostContent";

export default function PostFull({ post }: any) {
    const router = useRouter();

    if (!router.isFallback && !post?.slug) {
    // #TODO: Create page not found (?)
        return <div>error</div>;
    }
    return (
        <Layout>
            <Head>
                <title>{post.title}</title>
            </Head>
            <Container>
                {router.isFallback ? (
                    <div>Loading…</div>
                ) : (
                    <>
                        <Link className="backLink" href="/posts">Back to Posts</Link>
                        <article>
                           <PostContent post={post} key={post.id}/>
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
    return {
        props: {
            preview,
            post: data.post,
        },
    };
}

