import {
  ActionTypes,
  CategoriesActionTypes,
  FAILED_ON_GETTING_CATEGORIES,
  FAILED_ON_GETTING_PRODUCTS,
  GET_CATEGORIES,
  GET_PRODUCTS,
  GOT_CATEGORIES,
  GOT_PRODUCTS,
  WebState,
} from "../@types";

const initialState: WebState = {
  products: [],
  categories: [],
  favorites: [],
  isLoading: false,
  hasError: false,
};

export function reducer(
  prevState = initialState,
  action: ActionTypes
): WebState {
  switch (action.type) {
    case GET_CATEGORIES:
      return Object.assign({}, prevState, {
        isLoading: true,
        hasError: false,
      });
    case GOT_CATEGORIES:
      return Object.assign({}, prevState, {
        isLoading: false,
        categories: action.categories,
        hasError: false,
      });
    case FAILED_ON_GETTING_CATEGORIES:
      return Object.assign({}, prevState, {
        isLoading: false,
        hasError: true,
        categories: [],
      });

    case GET_PRODUCTS:
      return Object.assign({}, prevState, {
        isLoading: true,
        hasError: false,
      });
    case GOT_PRODUCTS:
      return Object.assign({}, prevState, {
        isLoading: false,
        products: action.products,
        hasError: false,
      });
    case FAILED_ON_GETTING_PRODUCTS:
      return Object.assign({}, prevState, {
        isLoading: false,
        hasError: true,
        products: [],
      });

    default:
      return prevState;
  }
}
