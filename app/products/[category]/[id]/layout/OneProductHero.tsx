"use client";
import Image from "next/image";
import { ISavadchaProduct, oneProductType } from "@/app/lib/types";
import Link from "next/link";
import { useContext } from "react";
import { cartContext } from "@/app/context/cartContext";

const OneProductHero = ({ newArr }: { newArr: oneProductType[] }) => {
  const context = useContext(cartContext);
  const newObj = newArr[0];
  const addCart = (id: number) => {
    let newOne = context?.cart.some((product) => product.id === id);
    if (!newOne) {
      context?.setCart((prev: ISavadchaProduct[]) => [
        ...prev,
        { ...newObj, count: 1 },
      ]);
    }
  };

  const increment = (id: number) => {
    context?.setCart((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, count: product.count + 1 } : product
      )
    );
  };

  const decrement = (id: number) => {
    let cart = context?.cart.slice() || [];
    const count = cart?.find((product) => product.id === id)?.count || 0;
    if (count > 1) {
      cart = cart?.map((product) =>
        product.id === id ? { ...product, count: product.count - 1 } : product
      );
    } else {
      cart = cart?.filter((product) => product.id !== id);
    }
    context?.setCart(cart);
  };

  const getCount = (id: number) => {
    const product = context?.cart.find((product) => product.id === id);
    if (product) {
      return product.count;
    }
    return 1;
  };
  return (
    <div className="container">
      {newArr.map((n, i) => (
        <div key={i} className="mb-40 ">
          <div className="go__back">
            <Link href={`/products/${n.category}`}>
              <h1>Go Back</h1>
            </Link>
          </div>
          <div className="one__product--hero">
            <div className="one__product--img">
              <Image
                width="660"
                height="200"
                src={n.image.desktop}
                alt="headphone"
              />
            </div>
            <div className="one__product--text">
              <h2>{n.new ? "NEW" : "OLD"} PRODUCT</h2>
              <h1>{n.name}</h1>
              <p>{n.description}</p>
              <h3>$ {n.price}</h3>
              <div className="one__product--btns">
                <div className="one__product--counter">
                  <span onClick={() => decrement(n.id)}>-</span>
                  {getCount(n.id)}
                  <span onClick={() => increment(n.id)}>+</span>
                </div>
                <button onClick={() => addCart(n.id)} className="btnorg">
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OneProductHero;
