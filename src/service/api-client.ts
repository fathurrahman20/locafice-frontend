import axios, { type AxiosRequestConfig } from "axios";

export interface ErrorResponse {
  message: string;
}

export interface FetchResponse<T> {
  data: T;
}

export const baseUrl = `${import.meta.env.VITE_BE_URL!}/api`;
export const apiKey = import.meta.env.VITE_API_KEY!;
export const baseImageUrl = `${import.meta.env.VITE_BE_URL!}/storage`;

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "x-api-key": apiKey,
  },
});

export default class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((response) => response.data);
  };

  post = (data: T, config?: AxiosRequestConfig) => {
    return axiosInstance
      .post(this.endpoint, data, config)
      .then((response) => response.data);
  };

  delete = (config?: AxiosRequestConfig) => {
    return axiosInstance
      .delete(this.endpoint, config)
      .then((response) => response.data);
  };
}
