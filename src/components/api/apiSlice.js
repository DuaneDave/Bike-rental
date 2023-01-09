import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'Bikes',
  baseQuery: fetchBaseQuery({baseUrl:'https://bike-web.herokuapp.com/'}),
  endpoints: builder => ({
    getBikes: builder.query({
      query: () => '/api/v1/bikes'
    })
  })
})

export const { useGetBikesQuery } = apiSlice