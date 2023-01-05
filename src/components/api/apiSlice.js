import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'Bikes',
  baseQuery: fetchBaseQuery({baseUrl:'http://localhost:4000/'}),
  endpoints: builder => ({
    getBikes: builder.query({
      query: () => '/Bikes'
    })
  })
})

export const { useGetBikesQuery } = apiSlice