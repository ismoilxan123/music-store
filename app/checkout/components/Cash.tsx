import Image from "next/image";
import cashImg from "../../public/cash.svg";
const Cash = () => {
  return (
    <div className="pay__cash">
      <Image src={cashImg} alt="cach img" />
      <p>
        The Cash on Delivery option enables you to pay in cash when our delivery
        courier arrives at your residence. Just make sure your address is
        correct so that your order will not be cancelled.
      </p>
    </div>
  );
};

export default Cash;
