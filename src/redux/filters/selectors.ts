import { RootState } from "../store";

export const selectSearcher = (state: RootState) => state.filters.searcher;

export const selectProductType = (state: RootState) =>
  state.filters.productType;

export const selectSortedPrice = (state: RootState) =>
  state.filters.sortedPrice;
