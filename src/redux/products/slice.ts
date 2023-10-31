import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import products from "../../db/fake-products";

const productsSlice = createSlice({
  name: "products",
  initialState: products,
  reducers: {
    toggleInBasket: (state, action: PayloadAction<string>) => {
      const product = state.find(({ id }) => id === action.payload);
      if (product) product.inBasket = !product.inBasket;
    },
  },
});

const productsReducer = productsSlice.reducer;
export const { toggleInBasket } = productsSlice.actions;

export default productsReducer;
