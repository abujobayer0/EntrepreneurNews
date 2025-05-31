import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import Cookies from "js-cookie";

// ✅ Get access token from cookies
const getAccessToken = (): string | undefined => {
  return Cookies.get("accessToken");
};

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 🔐 Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers = config.headers ?? {};
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// ❌ Response Interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      console.error(
        "Unauthorized! Redirecting to login or refreshing token..."
      );
      // Optional: Add logout or redirect logic here
    }

    if (error.response?.status === 500) {
      console.error("Internal server error.");
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
