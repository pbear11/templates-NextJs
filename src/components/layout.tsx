import { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

type LayoutProps = {
  children: ReactNode
}

// If you need per-page layouts, check `getLayout`, it will allow you to return a React component for layout.
// Doc link: https://nextjs.org/docs/basic-features/layouts 
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer/>
    </>
  )
}