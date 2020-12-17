import React from "react";
import { createBrowserHistory } from "history";
import { MdKeyboardArrowLeft } from "react-icons/md";

function Appbar(props: any) {
  const history = createBrowserHistory();
  return (
    <div className=" h-28 bg-white text-4xl text-gray-900 text-bold capitalize flex flex-row flex-grow  items-center shadow-xl">
      {history.location.pathname !== "/" && (
        <MdKeyboardArrowLeft
          className="cursor-pointer"
          onClick={history.goBack}
        />
      )}
      <span className="flex flex-grow flex-row justify-center">
        {history.location.pathname === "/" ? "Shop" : history.location.pathname}
      </span>
    </div>
  );
}

export default Appbar;
