"use client";
import "./globals.css";
import Header from "./layout/Header";
import Foot from "./layout/Foot";
import Footer from "./layout/Footer";
import { cartContext } from "./context/cartContext";
import { useState } from "react";
import { ISavadchaProduct } from "./lib/types";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [cart, setCart] = useState<ISavadchaProduct[]>([]);
  return (
    <html lang="en">
      <body>
        <cartContext.Provider value={{ cart, setCart }}>
          <Header />
          {children}
          <Foot />
          <Footer />
        </cartContext.Provider>
      </body>
    </html>
  );
}
