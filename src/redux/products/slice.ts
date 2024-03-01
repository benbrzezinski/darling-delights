import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { toast } from "react-toastify";
import { nanoid } from "nanoid";
import { Product, ProductPayload } from "../../types";
import validateSize from "../../utils/validateSize";
import validateQuantity from "../../utils/validateQuantity";
import products from "../../db/products";

const toastId = nanoid();

const initialState = {
  items: products,
  basket: [] as Product[],
  favourites: [] as Product[],
  isBasketInfoOpen: false,
  total: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    toggleInBasket: (state, action: PayloadAction<ProductPayload>) => {
      const product = state.items.find(({ id }) => id === action.payload.id);

      if (product) {
        const i = state.basket.findIndex(({ id }) => id === product.id);

        if (i === -1) {
          const productToBasket = {
            ...product,
            size: validateSize(action.payload.size),
            quantity: validateQuantity(action.payload.quantity),
          };

          state.basket.push(productToBasket);
          state.isBasketInfoOpen = true;
          disableBodyScroll(document.body);
        } else {
          state.basket.splice(i, 1);
          toast.success("Removed from the basket", {
            toastId,
            autoClose: 5000,
          });
        }
      }
    },
    toggleFavourites: (state, action: PayloadAction<string>) => {
      const product = state.items.find(({ id }) => id === action.payload);

      if (product) {
        const i = state.favourites.findIndex(({ id }) => id === product.id);

        if (i === -1) {
          state.favourites.push(product);
        } else {
          state.favourites.splice(i, 1);
        }
      }
    },
    addToBasket: (state, action: PayloadAction<ProductPayload>) => {
      const product = state.items.find(({ id }) => id === action.payload.id);

      if (product) {
        const productToBasket = {
          ...product,
          size: validateSize(action.payload.size),
          quantity: validateQuantity(action.payload.quantity),
        };

        state.basket.push(productToBasket);
      }
    },
    closeBasketInfo: state => {
      state.isBasketInfoOpen = false;
      enableBodyScroll(document.body);
    },
    setTotal: (state, action: PayloadAction<string>) => {
      state.total = action.payload;
    },
    resetBasket: state => {
      state.basket = [];
      state.total = "";
    },
    resetFavourites: state => {
      state.favourites = [];
    },
  },
});

const productsReducer = productsSlice.reducer;

export const {
  toggleInBasket,
  toggleFavourites,
  addToBasket,
  closeBasketInfo,
  setTotal,
  resetBasket,
  resetFavourites,
} = productsSlice.actions;

export default productsReducer;
