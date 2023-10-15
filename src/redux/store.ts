import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/slice";
import filtersReducer from "./filters/slice";
import pageReducer from "./page/slice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    filters: filtersReducer,
    page: pageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
