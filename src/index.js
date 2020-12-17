import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./redux/reducers";
import { fetchCategories } from "./redux/middleware";

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

store.dispatch(fetchCategories());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
