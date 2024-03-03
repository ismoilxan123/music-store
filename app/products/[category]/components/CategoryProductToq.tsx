import { oneProductType } from "@/app/lib/types";
import Image from "next/image";
import Link from "next/link";

const CategoryProductToq = ({ data }: { data: oneProductType }) => {
  return (
    <div className="container category__product">
      <div className="mb-36 category__product">
        <div className="category__product--img">
          <Image
            width="400"
            height="300"
            className="category__product--only--img"
            src={data.image.desktop}
            alt="headphone"
          />
        </div>
        <div className="category__product--text">
          <h2>{data.new ? "NEW " : "OLD"} PRODUCT</h2>
          <h1>{data.name}</h1>
          <p>{data.description}</p>
          <Link href={`/products/${data.category}/${data.id}`}>
            <button className="btnorg">See Product</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryProductToq;
