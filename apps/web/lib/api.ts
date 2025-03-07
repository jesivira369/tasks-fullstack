import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: "/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para incluir el token en cada request
api.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor para manejar token expirado
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      console.warn("Token expirado, redirigiendo al login...");

      // Eliminar token y redirigir al login
      Cookies.remove("token");
      window.location.href = "/auth"; // Redirigir a login
    }
    return Promise.reject(error);
  }
);

export default api;
