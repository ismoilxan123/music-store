import Link from "next/link";

const MainSpeaker2 = () => {
  return (
    <div className="container main__speaker--2">
      <div className="main__speaker--2__text">
        <h1>ZX7 SPEAKER</h1>
        <Link href={"/products/speakers/5"}>
          <button className="btnborder">See Product</button>
        </Link>
      </div>
    </div>
  );
};

export default MainSpeaker2;
