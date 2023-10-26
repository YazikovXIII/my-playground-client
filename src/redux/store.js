import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todos/todosSlice";
import { authReducer } from "./user/authSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    auth: authReducer,
  },
});
