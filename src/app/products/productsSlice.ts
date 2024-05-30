import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApiSlice = createApi({
  reducerPath: "products",
  tagTypes: ["Products"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getProductList: builder.query({
      query: () => {
        return {
          url: "/products?limit=61&skip=20&select=title,price,thumbnail",
        };
      },
    }),
  }),
});

export const { useGetProductListQuery } = productsApiSlice;
