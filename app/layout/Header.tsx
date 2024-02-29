import Image from "next/image";
import logo from "../public/logo.svg";
import box from "../public/box.svg";
import line from "../public/line.png";
import hamburger from "../public/hamburger.svg";
const Header = () => {
  return (
    <div className="main__header">
      <div className="container header">
        <div className="flex items-center gap-10">
          <Image className="hamburger" src={hamburger} alt="hamburger" />
          <Image src={logo} alt="logo" />
        </div>
        <div className="navigation">
          <h2>home</h2>
          <h2>headphones</h2>
          <h2>speakers</h2>
          <h2>earphones</h2>
        </div>
        <Image src={box} alt="box" />
      </div>
      <Image src={line} alt="line" />
    </div>
  );
};

export default Header;
