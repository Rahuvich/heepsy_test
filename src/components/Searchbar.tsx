import React from "react";
import { BsSearch } from "react-icons/bs";

function Searchbar(props: any) {
  return (
    <div className="bg-white rounded-full w-full text-gray-500 px-4 py-2 flex flex-row items-center space-x-5">
      <BsSearch className="inline-block" />
      <span>Search</span>
    </div>
  );
}

export default Searchbar;
