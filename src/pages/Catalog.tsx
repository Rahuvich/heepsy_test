import React from "react";
import NavbarWithRouter from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { Category, WebState } from "../@types";
import CategoryCard from "../components/cards/CategoryCard";

function Catalog(props: any) {
  const categories: Category[] = useSelector<WebState, Category[]>(
    (state) => state.categories
  );

  return (
    <div className="flex flex-col mx-5 my-5 space-y-4">
      <Searchbar />
      <div className="bg-red-600 flex flex-col items-center text-white rounded-lg py-7">
        <p className="text-bold text-3xl uppercase">summer sales</p>
        <p>Up to 50% off</p>
      </div>
      {categories.map((category) => (
        <CategoryCard
          name={category.name}
          url={category.category_image}
          category_key={category.category_key}
        />
      ))}
      <NavbarWithRouter />
    </div>
  );
}

export default Catalog;
