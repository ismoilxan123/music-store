const CategoryHero = ({
  categoryTitle,
}: {
  categoryTitle: { category: string };
}) => {
  return (
    <div className="bg-[#0E0E0E] mb-[160px]">
      <div className="container pds__hero">
        <h1>{categoryTitle.category}</h1>
      </div>
    </div>
  );
};

export default CategoryHero;
