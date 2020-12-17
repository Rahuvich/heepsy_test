
import { Category, GET_CATEGORIES, WebState } from "../@types";
import { getCategories, gotCategories } from "../redux/actions";
import { reducer } from "../redux/reducers";

const initialState :WebState= {
    products: [],
    categories: [],
    favorites: [],
    isLoading: false,
    hasError: false,
  };

  const categories :Category[]= [
{
  id: 0,
  name: 'a',
  category_key: 'string',
  category_image: 'sw'}
  ]
  

test('Get categories', () => {

   

    expect(reducer(initialState,getCategories() 
    )).toStrictEqual(
        {
            products: [],
            categories: [],
            favorites: [],
            isLoading: true,
            hasError: false,
          }
    )
})

test('Got categories', () => {


    expect(reducer(initialState,gotCategories(categories)
    )).toStrictEqual(
        {
            products: [],
            categories: categories,
            favorites: [],
            isLoading: false,
            hasError: false,
          }
    )
})