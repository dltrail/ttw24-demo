
import Link from "next/link";
import styles from "./nav.module.scss";

export default function Nav() {
  return (
     <nav className={styles.nav}>
        <ul>
          <li><Link href={"#"} className={styles.disabled}>About Us</Link></li>
          <li><Link href={"#"} className={styles.disabled}>What we do</Link></li>
          <li><Link href={"#"} className={styles.disabled}>Work</Link></li>
          <li><Link href={"blog"}>Insights</Link></li>
          <li><Link href={"contact"}>Contact</Link></li>
        </ul>
      </nav>
  );
}