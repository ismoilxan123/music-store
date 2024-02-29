import Image from "next/image";
import logo from "../public/logo.svg";
import facebook from "../public/facebook.svg";
import twitter from "../public/twitter.svg";
import instagram from "../public/instagram.svg";
const Footer = () => {
  return (
    <div className="main__footer">
      <div className="container footer">
        <div className="footer__navigation">
          <Image src={logo} alt="logo" />
          <div className="f__navigation">
            <h2>home</h2>
            <h2>headphones</h2>
            <h2>speakers</h2>
            <h2>earphones</h2>
          </div>
        </div>
        <div className="footer__title">
          <div className="footer__text">
            <p>
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we're open 7 days a week.
            </p>
            <h2>Copyright 2021. All Rights Reserved</h2>
          </div>
          <div className="footer__media">
            <Image className="media" src={facebook} alt="facebook" />
            <Image className="media" src={twitter} alt="twitter" />
            <Image className="media" src={instagram} alt="instagram" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
