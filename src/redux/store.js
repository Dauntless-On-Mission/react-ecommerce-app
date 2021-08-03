import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slice/products";

const rootReducer = combineReducers({
  products: productsReducer
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true
});

export default store;
