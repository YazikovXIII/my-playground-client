import { createSlice } from "@reduxjs/toolkit";
import * as Auth from "./authOperations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: { email: "", id: "" },
    token: null,
    isLoggedin: false,
    isRefreshing: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder

      .addCase(Auth.signUp.pending, (state) => {
        state.error = null;
        state.isRefreshing = true;
      })
      .addCase(Auth.signUp.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.accessTokentoken;
        state.error = null;
        state.isRefreshing = false;
      })
      .addCase(Auth.signUp.rejected, (state, action) => {
        state.error = { status: action.payload.status, message: action.payload.data.message };
        state.isRefreshing = false;
      })

      .addCase(Auth.logIn.pending, (state) => {
        state.error = null;
        state.isRefreshing = true;
      })
      .addCase(Auth.logIn.fulfilled, (state, action) => {
        (state.user = action.payload.user),
          (state.token = action.payload.accessToken),
          (state.isLoggedin = true),
          (state.error = null);
        state.isRefreshing = false;
        state.isLoggedin = true;
      })
      .addCase(Auth.logIn.rejected, (state, action) => {
        state.error = { status: action.payload.status, message: action.payload.data.message };
        state.isRefreshing = false;
      })

      .addCase(Auth.logOut.pending, (state) => {
        state.error = null;
        state.isRefreshing = true;
      })
      .addCase(Auth.logOut.fulfilled, (state) => {
        state.user = { email: "", id: "" };
        state.token = null;
        state.isLoggedin = false;
        state.isRefreshing = false;
      })
      .addCase(Auth.logOut.rejected, (state, action) => {
        state.error = { status: action.payload, message: action.payload };
        state.isRefreshing = false;
      })

      .addCase(Auth.getCurrent.pending, (state) => {
        state.error = null;
        state.isRefreshing = true;
      })
      .addCase(Auth.getCurrent.fulfilled, (state, action) => {
        (state.user = action.payload), (state.isLoggedin = true), (state.error = null);
        state.isRefreshing = false;
      })
      .addCase(Auth.getCurrent.rejected, (state, action) => {
        state.error = { status: action.payload, message: action.payload };
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
