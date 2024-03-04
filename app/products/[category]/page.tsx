"use client";
import CategoryProductToq from "./components/CategoryProductToq";
import CategoryProductJuft from "./components/CategoryProductJuft";
import CategoryHero from "./layout/CategoryHero";
import data from "../../data.json";
import { useEffect, useState } from "react";
import { oneProductType } from "@/app/lib/types";

const Page = ({ params }: { params: { category: string } }) => {
  const [newArr, setNewArr] = useState([]);
  function arr() {
    let categoryArr: oneProductType[] | any = data.filter(
      (d) => d.category === params.category
    );
    setNewArr(categoryArr);
  }
  useEffect(() => {
    arr();
  }, []);
  return (
    <div>
      <CategoryHero categoryTitle={params} />
      {newArr.map((d, i) =>
        i % 2 === 0 ? (
          <CategoryProductToq key={i} data={d} />
        ) : (
          <CategoryProductJuft key={i} data={d} />
        )
      )}
    </div>
  );
};

export default Page;
