import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://ecommerce-process.onrender.com/"}),
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