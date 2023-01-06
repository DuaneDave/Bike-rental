import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../components/api/apiSlice";
import colorSwitchSlice from '../components/colorSwitch/colorSwitch'

export const store = configureStore({
  reducer: {
    colorswitch : colorSwitchSlice.reducer,
    Bikes: apiSlice.reducer
  },
  middleware: getDefaultMiddlewear => getDefaultMiddlewear().concat(apiSlice.middleware)
})