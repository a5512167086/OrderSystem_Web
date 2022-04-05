import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import user from "./modules/user";
import cart from "./modules/cart";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: ["user", "cart"],
});

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    cart,
  },
  plugins: [vuexLocal.plugin],
});
