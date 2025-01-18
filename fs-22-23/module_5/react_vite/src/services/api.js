import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
    endpoints: (builder) => ({
        getUserDetails: builder.query({
            query: ({ userId }) => `/user/${userId}`
        }),
        getProducts: builder.query({
            query: () => "/products"
        }),
        postEnquiry: builder.mutation({
            query: (body) => ({
                url: "/user/login",
                method: "POST",
                body: body
            })
        })
    })
});

export const { useGetUserDetailsQuery, useGetProductsQuery, usePostEnquiryMutation } = api;

export default api;