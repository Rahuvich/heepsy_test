import React from "react";
import { Product, ProductsActionTypes, WebState } from "../@types";
import { RouteComponentProps } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { fetchProductsFromCategory } from "../redux/middleware";
import NavbarWithRouter from "../components/Navbar";

interface Props extends RouteComponentProps<{ key: string }> {}

function Categories(props: any) {
  const key: string = props.match.params.key;

  const products: Product[] = useSelector<WebState, Product[]>(
    (state) => state.products
  );
  const isLoading: boolean = useSelector<WebState, boolean>(
    (state) => state.isLoading
  );

  const dispatch = useDispatch();
  /* dispatch(fetchProductsFromCategory(key)); */

  return (
    <>
      {isLoading === false &&
        products.map((product) => <p key={product.name}>{product.name}</p>)}
      <NavbarWithRouter />
    </>
  );
}

export default Categories;
