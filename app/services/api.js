// services/api.js
import axios from 'axios';
import { toast } from "react-toastify";

const BASE_URL = "http://localhost:8000/api"
// ✅ Use environment variables (will work for both local and production)
// const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL 
// Debug: Log the BASE_URL being used
console.log('=================================');
// console.log('API BASE_URL:', BASE_URL);
console.log('=================================');

// Axios instance with cookies

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  timeout: 40000,
});

// ——————————————————————————————
// REFRESH CONTROL FLAGS
// ——————————————————————————————


// ——————————————————————————————
// REFRESH FUNCTION (Single-instance)
let isRefreshing = false;
let refreshPromise = null;
// ——————————————————————————————


async function refreshSession() {
  try {
    const resp = await api.post("/token/refresh/");
    return resp.status === 200;
  } catch (err) {
    return false;
  }
}

// ——————————————————————————————
// RESPONSE INTERCEPTOR
// ——————————————————————————————
api.interceptors.response.use(
  (res) => res,

  async (error) => {
    const originalRequest = error.config;

    // Ignore refresh-URL failure → prevent recursive loop
    if (originalRequest.url.includes("/token/refresh/")) {
      return Promise.reject(error);
    }

    const status = error.response?.status;

    // Try refresh only ONCE
    if (status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      // If no refresh in progress → start one
      if (!isRefreshing) {
        isRefreshing = true;

        refreshPromise = refreshSession()
          .then((success) => {
            isRefreshing = false;
            return success;
          })
          .catch(() => {
            isRefreshing = false;
            return false;
          });
      }

      // Wait for refresh result
      const success = await refreshPromise;

      if (success) {
        return api(originalRequest); // retry original
      }

      // ————————————————————————————
      // Refresh failed → Force logout
      // ————————————————————————————
      if (typeof window !== "undefined") {
        toast.error("Your session expired. Please log in again.");
        window.location.href = "/login";
      }

      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);

// ————————————————————————
// All API Endpoints
// ————————————————————————

export const AuthAPI = {
  register: (formData) => api.post('/register/', formData),
  login: (credentials) => api.post('/auth/login/', credentials),
  logout: () => api.post("/logout/", {}, { withCredentials: true }), // Empty body; withCredentials handles cookies
  me: () => api.get('/me/'),
};


export default api;