import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isUserAllowed: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsUserAllowed: (state, action: PayloadAction<boolean>) => {
      state.isUserAllowed = action.payload;
    },
  },
});

const authReducer = authSlice.reducer;
export const { setIsUserAllowed } = authSlice.actions;
export default authReducer;
