import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const API_URL = "https://my-playground-server.onrender.com";

const token = localStorage.getItem("token");

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default $api;

export const signUp = createAsyncThunk("auth/signUp", async (credentials, { rejectWithValue }) => {
  try {
    const data = await axios.post("/user/signup");
    return data.user;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const logIn = createAsyncThunk("auth/logIn", async (credentials, { rejectWithValue }) => {
  try {
    const data = await $api.post("/user/login", credentials);
    localStorage.setItem("token", data.accessToken);
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk("auth/logOut", async ({ rejectWithValue }) => {
  try {
    const data = await axios.post("/user/logout");
    localStorage.removeItem("token");
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
