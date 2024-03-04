import Link from "next/link";
import Image from "next/image";
import homeIcon from "../public/home.svg";
import headphoneIcon from "../public/headphone.svg";
import speakerIcon from "../public/speaker.svg";
import earphoneIcon from "../public/earphone.svg";

const HamburgerCategory = () => {
  return (
    <div className="hamburger__category">
      <div className="flex items-center gap-2">
        <Image src={homeIcon} alt="icon" />
        <h2>
          <Link href={"/"}>home</Link>
        </h2>
      </div>
      <div className="flex items-center gap-2">
        <Image src={headphoneIcon} alt="icon" />
        <h2>
          <Link href={"/products/headphones"}>headphones</Link>
        </h2>
      </div>
      <div className="flex items-center gap-2">
        <Image src={speakerIcon} alt="icon" />
        <h2>
          <Link href={"/products/speakers"}>speakers</Link>
        </h2>
      </div>
      <div className="flex items-center gap-2">
        <Image src={earphoneIcon} alt="icon" />
        <h2>
          <Link href={"/products/earphones"}>earphones</Link>
        </h2>
      </div>
    </div>
  );
};

export default HamburgerCategory;
