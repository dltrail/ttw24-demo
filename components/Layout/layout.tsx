import { ReactElement, ReactNode } from "react";
import Logo from "../Logo/logo";
import Meta from "../Meta/Meta";
import Footer from "../Footer/Footer";
import Container from "../Container/container";
import Link from "next/link";
import Nav from "../Nav/Nav";
// import Footer from "../components/footer";

type LayoutProps = {
  children: JSX.Element | JSX.Element[]
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Meta />
      <header className="site-header">          
        <Link href={"/"}><Logo /></Link>
        <Nav />
      </header>
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </>
  );
}
