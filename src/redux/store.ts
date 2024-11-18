import { configureStore } from "@reduxjs/toolkit";
import { todosApi } from "./api/todos";
import { usersApi } from "./api/user";

export const store = configureStore({
  reducer: {
    [todosApi.reducerPath]: todosApi.reducer,
    [usersApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware, usersApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
