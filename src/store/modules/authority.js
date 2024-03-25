import AuthorityApi from "@/api/authority";

const state = {
  loading: false,
  errors: null,
  authorities: null
};

const mutations = {
  getAuthoritiesStart(state) {
    state.loading = true;
    state.errors = null;
    state.authorities = null;
  },
  getAuthoritiesSuccess(state, payload) {
    state.loading = false;
    state.authorities = payload;
  },
  getAuthoritiesFailure(state, payload) {
    state.loading = false;
    state.errors = payload;
  }
};

const actions = {
  getAuthorities({ commit }) {
    return new Promise((resolve, reject) => {
      commit("getAuthoritiesStart");
      AuthorityApi.getAuthorities()
        .then((res) => {
          console.log(res);
          commit("getAuthoritiesSuccess", res.data);
          resolve(res);
        })
        .catch((error) => {
          commit("getAuthoritiesFailure");
          reject(error);
        });
    });
  }
};

export default {
  state,
  mutations,
  actions
};