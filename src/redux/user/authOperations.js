import { createAsyncThunk } from "@reduxjs/toolkit";
import $api from "../axios";
import { API_URL } from "../axios";
import axios from "axios";

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
    console.log(response.data);

    localStorage.setItem("token", response.data.accesstoken);
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

export const getCurrent = createAsyncThunk("auth/refres", async (_, thunkAPI) => {
  try {
    axios.defaults.baseURL = API_URL;
    const token = localStorage.getItem("token");
    const setAuthHeader = (token) => {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    };
    setAuthHeader(token);
    const { data } = await axios.get("/user/current");
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue(e.message);
  }
});
