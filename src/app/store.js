import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../components/api/apiSlice';
import bikeSlice from '../components/bikes/bikeSlice';

import userSlice from '../components/userSlice';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    toggelDetails: bikeSlice.reducer,
    users: userSlice,
  },
  middleware: (getDefaultMiddlewear) =>
    getDefaultMiddlewear().concat(apiSlice.middleware),
});

export default store;
