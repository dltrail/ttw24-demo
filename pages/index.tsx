import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import Layout from "@/components/layout";
import { getHomePage } from "../lib/umbraco-heartcore";
import Container from "@/components/container";

export default function Home({ homepage }: any) {
  const { title, heroText, bodyCopy, exploreCopy, image } = homepage;
  return (
    <>
      <Layout>
        <Head>
          <title>{title}</title>
        </Head>
        <Container className={styles.container}>
          <section className={styles.section}> 
              <h1 className={styles.header}>{heroText}</h1>
          </section>
          <section className={styles.section}> 
            <div dangerouslySetInnerHTML={{ __html: bodyCopy }} />
          </section>
          <section className={styles.section}> 
          <div style={{position:'relative'}}>
            <Image
              src={image[0].url}
              alt="Picture of the author"
              quality={60}
              priority
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
              }}
              width={image[0].crops[0].width}
              height={image[0].crops[0].height}
            />
          </div>
          </section>
          <section className={styles.section}>
            <div dangerouslySetInnerHTML={{ __html: exploreCopy }} />
          </section>
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
