import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const pageSlice = createSlice({
  name: "page",
  initialState: 1,
  reducers: {
    setPage: (_, action: PayloadAction<number>) => {
      return action.payload;
    },
  },
});

const pageReducer = pageSlice.reducer;
export const { setPage } = pageSlice.actions;

export default pageReducer;
