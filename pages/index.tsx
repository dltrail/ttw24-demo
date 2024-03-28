import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/pages/Home.module.scss";
import Layout from "@/components/Layout/layout";
import { getHomePage } from "../lib/umbraco-heartcore";
import Container from "@/components/Container/container";
import { TwoColumnBlock2 } from "@/components/TwoColumnBlock/TwoColumnBlock2";

export default function Home({ homepage }: any) {
  const { title, heroText, bodyCopy, exploreCopy, image, blocks } = homepage;

  return (
    <>
      <Layout>
        <Head>
          <title>{title}</title>
        </Head>
        <Container>
          <section className={styles.section}>
            <h1 className={styles.header}>{heroText}</h1>
          </section>
          <section className={styles.section}>
            <div dangerouslySetInnerHTML={{ __html: bodyCopy }} />
          </section>
          <section className={styles.section}>
            <TwoColumnBlock2 content={blocks[0].content} />
            <div style={{ position: 'relative', maxWidth: '462px', maxHeight: '540px', width: '100%', height: '100%', marginInline: 'auto' }}>
              <Image
                src={image.url}
                alt="Picture of the author"
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
