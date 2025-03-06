import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:5132/api',
  timeout: 10000,
});
