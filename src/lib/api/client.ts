import axios, { type AxiosError } from 'axios';

const baseURL: string = (import.meta.env.VITE_API_BASE_URL as string | undefined) ?? 'http://localhost:3000';

const client = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

client.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    return Promise.reject(error instanceof Error ? error : new Error('Unknown error'));
  }
);

export default client;
