import Image from "next/image";
import footImg from "../public/foot-img.png";
import footTablet from "../public/foot-tablet-img.png";
import footMobil from "../public/foot-mobil.png";
const Foot = () => {
  return (
    <div className="container foot">
      <Image className="foot--mobile" src={footMobil} alt="foot mobil" />
      <Image className="foot__tablet--img" src={footTablet} alt="foot img" />
      <div className="foot__text">
        <h1>
          Bringing you the <span>best</span> audio gear
        </h1>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <Image className="foot__img" src={footImg} alt="foot img" />
    </div>
  );
};

export default Foot;
