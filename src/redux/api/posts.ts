import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost } from "../../types/posts";
export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    getPosts: builder.query<IPost[], void>({
      query: () => "posts",
    }),
  }),
});
export const { useGetPostsQuery } = postsApi;
