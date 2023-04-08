import axios from "axios";
import authHeader from "./authHeader";

const API_URL = "http://localhost:8080/";

// const getPublicContent = () => {
//   return axios.get(API_URL + "all");
// };

const getUsers = () => {
  return axios.get(API_URL + "users", { headers: authHeader() });
};

// const getAdminBoard = () => {
//   return axios.get(API_URL + "admin", { headers: authHeader() });
// };

const UserService = {
  // getPublicContent,
  getUsers,
  // getAdminBoard,
};

export default UserService;