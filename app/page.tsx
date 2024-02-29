import Category from "./layout/Category";
import Hero from "./layout/Hero";
import MainHeadphone from "./layout/MainHeadphone";
import MainSpeaker from "./layout/MainSpeaker";
import MainSpeaker2 from "./layout/MainSpeaker2";

const page = () => {
  return (
    <div>
      <Hero />
      <Category />
      <MainSpeaker />
      <MainSpeaker2 />
      <MainHeadphone />
    </div>
  );
};

export default page;
