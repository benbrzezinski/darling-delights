import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import {
  selectSearcher,
  selectProductType,
  selectSortingMethod,
} from "../filters/selectors";
import { ProductPlacement, SortingMethod } from "../../types/enums";

export const selectProducts = (state: RootState) => state.products.items;

export const selectBasket = (state: RootState) => state.products.basket;

export const selectFavourites = (state: RootState) => state.products.favourites;

export const selectIsBasketInfoOpen = (state: RootState) =>
  state.products.isBasketInfoOpen;

export const selectTotal = (state: RootState) => state.products.total;

export const selectFilteredProducts = createSelector(
  [selectProducts, selectSearcher, selectProductType, selectSortingMethod],
  (products, searcher, productType, sortingMethod) => {
    const filtered = products.filter(
      ({ placement, name, type }) =>
        placement.includes(ProductPlacement.Shop) &&
        name
          .toLocaleLowerCase()
          .includes(searcher.toLocaleLowerCase().trim()) &&
        type.startsWith(productType)
    );

    switch (sortingMethod) {
      case SortingMethod.Default:
        return filtered;

      case SortingMethod.Ascending:
        return filtered.sort((a, b) => a.price - b.price);

      case SortingMethod.Descending:
        return filtered.sort((a, b) => b.price - a.price);

      case SortingMethod.Alphabetically:
        return filtered.sort((a, b) => a.name.localeCompare(b.name));

      case SortingMethod.NonAlphabetically:
        return filtered.sort((a, b) => b.name.localeCompare(a.name));

      default:
        return filtered;
    }
  }
);
