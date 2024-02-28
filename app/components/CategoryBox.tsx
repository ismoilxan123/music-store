import Image from "next/image";
import headPhone from "../public/categoy-headphone.png";
import shopIcon from "../public/shop-icon.svg";

const CategoryBox = () => {
  return (
    <div className="category__box">
      <Image className="categoy__img" src={headPhone} alt="headphone" />
      <h2>HEADPHONES</h2>
      <h3 className="category__shop">
        SHOP <Image src={shopIcon} alt="shop-icon" />
      </h3>
    </div>
  );
};

export default CategoryBox;
