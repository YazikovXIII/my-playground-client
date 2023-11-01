import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../axios";

axios.defaults.baseURL = API_URL;

export const addTodo = createAsyncThunk("todo/addTodo", async (credentials, { rejectWithValue }) => {
  try {
    const response = await axios.post("/todo/add", credentials);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response);
  }
});

export const removeTodo = createAsyncThunk("todo/removeTodo", async (credentials, { rejectWithValue }) => {
  try {
    const response = await axios.delete(`/todo/delete/${credentials}`);

    return response.data;
  } catch (error) {
    return rejectWithValue(error.response);
  }
});

export const getTodos = createAsyncThunk("todo/getTodos", async (credentials, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem("token");
    const setAuthHeader = (token) => {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    };
    setAuthHeader(token);
    const response = await axios.get(`/todo/getTodos`, credentials);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response);
  }
});

export const toggleIsComplete = createAsyncThunk("todo/toggleIsComplete", async (credentials, { rejectWithValue }) => {
  try {
    const response = await axios.patch(`/todo/complete/${credentials}`, credentials);
    console.log("try toggleIsComplete", response.data);
    return response.data;
  } catch (error) {
    console.log("catch toggleIsComplete", error.response);
    return rejectWithValue(error.response);
  }
});
