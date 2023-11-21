import axios from 'axios';

const api = axios.create({
  baseURL: '/api',  // This assumes your server exposes APIs under the "/api" route
});

export default api;
