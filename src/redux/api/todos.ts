import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITodo } from "../../types/todos";
export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    getTodos: builder.query<ITodo[], void>({
      query: () => "todos",
    }),
  }),
});
export const { useGetTodosQuery } = todosApi;
