import { createSlice } from "@reduxjs/toolkit";
import * as Post from "./postsOperations";

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    isRefreshing: false,
    error: null,
    postsOfUser: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(Post.addPost.pending, (state) => {
        state.error = null;
        state.isRefreshing = true;
      })
      .addCase(Post.addPost.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.posts = [...state.posts, action.payload];
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
        state.posts = [...action.payload];
        state.isRefreshing = false;
      })
      .addCase(Post.getAll.rejected, (state, action) => {
        state.error = { status: action.payload.status, message: action.payload.data.message };
        state.isRefreshing = false;
      })
      .addCase(Post.getUsersPosts.pending, (state) => {
        state.error = null;
        state.isRefreshing = true;
      })
      .addCase(Post.getUsersPosts.fulfilled, (state, action) => {
        state.postsOfUser = [...action.payload];
        state.isRefreshing = false;
      })
      .addCase(Post.getUsersPosts.rejected, (state, action) => {
        state.error = { status: action.payload.status, message: action.payload.data.message };
        state.isRefreshing = false;
      })
      .addCase(Post.removeUsersPost.pending, (state) => {
        state.error = null;
        state.isRefreshing = true;
      })
      .addCase(Post.removeUsersPost.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.postsOfUser = state.postsOfUser.filter((post) => post._id !== action.payload._id);
      })
      .addCase(Post.removeUsersPost.rejected, (state, action) => {
        state.error = { status: action.payload, message: action.payload.data.message };
        state.isRefreshing = false;
      })
      .addCase(Post.editUsersPost.pending, (state) => {
        state.error = null;
        state.isRefreshing = true;
      })
      .addCase(Post.editUsersPost.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.posts = [...state.posts, action.payload];
      })
      .addCase(Post.editUsersPost.rejected, (state, action) => {
        state.error = { status: action.payload.status, message: action.payload.data.message };
        state.isRefreshing = false;
      });
  },
});

export default postSlice.reducer;
