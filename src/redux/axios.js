import axios from "axios";

export const API_URL = "http://localhost:5000";
// "https://my-playground-server.onrender.com"
// "http://localhost:5000"

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default $api;
