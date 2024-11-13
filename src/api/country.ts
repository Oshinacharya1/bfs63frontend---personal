import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICountry } from "../types/countrydata";

export const countryApi = createApi({
  reducerPath: "countryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com/v3.1/all" }),
  endpoints: (builder) => ({
    getCountries: builder.query<ICountry[], void>({
      query: () => "",
    }),
  }),
});

export const { useGetCountriesQuery } = countryApi;
