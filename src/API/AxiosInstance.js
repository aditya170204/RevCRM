import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://revo-reality-api.onrender.com/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});
axiosInstance.interceptors.request.use(
  config => {
    const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjhlNmE4ZDMwOTQ1ZWM5ZjY2ZTAzOGMiLCJuYW1lIjoiS2FzaGlmIiwicm9sZSI6InN1cF9hZG1pbiIsIm9yZ2FuaXphdGlvbklkIjoiNjY4ZTZhOGMzMDk0NWVjOWY2NmUwMzhhIiwiaWF0IjoxNzQ0NjIyOTU1fQ.ePYLErEgIYoiyuSOsnsGdBX_H2aIn2ibySy_wfiEYeA`;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
export default axiosInstance;
