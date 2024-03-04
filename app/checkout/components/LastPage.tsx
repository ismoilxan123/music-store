"use client";
import Image from "next/image";
import icon from "../../public/thank-icon.svg";
import CheckoutSavadcha from "./CheckoutSavadcha";
import { useContext } from "react";
import { cartContext } from "@/app/context/cartContext";
import Link from "next/link";
const LastPage = ({ grantSumm }: { grantSumm: number }) => {
  const context = useContext(cartContext);
  return (
    <div className="last__page">
      <Image src={icon} alt="icon" />
      <h6>THANK YOU FOR YOUR ORDER</h6>
      <h4>You will receive an email confirmation shortly.</h4>
      <div className="last__page--total">
        <div className="last__page--total__products">
          {context?.cart.map((product) => (
            <CheckoutSavadcha key={product.id} {...product} />
          ))}
        </div>
        <div className="last__page--total__grant">
          <h1>GRAND TOTAL</h1>
          <h2>$ {grantSumm}</h2>
        </div>
      </div>
      <Link href={"/"}>
        <button onClick={() => context?.setCart([])} className="btnorg w-full">
          BACK TO HOME
        </button>
      </Link>
    </div>
  );
};

export default LastPage;
