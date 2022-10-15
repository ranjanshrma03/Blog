import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.API_KEY}`,
  },
});

// for Fecthing Categories
export const fetchCategories = async () => api.get('/api/categories');
