import axios, { type AxiosError } from 'axios';

const baseURL: string = (import.meta.env.VITE_API_BASE_URL as string | undefined) ?? 'http://localhost:3000';

const client = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});


export default client;
