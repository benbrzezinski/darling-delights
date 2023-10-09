import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  searcher: "",
  productType: "",
  sortedPrice: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearcher: (state, action: PayloadAction<string>) => {
      state.searcher = action.payload;
    },
    setProductType: (state, action: PayloadAction<string>) => {
      state.productType = action.payload;
    },
    setSortedPrice: (state, action: PayloadAction<string>) => {
      state.sortedPrice = action.payload;
    },
  },
});

const filtersReducer = filtersSlice.reducer;
export const { setSearcher, setProductType, setSortedPrice } =
  filtersSlice.actions;

export default filtersReducer;
