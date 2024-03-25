import axios from "./api";

const ConstructionCompanyApi = {
  getConstructionCompanies() {
    return axios.get("/construction_companies");
  },
};

export default ConstructionCompanyApi