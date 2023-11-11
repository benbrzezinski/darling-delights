import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { toast } from "react-toastify";
import { Product, ProductPayload } from "../../types";
import products from "../../db/fake-products";

const initialState = {
  items: products,
  basket: [] as Product[],
  isBasketInfoOpen: false,
};

const toastId = "3454654534312675867";

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    toggleInBasket: (state, action: PayloadAction<ProductPayload>) => {
      const product = state.items.find(({ id }) => id === action.payload.id);

      if (product) {
        const i = state.basket.findIndex(({ id }) => id === product.id);

        if (i === -1) {
          product.size = action.payload.size ?? "48";
          product.quantity = action.payload.quantity ?? "1";
          state.basket.push(product);
          state.isBasketInfoOpen = true;
          disableBodyScroll(document.body);
        } else {
          product.size = "";
          product.quantity = "";
          state.basket.splice(i, 1);
          toast.success("Removed from the basket", {
            toastId,
          });
        }
      }
    },
    closeBasketInfo: state => {
      state.isBasketInfoOpen = false;
      enableBodyScroll(document.body);
    },
  },
});

const productsReducer = productsSlice.reducer;
export const { toggleInBasket, closeBasketInfo } = productsSlice.actions;

export default productsReducer;
