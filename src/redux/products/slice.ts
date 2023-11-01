import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types";
import products from "../../db/fake-products";

const initialState = {
  items: products,
  basket: [] as Product[],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    toggleInBasket: (state, action: PayloadAction<string>) => {
      const product = state.items.find(({ id }) => id === action.payload);

      if (product) {
        const i = state.basket.findIndex(({ id }) => id === product.id);

        if (i === -1) {
          state.basket.push(product);
        } else {
          state.basket.splice(i, 1);
        }
      }
    },
  },
});

const productsReducer = productsSlice.reducer;
export const { toggleInBasket } = productsSlice.actions;

export default productsReducer;
