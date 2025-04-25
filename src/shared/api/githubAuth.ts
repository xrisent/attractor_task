import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BACK_URL;

export const getGitHubToken = async (code: string) => {
  const response = await axios.post(`${BASE_URL}/get-token`, { code });
  return response.data.access_token;
};