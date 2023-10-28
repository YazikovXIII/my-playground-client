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
