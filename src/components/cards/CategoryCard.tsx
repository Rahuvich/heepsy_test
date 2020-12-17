import React from "react";
import { Link } from "react-router-dom";

interface Props {
  url: string;
  name: string;
  category_key: string;
}

function CategoryCard(props: Props) {
  return (
    <Link
      to={`/category/${props.category_key}`}
      className="bg-white h-24 flex flex-row items-center rounded-lg overflow-hidden"
    >
      <p className="w-1/2 pl-10 font-semibold">{props.name}</p>
      <img src={props.url} className="w-1/2 h-full object-cover" alt="" />
    </Link>
  );
}

export default CategoryCard;
