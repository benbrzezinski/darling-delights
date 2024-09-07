import { RootState } from "../store";

export const selectProducts = (state: RootState) => state.products.items;

export const selectBasket = (state: RootState) => state.products.basket;

export const selectFavourites = (state: RootState) => state.products.favourites;

export const selectIsBasketInfoOpen = (state: RootState) =>
  state.products.isBasketInfoOpen;

export const selectTotal = (state: RootState) => state.products.total;
