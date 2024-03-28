import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/layout";
import Container from "@/components/container";
import styles from "@/styles/pages/Contact.module.scss";
import { getContactPage } from "../lib/umbraco-heartcore";

export default function contact({ contact }: any) {
    const { name, pageTitle } = contact;
    return (
        <>
            <Layout>
                <Head>
                    <title>{name}</title>
                </Head>
                <Container className={styles.container}>
                    <section className={styles.section}>
                        <h1 className={styles.header}>{pageTitle}</h1>
                    </section>
                </Container>
            </Layout>
        </>
    );
}

export async function getStaticProps() {
    const contact = await getContactPage();
    return {
        props: {
            contact,
        },
    };
}
