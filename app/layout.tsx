import Head from "next/head";
import "./globals.css";
import Header from "./layout/Header";
import Foot from "./layout/Foot";
import Footer from "./layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Foot />
        <Footer />
      </body>
    </html>
  );
}
