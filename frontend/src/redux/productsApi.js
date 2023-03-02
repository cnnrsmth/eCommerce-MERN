import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000"}),
    endpoints: (builder) =>({
        getAllProducts: builder.query({
            query: () => "api/products/shop",
        }),
        getProductById: builder.query({
            query: (id) => `api/products/shop/${id}`,
        }),
    })
})

export const { useGetAllProductsQuery , useGetProductByIdQuery } = productsApi