import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slice/products";
import cartReducer from "./slice/cart";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true
});

export default store;
