import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AuthResponse, Iuser } from "../../types/users-typs";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    // POST -> http://localhost:3000/login
    login: builder.mutation<AuthResponse, Iuser>({
      query: (user) => ({ url: "/login", method: "POST", body: user }),
    }),
    register: builder.mutation<AuthResponse, Iuser>({
      query: (user) => ({ url: "/register", method: "POST", body: user }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = usersApi;
