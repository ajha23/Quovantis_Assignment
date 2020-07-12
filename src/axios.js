import axios from "axios";

axios.defaults.baseURL = "https://reqres.in/";

export const post = ({ username, password }) => {
  try {
    return axios.post("api/login", { email: username, password });
  } catch (error) {
    return error;
  }
};

export const getUser = (pageNumber) => {
  return axios.get(`api/users?page=${pageNumber}`);
};

export const getUserDetails = (id) => {
  return axios.get(`api/users/${id}`);
};
export default axios;
