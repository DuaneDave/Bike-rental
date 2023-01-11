import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'Bikes',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://bike-web.herokuapp.com/api/v1',
  }),
  endpoints: (builder) => ({
    getBikes: builder.query({
      query: () => '/bikes',
    }),
    getUsers: builder.query({
      query: () => '/users',
    }),
    addUser: builder.mutation({
      query: (body) => ({
        url: '/users',
        method: 'POST',
        body: body,
      }),
    }),
    addNewReservation: builder.mutation({
      query: (body) => ({
        url: '/reservations',
        method: 'POST',
        body: body,
      }),
    }),
  }),
});

export const {
  useGetBikesQuery,
  useGetUsersQuery,
  useAddUserMutation,
  useAddNewReservationMutation,
} = apiSlice;
