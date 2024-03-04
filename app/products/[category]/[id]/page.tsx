"use client";
import OneProductFeatures from "./layout/OneProductFeatures";
import OneProductHero from "./layout/OneProductHero";
import OneProductImgs from "./layout/OneProductImgs";
import data from "../../../data.json";
import { useEffect, useState } from "react";

const Page = ({ params }: { params: { id: number } }) => {
  const [newArr, setNewArr] = useState([]);
  function arr() {
    let categoryArr: any = data.filter((d) => d.id === Number(params.id));
    setNewArr(categoryArr);
  }
  useEffect(() => {
    arr();
  }, []);

  return (
    <div>
      <OneProductHero newArr={newArr} />
      <OneProductFeatures newArr={newArr} />
      <OneProductImgs newArr={newArr} />
    </div>
  );
};

export default Page;
