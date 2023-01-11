import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "Bikes",
  baseQuery: fetchBaseQuery({ baseUrl: "https://bike-web.herokuapp.com/" }),
  tagTypes: ["Bike"],
  endpoints: (builder) => ({
    getBikes: builder.query({
      query: () => "/api/v1/bikes",
      providesTags: ["Bike"],
    }),
    getReservations: builder.query({
      query: () => "/api/v1/reservations",
    }),
    addBike: builder.mutation({
      query: (bike) => ({
        url: "/api/v1/bikes",
        method: "POST",
        body: bike,
      }),
      invalidatesTags: ["Bike"],
    }),
    deleteBike: builder.mutation({
      query: (id) => ({
        url: `/api/v1/bikes/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Bike"],
    }),
  }),
});

export const {
  useGetBikesQuery,
  useGetReservationsQuery,
  useAddBikeMutation,
  useDeleteBikeMutation,
} = apiSlice;
