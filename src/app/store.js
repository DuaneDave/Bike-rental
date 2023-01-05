import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../components/api/apiSlice";
import colorSwitchReducer from '../components/colorSwitch/colorSwitch'

export const store = configureStore({
  reducer: {
    colorswitch : colorSwitchReducer,
    Bikes: apiSlice.reducer
  },
  middleware: getDefaultMiddlewear => getDefaultMiddlewear().concat(apiSlice.middleware)
})