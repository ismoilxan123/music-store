import Image from "next/image";
import headphone from "../../public/categoy-headphone.png";
import { FC } from "react";
import { ISavadchaProduct } from "@/app/lib/types";

const CheckoutSavadcha: FC<ISavadchaProduct> = ({
  id,
  image,
  name,
  price,
  count,
}) => {
  return (
    <div className="checkout__oneproduct">
      <div className="rounded-lg bg-[#f1f1f1]">
        <Image width="100" height="80" src={image.desktop} alt={name} />
      </div>
      <div className="checkout__product">
        <h2>{name.slice(0, 13)}</h2>
        <h3>$ {price}</h3>
      </div>
      <h5 className="checkout__product--count">x{count}</h5>
    </div>
  );
};

export default CheckoutSavadcha;
