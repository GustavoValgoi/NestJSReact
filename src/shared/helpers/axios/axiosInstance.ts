import axios from 'axios';

export const apiVendas = axios.create({
  baseURL: 'http://localhost:3000',
});
