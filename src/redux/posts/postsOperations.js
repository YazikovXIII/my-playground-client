import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../axios";

axios.defaults.baseURL = API_URL;

export const addPost = createAsyncThunk("post/addPost", async (credentials, { rejectWithValue }) => {
  try {
    const response = await axios.post("/post/add", credentials);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response);
  }
});

export const getAll = createAsyncThunk("post/getAll", async (_, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem("token");
    const setAuthHeader = (token) => {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    };
    setAuthHeader(token);

    const response = await new Promise((resolve) => {
      setTimeout(async () => {
        const res = await axios.get(`/post/getAll`);
        resolve(res);
      }, 500);
    });

    // const response = await axios.get(`/post/getAll`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response);
  }
});

export const getUsersPosts = createAsyncThunk("post/getUsersPosts", async (_, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem("token");
    const setAuthHeader = (token) => {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    };
    setAuthHeader(token);
    const response = await axios.get(`/post/getUsersPosts`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response);
  }
});

export const removeUsersPost = createAsyncThunk("post/removeUsersPost", async (credentials, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem("token");
    const setAuthHeader = (token) => {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    };
    setAuthHeader(token);
    console.log("remover credentials", credentials);

    const response = await axios.delete(`/post/deleteUsersPost/${credentials}`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response);
  }
});

export const editUsersPost = createAsyncThunk("post?editUsersPost", async (credentials, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem("token");
    const setAuthHeader = (token) => {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    };
    setAuthHeader(token);
    console.log(credentials);
    const { _id, formData } = credentials;
    const response = await axios.put(`/post/editPost/${_id}`, formData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response);
  }
});
