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
    console.log("cred", credentials);
    const response = await axios.delete(`/todo/delete/${credentials}`);

    console.log("removetodo Operation", response.data);
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
    console.log("getTodos Operation", response.data);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response);
  }
});
