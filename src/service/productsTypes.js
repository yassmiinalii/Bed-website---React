import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const productsTypesApi = createApi({
  reducerPath: 'productsTypesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://demos-iconcreations.com/schlafmiestrback/api/' }),
  endpoints: (builder) => ({
    getAllProductTypes: builder.query({
      query: () => 'productTypes',
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllProductTypesQuery } = productsTypesApi;