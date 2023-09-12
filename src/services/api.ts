import axios from "axios";

axios.defaults.baseURL = `https://64f74eaf9d77540849536e6b.mockapi.io/api`;

export const getCars = async (page = 1, limit = 8) => {
  const response = await axios.get(`/cars?page=${page}&limit=${limit}`);
  const data = response.data;
  return data;
};
