import Image from "next/image";
import headphone from "../public/main-hadphone.png";
const MainHeadphone = () => {
  return (
    <div className="container main__headphone">
      <Image
        className="mainHeadphone"
        // width="540"
        src={headphone}
        alt="headphone"
      />
      <div className="main__headphone--text">
        <h1>YX1 EARPHONES</h1>
        <button className="btnborder">See Product</button>
      </div>
    </div>
  );
};

export default MainHeadphone;
