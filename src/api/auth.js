import axios from "./api";

const AuthApi = {
  login(data) {
    return axios.post("/auth/login", data);
  },
  // register(data) {
  //   return axios.post("/auth/register", data);
  // },
};

export default AuthApi