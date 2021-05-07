import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4321/api',
});

export default api;
