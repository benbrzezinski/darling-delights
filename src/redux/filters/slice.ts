import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType, SortingMethod } from "../../types/enums";

const initialState = {
  searcher: "",
  productType: "" as ProductType,
  sortingMethod: "" as SortingMethod,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearcher: (state, action: PayloadAction<string>) => {
      state.searcher = action.payload;
    },
    setProductType: (state, action: PayloadAction<ProductType>) => {
      state.productType = action.payload;
    },
    setSortingMethod: (state, action: PayloadAction<SortingMethod>) => {
      state.sortingMethod = action.payload;
    },
  },
});

const filtersReducer = filtersSlice.reducer;
export const { setSearcher, setProductType, setSortingMethod } =
  filtersSlice.actions;

export default filtersReducer;
