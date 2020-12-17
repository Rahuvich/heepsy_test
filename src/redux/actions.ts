import {
  CategoriesActionTypes,
  Category,
  FAILED_ON_GETTING_CATEGORIES,
  FAILED_ON_GETTING_PRODUCTS,
  GET_CATEGORIES,
  GET_PRODUCTS,
  GOT_CATEGORIES,
  GOT_PRODUCTS,
  Product,
  ProductsActionTypes,
} from "../@types";

//* Categories
export function getCategories(): CategoriesActionTypes {
  return {
    type: GET_CATEGORIES,
  };
}

export function gotCategories(categories: Category[]): CategoriesActionTypes {
  return {
    type: GOT_CATEGORIES,
    categories,
  };
}

export function failedGettingCategories(): CategoriesActionTypes {
  return {
    type: FAILED_ON_GETTING_CATEGORIES,
  };
}

//* Products
export function getProducts(category: string): ProductsActionTypes {
  return {
    type: GET_PRODUCTS,
    category,
  };
}

export function gotProducts(products: Product[]): ProductsActionTypes {
  return {
    type: GOT_PRODUCTS,
    products,
  };
}

export function failedGettingProducts(): ProductsActionTypes {
  return {
    type: FAILED_ON_GETTING_PRODUCTS,
  };
}
