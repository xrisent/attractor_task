import { axiosInstance } from './axiosInstance';

export const GitHubApi = {
  async getUserProfile() {
    const response = await axiosInstance.get('/user');
    return response.data;
  },
  
  async updateUserProfile(data: {
    name?: string;
    bio?: string;
    company?: string;
    location?: string;
  }) {
    const response = await axiosInstance.patch('/user', data);
    return response.data;
  }
};