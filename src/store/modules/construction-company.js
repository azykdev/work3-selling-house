import ConstructionCompanyApi from "@/api/construction-company";

const state = {
  loading: false,
  errors: null,
  constructionCompanies: null,
};

const mutations = {
  getConstructionCompaniesStart(state) {
    state.loading = true;
    state.errors = null;
    state.constructionCompanies = null;
  },
  getConstructionCompaniesSuccess(state, payload) {
    state.loading = false;
    state.constructionCompanies = payload;
  },
  getConstructionCompaniesFailure(state, payload) {
    state.loading = false;
    state.errors = payload;
  },
};

const actions = {
  getConstructionCompanies({ commit }) {
    return new Promise((resolve, reject) => {
      commit("getConstructionCompaniesStart");
      ConstructionCompanyApi.getConstructionCompanies()
        .then((res) => {
          commit("getConstructionCompaniesSuccess", res.data);
          resolve(res);
        })
        .catch((error) => {
          commit("getConstructionCompaniesFailure");
          reject(error);
        });
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
