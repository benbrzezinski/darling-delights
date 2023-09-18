import { createSlice } from "@reduxjs/toolkit";
import { Action } from "../../types";

const searcherSlice = createSlice({
  name: "searcher",
  initialState: "",
  reducers: {
    setSearcher: (_, action: Action) => action.payload,
  },
});

const searcherReducer = searcherSlice.reducer;
export const { setSearcher } = searcherSlice.actions;

export default searcherReducer;
