import Link from "next/link";

const Hero = () => {
  return (
    <div className="main__hero">
      <div className="container hero">
        <div className="hero__text">
          <h2>NEW PRODUCT</h2>
          <h1>XX99 Mark II Headphones</h1>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link href={"/products/headphones/4"}>
            <button className="btnorg">See Product</button>
          </Link>
        </div>
        <div>
          <img
            className="hero__img"
            src="https://s3-alpha-sig.figma.com/img/f84f/9d20/8c3eec8bfe1a8f3b55088c0fade7baa5?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gfUd06781Uwdq70z62CvfmdvRrfvbMHeKyOPVQh~VCaBQKWgzvgY2Bjr0k4YAgXh5jzqpEbv5wO~4StK-H3C~~9tsV8DTFYJ29d~SXMWhKiNvAt4OAeinDiaLGt6SruyRoJCYT1G8ppVBdtzqy8h3yicn6c~OLW97l2MbuisNqlxTOCoFhyQQadVmbZwXDaW-OSfmpmxciV-a5OdS4EH7wtE4ckxQOHUCBuz~IWzK0VGYKp5QS50MjA0uaxuZA6qixy1krc53USoFtgTvk~2U4C02MP0MFofyGI3PSoU53YEJNyjPFUOP99D5t5CN895nSjcTSbHc-666E7cdeujXQ__"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
