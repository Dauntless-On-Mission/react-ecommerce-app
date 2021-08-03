import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => {
      // { id: 2}
      const product = { ...action.payload, quantity: 1 };

      // [
      //   { id: 1},
      //   { id: 2, quantity: ++}, <-
      // ]

      const currentItems = state.items.filter(item => item.id === product.id);

      if (currentItems.length > 0) {
        // exist
        const newItems = state.items.map(item => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
        return { ...state, items: newItems };
      } else {
        // not exist
        return { ...state, items: [...state.items, product] };
      }
    },
    clearItems: state => {
      return { ...state, items: [] };
    },
    changeQuantity: (state, action) => {
      const { id, isIncrease } = action.payload;

      const newItems = state.items.map(item => {
        if (item.id === id) {
          return {
            ...item,
            quantity: isIncrease ? item.quantity + 1 : item.quantity - 1
          };
        } else {
          return item;
        }
      });

      return { ...state, items: newItems };
    }
  }
});

const { actions, reducer } = cartSlice;

export const { addItem, changeQuantity, clearItems } = actions;

export default reducer;
