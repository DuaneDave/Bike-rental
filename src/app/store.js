import { configureStore } from "@reduxjs/toolkit";
import togButtonReducer from '../features/togButton/togButtonSlice'
export const store = configureStore({
  reducer: {
    togbutton: togButtonReducer,
  }
})