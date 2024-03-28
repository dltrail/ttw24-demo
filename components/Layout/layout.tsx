import { ReactElement, ReactNode } from "react";
import Logo from "../Logo/logo";
import Meta from "../Meta/Meta";
import Footer from "../Footer/Footer";
import Container from "../Container/container";
import Link from "next/link";
// import Footer from "../components/footer";

type LayoutProps = {
  children: JSX.Element | JSX.Element[]
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Meta />
      <nav className="nav">
      <Link href={"/"}><Logo/></Link>
        <ul>
          <li><Link href={"contact"}>Contact</Link></li>
          <li><Link href={"blog"}>Blog</Link></li>
        </ul>
      </nav>
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </>
  );
}
