import { ReactElement, ReactNode } from "react";
import Logo from "../Logo/logo";
import Meta from "../Meta/Meta";
import Footer from "../Footer/Footer";
import Container from "../Container/container";
// import Footer from "../components/footer";

type LayoutProps = {
  children: JSX.Element | JSX.Element[]
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
       <Meta />
        <main className="main-content">
         <Logo />
        {children}
        </main>
      <Footer />
    </>
  );
}
