import { createStore } from "vuex";
import home from "./modules/home";
import auth from "./modules/auth";
import authority from "./modules/authority";
import constructionCompany from "./modules/construction-company";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    home,
    auth,
    authority,
    constructionCompany,
  },
});
