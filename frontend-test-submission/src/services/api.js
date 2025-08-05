import axios from 'axios';
import { log } from '../utils/logger';

const api = axios.create({
  baseURL: 'http://localhost:8000', // Change to actual backend
});

api.interceptors.request.use(
  config => {
    log("api.js", "info", "axios-request", `Request made to ${config.url}`);
    return config;
  },
  error => {
    log("api.js", "error", "axios-request", error.message);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  response => {
    log("api.js", "info", "axios-response", `Response from ${response.config.url}`);
    return response;
  },
  error => {
    log("api.js", "error", "axios-response", error.message);
    return Promise.reject(error);
  }
);

export default api;
