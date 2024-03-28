import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout/layout";
import Container from "@/components/Container/container";
import styles from "@/styles/pages/Contact.module.scss";
import { getContactPage } from "../lib/umbraco-heartcore";

export default function contact({ contact }: any) {
    const { name, pageTitle, pageIntro, sectionTitle, bodyCopy } = contact;
    return (
        <>
            <Layout>
                <Head>
                    <title>{name}</title>
                </Head>
                <Container>
                    <section className={styles.section}>
                        <div>
                            <h1 className={styles.header}>{pageTitle}</h1>
                            <p className={styles.bodyCopy}>{pageIntro}</p>
                            <h2 className={styles.header}>{sectionTitle}</h2>
                            <p className={styles.bodyCopy}>{bodyCopy}</p>
                        </div>
                        <aside>
                            <form className={styles.contact}>
                                <label className={styles.label}>
                                    <p>Name</p>
                                </label>
                                <input className={styles.input} type="text" name="name"></input>
                                <label className={styles.label}>
                                    <p>company</p>
                                </label>
                                <input className={styles.input} type="text" name="company"></input>
                                <label className={styles.label}>
                                    <p>Email</p>
                                </label>
                                <input className={styles.input} type="text" name="email"></input>
                                <label className={styles.label}>
                                    <p>Phone Number</p>
                                </label>
                                <input className={styles.input} type="text" name="phone-number"></input>

                                <div className={styles.terms}><input className={styles.checkbox} type="checkbox" name="phone-number"></input>
                                    <label className={styles.label}>
                                        <p>
                                            Tick this box if you’d also like to receive exclusive event invitations, Tinnovation insights and other marketing communication from TheTin.
                                        </p>
                                    </label>
                                </div>
                                <p>We won’t share or sell your personal data and we will keep your details safe. You can unsubscribe at any time if you change your mind.
                                </p>
                                <input className={styles.button} type="button" name="phone-number" value="send"></input>
                            </form>
                        </aside>
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
