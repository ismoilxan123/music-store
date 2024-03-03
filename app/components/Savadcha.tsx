import Image from "next/image";
import headphone from "../public/hero-headphone.png";
const Savadcha = ({ show }: { show: boolean }) => {
  return (
    <div className={`savadcha__${show ? "show" : "none"}`}>
      <div className="savadcha__titel flex justify-between">
        <h1>cart (3)</h1>
        <h2>Remove all</h2>
      </div>
      <div className="flex items-center justify-between mb-8 ">
        <div className=" p-3 rounded-lg bg-[#F1F1F1]">
          <Image width="36" height="40" src={headphone} alt="headphone" />
        </div>
        <div className="savadcha__product--info">
          <h1>XX99 MK II</h1>
          <h2>$ 2,999</h2>
        </div>
        <div className=" savadcha__counter flex gap-3 p-[7px_15px] bg-[#F1F1F1]">
          <span>-</span>
          <h1>1</h1>
          <span>+</span>
        </div>
      </div>
      <div className="savadcha__total">
        <h1>TOTAL</h1>
        <h2>$ 5,396</h2>
      </div>
      <button className="btnorg w-full">checkout</button>
    </div>
  );
};

export default Savadcha;
