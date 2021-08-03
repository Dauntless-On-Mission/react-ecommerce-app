import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../../services/products";

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  fetchProducts
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: []
  },
  reducers: {},
  extraReducers: {
    [fetchAllProducts.pending]: state => ({
      ...state,
      loading: true
    }),
    [fetchAllProducts.fulfilled]: (state, action) => ({
      ...state,
      loading: false,
      items: [...state.items, ...action.payload]
    })
  }
});

const { actions, reducer } = productsSlice;

export const { saveItems } = actions;

export default reducer;
