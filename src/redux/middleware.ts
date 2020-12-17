import {
  failedGettingCategories,
  failedGettingProducts,
  getCategories,
  getProducts,
  gotCategories,
  gotProducts,
} from "./actions";
import axios, { AxiosResponse } from "axios";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { Category, Product, WebState } from "../@types";

const axiosServer = axios.create({
  baseURL: "http://localhost:3001/",
});

// Fetch categories
export function fetchCategories(): ThunkAction<
  void,
  WebState,
  unknown,
  Action<string>
> {
  return async function (dispatch) {
    dispatch(getCategories());

    return axiosServer
      .get("categories")
      .then((result: AxiosResponse<any>) => {
        const categories: Category[] = result.data;
        console.log(`Categories: ${categories}`);

        return dispatch(gotCategories(categories));
      })
      .catch((error) => {
        return dispatch(failedGettingCategories());
      });
  };
}

export function fetchProductsFromCategory(
  key: string
): ThunkAction<void, WebState, unknown, Action<string>> {
  return async function (dispatch) {
    
    dispatch(getProducts(key));

    return axiosServer
      .get(`products?category=${key}`)
      .then((result: AxiosResponse<any>) => {
        const products: Product[] = result.data;

        return dispatch(gotProducts(products));
      })
      .catch((error) => {
        return dispatch(failedGettingProducts());
      });
  };
}
