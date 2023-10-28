import { createAsyncThunk } from "@reduxjs/toolkit";
import $api from "../axios";

export const signUp = createAsyncThunk("auth/signUp", async (credentials, { rejectWithValue }) => {
  try {
    const response = await $api.post("/user/signup");
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response);
  }
});

export const logIn = createAsyncThunk("auth/logIn", async (credentials, { rejectWithValue }) => {
  try {
    const response = await $api.post("/user/login", credentials);
    localStorage.setItem("token", response.data.accessToken);
    return response.data;
  } catch (error) {
    console.log("catch-error", error.response);
    return rejectWithValue(error.response);
  }
});

export const logOut = createAsyncThunk("auth/logOut", async ({ rejectWithValue }) => {
  try {
    const data = await $api.post("/user/logout");
    localStorage.removeItem("token");
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
