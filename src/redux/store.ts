import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/slice";
import filtersReducer from "./filters/slice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    filters: filtersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
