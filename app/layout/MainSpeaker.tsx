import Image from "next/image";

import mainSpeaker from "../public/main-speaker.png";
import Link from "next/link";

const MainSpeaker = () => {
  return (
    <div className="container main__speaker">
      <Image
        className="main__speaker--img"
        src={mainSpeaker}
        alt="main speaker"
      />
      <div className="main__speaker--text">
        <h1>ZX9 SPEAKER</h1>
        <p>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Link href={"/products/speakers/6"}>
          <button className="btnblack">See Product</button>
        </Link>
      </div>
    </div>
  );
};

export default MainSpeaker;
