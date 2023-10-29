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
      })
      .addCase(Auth.signUp.fulfilled, (state, action) => {
        (state.user = action.payload.user), (state.token = action.payload.accessTokentoken), (state.error = null);
      })
      .addCase(Auth.signUp.rejected, (state, action) => {
        state.error = { status: action.payload.status, message: action.payload.data.message };
      })

      .addCase(Auth.logIn.pending, (state) => {
        state.error = null;
      })
      .addCase(Auth.logIn.fulfilled, (state, action) => {
        (state.user = action.payload.user),
          (state.token = action.payload.accessToken),
          (state.isLoggedin = true),
          (state.error = null);
      })
      .addCase(Auth.logIn.rejected, (state, action) => {
        state.error = { status: action.payload.status, message: action.payload.data.message };
      })

      .addCase(Auth.logOut.pending, (state) => {
        state.error = null;
      })
      .addCase(Auth.logOut.fulfilled, (state) => {
        state.user = { email: "", id: "" };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(Auth.logOut.rejected, (state, action) => {
        state.error = action.payload;
      })

      .addCase(Auth.getCurrent.pending, (state) => {
        state.error = null;
      })
      .addCase(Auth.getCurrent.fulfilled, (state, action) => {
        (state.user = action.payload.user),
          (state.token = action.payload.accessToken),
          (state.isLoggedin = true),
          (state.error = null);
      })
      .addCase(Auth.getCurrent.rejected, (state, action) => {
        state.error = { status: action.payload, message: action.payload };
      });
  },
});

export const authReducer = authSlice.reducer;
