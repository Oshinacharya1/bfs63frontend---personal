import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const countryApi = createApi({
  reducerPath: "countryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com/v3.1/all" }),
  endpoints: (builder) => ({
    getCountryByName: builder.query({
      query: () => "",
    }),
  }),
});

export const { useGetCountryByNameQuery } = countryApi;
