import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('adminToken');
  if (token) {
    config.headers = config.headers || {};
    config.headers['Authorization'] = `Bearer ${token}`;
    console.log('Request with token:', token.substring(0, 10) + '...');
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});


export default api;
