
// import Link from "next/link";
// import styles from "./nav.module.scss";

// export default function Nav() {
//   return (
//      <nav className={styles.nav}>
//         <ul>
//           {/* <li><Link href={"#"} className={styles.disabled}>About Us</Link></li>
//           <li><Link href={"#"} className={styles.disabled}>What we do</Link></li>
//           <li><Link href={"#"} className={styles.disabled}>Work</Link></li> */}
//           <li><Link href={"/posts"}>Insights</Link></li>
//           <li><Link href={"/contact"}>Contact</Link></li>
//         </ul>
//       </nav>
//   );
// }

import Link from "next/link";
import cn from "classnames";
import styles from "./nav.module.scss";
import { usePathname } from 'next/navigation'
import { paths } from "@/lib/constants";

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className={cn(`${styles.nav}`, `${paths.includes(pathname) ? `${styles.white}` : `${styles.black}`}`)}>
      <ul>
        {/* <li><Link href={"#"} className={styles.disabled}>About Us</Link></li>
        <li><Link href={"#"} className={styles.disabled}>What we do</Link></li>
        <li><Link href={"#"} className={styles.disabled}>Work</Link></li> */}
        <li><Link href={"posts"}>Insights</Link></li>
        <li><Link href={"contact"}>Contact</Link></li>
      </ul>
    </nav>
  );
}