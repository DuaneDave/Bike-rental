import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../components/api/apiSlice";

export const store = configureStore({
  reducer: {
    Bikes: apiSlice.reducer
  },
  middleware: getDefaultMiddlewear => getDefaultMiddlewear().concat(apiSlice.middleware)
})