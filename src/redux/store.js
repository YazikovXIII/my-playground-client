import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todos/todosSlice";
import { authReducer } from "./user/authSlice";
import postReducer from "./posts/postsSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    auth: authReducer,
    posts: postReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
