import Image from "next/image";
import { FC, useContext } from "react";
import { ISavadchaProduct } from "../lib/types";
import { cartContext } from "../context/cartContext";

const Savadcha: FC<ISavadchaProduct> = ({ id, image, name, price, count }) => {
  const context = useContext(cartContext);

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

  return (
    <div className="flex items-center justify-between mb-8 ">
      <div className=" p-3 rounded-lg bg-[#F1F1F1]">
        <Image width="36" height="40" src={image.desktop} alt="headphone" />
      </div>
      <div className="savadcha__product--info">
        <h1>{name.slice(0, 12)}</h1>
        <h2>$ {price}</h2>
      </div>
      <div className=" savadcha__counter flex gap-3 p-[7px_15px] bg-[#F1F1F1]">
        <span onClick={() => decrement(id)}>-</span>
        <h1>{count}</h1>
        <span onClick={() => increment(id)}>+</span>
      </div>
    </div>
  );
};

export default Savadcha;
