"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "../public/logo.svg";
import box from "../public/box.svg";
import line from "../public/line.png";
import hamburger from "../public/hamburger.svg";
import Link from "next/link";
import Savadcha from "../components/Savadcha";
import cancelbtnl from "../public/cancel-btn.svg";
import Category from "./Category";
import HamburgerCategory from "../components/HamburgerCategory";

const Header = () => {
  const [show, setShow] = useState(false);
  const [hamburgerShow, setHamburgerShow] = useState(false);
  return (
    <div className="main__header">
      <div className="container header">
        <div className="flex items-center gap-10">
          {hamburgerShow ? (
            <Image
              onClick={() => setHamburgerShow(false)}
              className="cursor-pointer"
              src={cancelbtnl}
              alt="cancelbtn"
            />
          ) : (
            <Image
              onClick={() => setHamburgerShow(true)}
              className="hamburger"
              src={hamburger}
              alt="hamburger"
            />
          )}

          <Link href={"/"}>
            <Image src={logo} alt="logo" />
          </Link>
        </div>
        {hamburgerShow ? <HamburgerCategory /> : ""}
        <div className="navigation">
          <h2>
            <Link href={"/"}>home</Link>
          </h2>
          <h2>
            <Link href={"/products/headphones"}>headphones</Link>
          </h2>
          <h2>
            <Link href={"/products/speakers"}>speakers</Link>
          </h2>
          <h2>
            <Link href={"/products/earphones"}>earphones</Link>
          </h2>
        </div>
        <div onClick={() => setShow(!show)}>
          {show ? (
            <Image
              className="cursor-pointer"
              src={cancelbtnl}
              alt="cancelbtn"
            />
          ) : (
            <Image className="cursor-pointer" src={box} alt="box" />
          )}
        </div>
        <Savadcha show={show} />
      </div>
      <Image src={line} alt="line" />
    </div>
  );
};

export default Header;
