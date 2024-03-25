import AuthApi from "@/api/auth"

const state = {
  accountType: null,
  loading: false,
  errors: null,
  user: null
}

const mutations = {
  setAccountType(state, value) {
    state.accountType = value
  },

  loginStart(state) {
    state.loading = true
    state.errors = null
    state.user = null
  },

  loginSuccess(state, payload) {
    state.loading = false
    state.user = payload
  },

  loginFailure(state, payload) {  
    state.loading = false
    state.errors = payload
  },
}

const actions = {
  login({ commit }, data) {
    return new Promise((resolve, reject) => {
      commit('loginStart')
      AuthApi.login(data).then((res) => {
        commit('loginSuccess')
        resolve(res)
      }).catch((error) => {
        commit('loginFailure')
        reject(error)
      })
      
    })
  },
}

export default {
  state,
  mutations,
  actions
}