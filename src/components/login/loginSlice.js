import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLogedIn: false };

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    onlogin(state) {
      state.isLogedIn = true;
    },
    onlogout(state) {
      state.isLogedIn = false;
    },
  },
});
export const { onlogin, onlogout } = loginSlice.actions;
export default loginSlice.reducer;
