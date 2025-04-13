import React from "react";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Footer from "@/components/(footer)/Footer";
import FooterMobile from "../(mobile)/FooterMobile";
// import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="font-iransans overflow-x-hidden">
      <Header />
      <NavBar />
      {children}
      <Footer />
      <FooterMobile />
    </section>
  );
}
