import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../components/api/apiSlice';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddlewear) => getDefaultMiddlewear().concat(apiSlice.middleware),
});

export default store;
