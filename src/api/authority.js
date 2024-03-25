import axios from "./api";

const AuthorityApi = {
  getAuthorities() {
    return axios.get("/authorities");
  },
};

export default AuthorityApi