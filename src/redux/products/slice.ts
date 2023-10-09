import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import products from "../../db/fake-products";

const productsSlice = createSlice({
  name: "products",
  initialState: products,
  reducers: {
    toggleInBusket: (state, action: PayloadAction<string>) => {
      const product = state.find(({ id }) => id === action.payload);
      if (product) product.inBusket = !product.inBusket;
    },
  },
});

const productsReducer = productsSlice.reducer;
export const { toggleInBusket } = productsSlice.actions;

export default productsReducer;
