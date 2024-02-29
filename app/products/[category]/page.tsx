import CategoryHero from "./layout/CategoryHero";

const page = ({ params }: { params: { category: string } }) => {
  return <CategoryHero categoryTitle={params} />;
};

export default page;
