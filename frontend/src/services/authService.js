import axios from "axios";
const API_URL = "http://localhost:8080/";

const register = (phone, name, surname, email, password) => {
  return axios.post(API_URL + "register", {
    phone,
    name, 
    surname,
    email,
    password
  });
};

const login = (phone, password) => {
  return axios
    .post(API_URL + "login", {
      phone,
      password,
    })
    .then((response) => {
        if (response.data.token) {
        console.log(response.token);
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  console.log(localStorage.getItem("user"));
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;