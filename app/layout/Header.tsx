import Image from "next/image";
import logo from "../public/logo.svg";
import box from "../public/box.svg";
import line from "../public/line.png";
import hamburger from "../public/hamburger.svg";
import Link from "next/link";
const Header = () => {
  return (
    <div className="main__header">
      <div className="container header">
        <div className="flex items-center gap-10">
          <Image className="hamburger" src={hamburger} alt="hamburger" />
          <Link href={"/"}>
            <Image src={logo} alt="logo" />
          </Link>
        </div>
        <div className="navigation">
          <h2>
            <Link href={"/"}>home</Link>
          </h2>
          <h2>
            <Link href={"/products/headphone"}>headphone</Link>
          </h2>
          <h2>
            <Link href={"/products/speaker"}>speaker</Link>
          </h2>
          <h2>
            <Link href={"/products/earhpone"}>earphone</Link>
          </h2>
        </div>
        <Image src={box} alt="box" />
      </div>
      <Image src={line} alt="line" />
    </div>
  );
};

export default Header;
