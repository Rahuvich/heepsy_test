import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

function MyNavBar(props: any) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white flex flex-row justify-evenly items-center shadow-xl ">
      <Link to="/" className="my-5 flex flex-col items-center capitalize">
        <FiShoppingCart className="text-3xl" />
        <p>shop</p>
      </Link>
      <Link
        to="/favorites"
        className="my-5 flex flex-col items-center capitalize"
        /* className={
          props.location.pathname === "/about"
            ? "text-gradient font-semibold"
            : "dark:text-gray-300  text-gray-600"
        } */
      >
        <MdFavoriteBorder className="text-3xl" />
        <p>favorites</p>
      </Link>
    </div>
  );
}

const NavbarWithRouter = withRouter(MyNavBar);
export default NavbarWithRouter;
