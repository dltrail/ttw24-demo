import Logo from "../Logo/logo";
import styles from "./Footer.module.scss"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.header}>Going strong since 2001.</p>
            <div className={styles.footerMain}>
                <div><p>Address</p></div>
                <div className={styles.footerNav}>
                <div><p>About us</p></div>
                <div><p>Work</p></div>
                <div><p>Tinnovation</p></div>
                </div>
                <div><p>Footer content</p></div>
            </div>
        </footer>
    );
}