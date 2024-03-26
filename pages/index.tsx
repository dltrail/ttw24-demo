import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/layout";
import { getHomePage } from "../lib/umbraco-heartcore";
import Container from "@/components/container";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ homepage }: any) {
  const { title, heroText, bodyCopy, exploreCopy, image } = homepage;

  return (
    <>
      <Layout>
        <Head>
          <title>{title}</title>
        </Head>
        <Container>
          <h1>{heroText}</h1>
          <div dangerouslySetInnerHTML={{ __html: bodyCopy }} />
          <div dangerouslySetInnerHTML={{ __html: exploreCopy }} />
          <Image
            src={image[0].url}
            alt="test"
            width="100"
            height="100"
          />
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const homepage = await getHomePage();
  return {
    props: {
      homepage,
    },
  };
}
