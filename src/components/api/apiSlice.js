import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "Bikes",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:3000/api/v1",
  }),
  tagTypes: ["Bike"],
  endpoints: (builder) => ({
    getBikes: builder.query({
      query: () => "/bikes",
      providesTags: ["Bike", "Reservation"],
    }),
    getUsers: builder.query({
      query: () => "/users",
    }),
    getReservations: builder.query({
      query: () => "/reservations",
      providesTags: ["Reservation"],
    }),
    addBike: builder.mutation({
      query: (bike) => ({
        url: "/bikes",
        method: "POST",
        body: bike,
      }),
      invalidatesTags: ["Bike"],
    }),
    deleteBike: builder.mutation({
      query: (id) => ({
        url: `/bikes/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Bike"],
    }),
    addUser: builder.mutation({
      query: (body) => ({
        url: "/users",
        method: "POST",
        body: body,
      }),
    }),
    addNewReservation: builder.mutation({
      query: (body) => ({
        url: "/reservations",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["Reservation"],
    }),
    deleteReservation: builder.mutation({
      query: (id) => ({
        url: `reservations${id}`,
        medthod: "DELETE",
      }),
      invalidatesTags: ["Reservation"],
    }),
  }),
});

export const {
  useGetBikesQuery,
  useGetReservationsQuery,
  useAddBikeMutation,
  useDeleteBikeMutation,
  useGetUsersQuery,
  useAddUserMutation,
  useAddNewReservationMutation,
  useDeleteReservationMutation,
} = apiSlice;
