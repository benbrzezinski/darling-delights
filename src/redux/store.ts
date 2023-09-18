import { configureStore } from "@reduxjs/toolkit";
import searcherReducer from "./searcher/slice";

const store = configureStore({
  reducer: {
    searcher: searcherReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
