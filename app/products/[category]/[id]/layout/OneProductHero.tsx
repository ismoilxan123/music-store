import Image from "next/image";
import headphone from "../../../../public/one-product-headphone.png";
import { oneProductType } from "@/app/lib/types";
import Link from "next/link";
const OneProductHero = ({ newArr }: { newArr: oneProductType[] }) => {
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
                  <span>-</span>1<span>+</span>
                </div>
                <button className="btnorg">ADD TO CART</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OneProductHero;
