import Link from "next/link";

const HamburgerCategory = () => {
  return (
    <div className="hamburger__category">
      <h2>
        <Link href={"/"}>home</Link>
      </h2>
      <h2>
        <Link href={"/products/headphones"}>headphones</Link>
      </h2>
      <h2>
        <Link href={"/products/speakers"}>speakers</Link>
      </h2>
      <h2>
        <Link href={"/products/earphones"}>earphones</Link>
      </h2>
    </div>
  );
};

export default HamburgerCategory;
