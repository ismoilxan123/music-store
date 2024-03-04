"use client";
import { useContext, useState } from "react";
import Image from "next/image";
import logo from "../public/logo.svg";
import box from "../public/box.svg";
import line from "../public/line.png";
import hamburger from "../public/hamburger.svg";
import Link from "next/link";
import Savadcha from "../components/Savadcha";
import cancelbtnl from "../public/cancel-btn.svg";
import HamburgerCategory from "../components/HamburgerCategory";
import { cartContext } from "../context/cartContext";
import { ISavadchaProduct } from "../lib/types";

const Header = () => {
  const [show, setShow] = useState(false);
  const [hamburgerShow, setHamburgerShow] = useState(false);
  const contex = useContext(cartContext);

  const cartResult = contex?.cart.reduce(
    (acc, el) => {
      acc.totalCount += el.count;
      acc.totalSumm += el.count * el.price;
      return acc;
    },
    {
      totalCount: 0,
      totalSumm: 0,
    }
  );
  const removeAll = () => {
    contex?.setCart([]);
  };

  return (
    <div className="main__header ">
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
            <div className="savadcha__box">
              <Image className="cursor-pointer" src={box} alt="box" />
              {contex?.cart.length! > 0 && (
                <div className="savadcha__products--number text-white">
                  {cartResult?.totalCount}
                </div>
              )}
            </div>
          )}
        </div>
        <div className={`savadcha__${show ? "show" : "none"}`}>
          <div className="savadcha__titel flex justify-between">
            <h1>cart {contex?.cart.length} </h1>
            <h2 onClick={removeAll}>Remove all</h2>
          </div>
          {contex?.cart.map((product: ISavadchaProduct) => (
            <Savadcha key={product.id} {...product} />
          ))}
          <div className="savadcha__total">
            <h1>TOTAL</h1>
            <h2>$ {cartResult?.totalSumm}</h2>
          </div>
          <Link href={`${contex?.cart.length ? "/checkout" : ""}`}>
            <button className="btnorg w-full">
              {contex?.cart.length ? "checkout" : "no product"}
            </button>
          </Link>
        </div>
      </div>
      <Image src={line} alt="line" />
    </div>
  );
};

export default Header;
