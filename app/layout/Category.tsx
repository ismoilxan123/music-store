import CategoryBox from "../components/CategoryBox";
import headphone from "../public/categoy-headphone.png";
import speaker from "../public/category-speaker.png";
import earphone from "../public/category-earphone.png";
const Category = () => {
  return (
    <div className="container category">
      <CategoryBox img={headphone} title={"headphones"} />
      <CategoryBox img={speaker} title={"speakers"} />
      <CategoryBox img={earphone} title={"earphones"} />
    </div>
  );
};

export default Category;
