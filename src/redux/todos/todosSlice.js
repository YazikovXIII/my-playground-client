import { createSlice } from "@reduxjs/toolkit";
import * as Todo from "./todosOperations";
import * as Auth from "../user/authOperations";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    isRefreshing: false,
    error: null,
  },
  reducers: {
    clearTodos: (state) => {
      state.todos = [];
      state.isRefreshing = false;
      state.error = null;
    },
  },
  // reducers: {
  //   addTodo(state, action) {
  //     state.todos.push({ value: action.payload, id: new Date().toISOString(), completed: false });
  //   },

  //   removeTodo(state, action) {
  //     state.todos = state.todos.filter((todo) => todo.id !== action.payload);
  //   },

  //   toggleTodoComplete(state, action) {
  //     state.todos.map((todo) => {
  //       if (todo.id !== action.payload) {
  //         return todo;
  //       }
  //       return (todo.completed = !todo.completed);
  //     });
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(Todo.addTodo.pending, (state) => {
        state.error = null;
        state.isRefreshing = true;
      })
      .addCase(Todo.addTodo.fulfilled, (state, action) => {
        state.isRefreshing = false;
        console.log("add todo payload", action.payload);
        state.todos = [...state.todos, { todo: action.payload.todo, isComplete: action.payload.isComplete, _id: action.payload._id }];
      })
      .addCase(Todo.addTodo.rejected, (state, action) => {
        state.error = { status: action.payload.status, message: action.payload.data.message };
        state.isRefreshing = false;
      })

      .addCase(Todo.removeTodo.pending, (state) => {
        state.error = null;
        state.isRefreshing = true;
      })
      .addCase(Todo.removeTodo.fulfilled, (state, action) => {
        state.isRefreshing = false;
        console.log("addcase-remove-fulfilled", action.payload);
        state.todos = state.todos.filter((todo) => todo._id !== action.payload._id);
      })
      .addCase(Todo.removeTodo.rejected, (state, action) => {
        console.log("addcase - remove - rej", action.payload);

        state.error = { status: action.payload, message: action.payload.data.message };
        state.isRefreshing = false;
      })
      .addCase(Todo.getTodos.pending, (state) => {
        state.error = null;
        state.isRefreshing = true;
      })
      .addCase(Todo.getTodos.fulfilled, (state, action) => {
        state.isRefreshing = false;
        console.log("add todo payload", action.payload);
        state.todos = [...action.payload];
      })
      .addCase(Todo.getTodos.rejected, (state, action) => {
        state.error = { status: action.payload.status, message: action.payload.data.message };
        state.isRefreshing = false;
      })
      .addCase(Auth.logOut.fulfilled, (state) => {
        state.todos = [];
        state.isRefreshing = false;
        state.error = null;
      });
  },
});

export const { clearTodos } = todoSlice.actions;

export default todoSlice.reducer;
