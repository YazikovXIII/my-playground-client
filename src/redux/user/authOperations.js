import { createAsyncThunk } from "@reduxjs/toolkit";
import $api from "../axios";
import { API_URL } from "../axios";
import axios from "axios";

axios.defaults.baseURL = API_URL;

export const signUp = createAsyncThunk("auth/signUp", async (credentials, { rejectWithValue }) => {
  try {
    const response = await axios.post("/user/registration", credentials);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response);
  }
});

export const logIn = createAsyncThunk("auth/logIn", async (credentials, { rejectWithValue }) => {
  try {
    const response = await $api.post("/user/login", credentials);
    localStorage.setItem("token", response.data.accesstoken);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response);
  }
});

export const logOut = createAsyncThunk("auth/logOut", async (_, { rejectWithValue }) => {
  try {
    axios.defaults.baseURL = API_URL;
    const response = await axios.post("/user/logout");
    localStorage.removeItem("token");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.response);
    return rejectWithValue(error.response);
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
