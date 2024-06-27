import { ReactElement, ReactNode } from "react";
import Logo from "../Logo/logo";
import Meta from "../Meta/Meta";
import Footer from "../Footer/Footer";
import Link from "next/link";
import Nav from "../Nav/Nav";
import { usePathname } from 'next/navigation'
import { paths } from "@/lib/constants";

type LayoutProps = {
  children: JSX.Element | JSX.Element[]
}

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname()

  return (
    <>
      <Meta />
      <header className="site-header">          
        <Link href={"/"}>
        <Logo fill={paths.includes(pathname) ? 'white' : 'black'}/>
        </Link>
        <Nav />
      </header>
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </>
  );
}
