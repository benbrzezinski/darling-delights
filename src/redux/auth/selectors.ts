import { RootState } from "../store";

export const selectIsUserAllowed = (state: RootState) =>
  state.auth.isUserAllowed;
