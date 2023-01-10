import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'Bikes',
  baseQuery: fetchBaseQuery({baseUrl:'https://bike-web.herokuapp.com/api/v1'}),
  endpoints: builder => ({
    getBikes: builder.query({
      query: () => '/bikes'
    })
  })
})

export const { useGetBikesQuery } = apiSlice
// https://bike-web.herokuapp.com/api/v1/reservations