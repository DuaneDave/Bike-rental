import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "Bikes",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bike-web.herokuapp.com/api/v1",
  }),
  tagTypes: ["Bike"],
  endpoints: (builder) => ({
    getBikes: builder.query({
      query: () => "/bikes",
      providesTags: ["Bike"],
    }),
    getUsers: builder.query({
      query: () => "/users",
    }),
    getReservations: builder.query({
      query: () => "/reservations",
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
} = apiSlice;
