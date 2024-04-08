import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/pages/Home.module.scss";
import Layout from "@/components/Layout/layout";
import { getHomePage } from "../lib/umbraco-heartcore";
import Container from "@/components/Container/container";
import ExploreTinnovation from "@/components/FromCurrent/ExploreTinnovation/ExploreTinnovation";
import ChatBlock from "@/components/ChatBlock/ChatBlock";
import {getBlocks2} from "@/dynamic-component.generator"

export default function Home({ homepage }: any) {
  const { title, heroText, bodyCopy, exploreCopy, image, blocks } = homepage;

const data = homepage.blocks
  return (
    <>
      <Layout>
        <Head>
          <title>{title}</title>
        </Head>
        <Container>
          <section className={styles.pageHeader}>
            <h1 className={styles.header}>{heroText}</h1>
          </section>
          <section className={styles.section}dangerouslySetInnerHTML={{ __html: bodyCopy }} />
          <section className={styles.section}>
            <div style={{ position: 'relative', maxWidth: '462px', maxHeight: '540px', width: '100%', height: '100%', marginInline: 'auto' }}>
              <Image
                src={image.url}
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
            </div>
          </section>
          <section className={styles.section} dangerouslySetInnerHTML={{ __html: exploreCopy }}/>
          <ExploreTinnovation/>

          {getBlocks2(data)}
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
