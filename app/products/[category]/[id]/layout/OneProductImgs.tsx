import Image from "next/image";
import productImg1 from "../../../../public/one-prodcut-img-1.png";
import productImg2 from "../../../../public/one-prodcut-img-2.png";
import productImg3 from "../../../../public/one-product-img-3.png";
import { oneProductType } from "@/app/lib/types";
const OneProductImgs = ({ newArr }: { newArr: oneProductType[] }) => {
  return (
    <div className="container">
      {newArr.map((d, i) => (
        <div key={i} className="mb-48 one__product--imgs">
          <div className="opifirst">
            <Image
              width={445}
              height={280}
              className="one__product--img__grid mb-7"
              src={d.gallery.first.desktop}
              alt="procut img"
            />
            <Image
              width={445}
              height={280}
              className="one__product--img__grid"
              src={d.gallery.second.desktop}
              alt="procut img"
            />
          </div>
          <Image
            width={635}
            height={592}
            className="one__product--img__grid one__product--imgs3"
            src={d.gallery.third.desktop}
            alt="procut img"
          />
        </div>
      ))}
    </div>
  );
};

export default OneProductImgs;
