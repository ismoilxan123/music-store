import Image from "next/image";
import shopIcon from "../public/shop-icon.svg";
import Link from "next/link";

interface MyComponentProps {
  title: string;
  img: string | any;
}
const CategoryBox: React.FC<MyComponentProps> = ({ img, title }) => {
  return (
    <div className="category__box">
      <Image className="categoy__img" src={img} alt="headphone" />
      <h2>{title}</h2>
      <Link href={`/products/${title}`}>
        <h3 className="category__shop">
          SHOP <Image src={shopIcon} alt="shop-icon" />
        </h3>
      </Link>
    </div>
  );
};

export default CategoryBox;
