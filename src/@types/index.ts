export interface Category {
  id: number;
  name: string;
  category_key: string;
  category_image: string;
}

export enum Size {
  XL = "XL",
  L = "L",
  M = "M",
  S = "S",
  XS = "XS",
}

export interface Product {
  id: number;
  category: string;
  name: string;
  sizes: Size[];
  price: number;
  image: string;
}

export interface WebState {
  products: Product[];
  categories: Category[];

  favorites: Product[];

  isLoading: boolean;
  hasError: boolean;
  errorMsg?: string;
}

// Categories Actions
export const GET_CATEGORIES = "GET_CATEGORIES";
interface GetCategoriesAction {
  type: typeof GET_CATEGORIES;
}

export const GOT_CATEGORIES = "GOT_CATEGORIES";
interface GotCategoriesAction {
  type: typeof GOT_CATEGORIES;
  categories: Category[];
}

export const FAILED_ON_GETTING_CATEGORIES = "FAILED_ON_GETTING_CATEGORIES";
interface FailedOnGettingCategoriesAction {
  type: typeof FAILED_ON_GETTING_CATEGORIES;
}

export type CategoriesActionTypes =
  | GetCategoriesAction
  | GotCategoriesAction
  | FailedOnGettingCategoriesAction;

// Products Actions
export const GET_PRODUCTS = "GET_PRODUCTS";
interface GetProductsAction {
  type: typeof GET_PRODUCTS;
  category: string;
}

export const GOT_PRODUCTS = "GOT_PRODUCTS";
interface GotProductsAction {
  type: typeof GOT_PRODUCTS;
  products: Product[];
}

export const FAILED_ON_GETTING_PRODUCTS = "FAILED_ON_GETTING_PRODUCTS";
interface FailedOnGettingProductsAction {
  type: typeof FAILED_ON_GETTING_PRODUCTS;
}

export type ProductsActionTypes =
  | GetProductsAction
  | GotProductsAction
  | FailedOnGettingProductsAction;

export type ActionTypes = ProductsActionTypes | CategoriesActionTypes;
