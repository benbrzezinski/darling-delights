import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import {
  selectSearcher,
  selectProductType,
  selectSortedPrice,
} from "../filters/selectors";
import { ProductPlacement } from "../../types/enums";

export const selectProducts = (state: RootState) => state.products;

export const selectFilteredProducts = createSelector(
  [selectProducts, selectSearcher, selectProductType, selectSortedPrice],
  (products, searcher, productType, sortedPrice) => {
    const filtered = products
      .filter(({ placement }) => placement.includes(ProductPlacement.Shop))
      .filter(({ name }) =>
        name.toLocaleLowerCase().includes(searcher.toLocaleLowerCase().trim())
      )
      .filter(({ type }) => type.startsWith(productType));

    if (sortedPrice) {
      if (sortedPrice === "asc") {
        return filtered.sort((a, b) => a.price - b.price);
      }

      if (sortedPrice === "desc") {
        return filtered.sort((a, b) => b.price - a.price);
      }
    }

    return filtered;
  }
);
