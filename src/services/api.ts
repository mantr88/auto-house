import axios from "axios";

axios.defaults.baseURL = `https://64f74eaf9d77540849536e6b.mockapi.io/api`;

export const getCars = async () => {
  const response = await axios.get("/cars");
  const data = response.data;
  return data;
};
