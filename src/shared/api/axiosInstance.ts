import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://api.github.com',
});

export const setupAxiosInterceptors = (store: any) => {
  axiosInstance.interceptors.request.use((config) => {
    const { token } = store.getState().auth;
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  }, (error) => {
    return Promise.reject(error);
  });
};