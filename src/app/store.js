import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../components/api/apiSlice";
import bikeSlice from '../components/bikes/bikeSlice'

export const store = configureStore({
  reducer: {
    Bikes: apiSlice.reducer,
    toggelDetails: bikeSlice.reducer

  },
  middleware: getDefaultMiddlewear => getDefaultMiddlewear().concat(apiSlice.middleware)
})