import { createSlice } from "@reduxjs/toolkit";
import * as Post from "./postsOperations";

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    isRefreshing: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(Post.addPost.pending, (state) => {
        state.error = null;
        state.isRefreshing = true;
      })
      .addCase(Post.addPost.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.posts = [...state.posts, { post: action.payload }];
      })
      .addCase(Post.addPost.rejected, (state, action) => {
        state.error = { status: action.payload.status, message: action.payload.data.message };
        state.isRefreshing = false;
      })
      .addCase(Post.getAll.pending, (state) => {
        state.error = null;
        state.isRefreshing = true;
      })
      .addCase(Post.getAll.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.posts = [...action.payload];
      })
      .addCase(Post.getAll.rejected, (state, action) => {
        state.error = { status: action.payload.status, message: action.payload.data.message };
        state.isRefreshing = false;
      });
  },
});

export default postSlice.reducer;
