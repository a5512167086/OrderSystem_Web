export default {
  namespaced: true,
  state: () => ({
    currentUser: {},
  }),
  getters: {},
  mutations: {
    signIn(state, userData) {
      console.log(userData);
      const user = {
        id: userData.id,
        user_name: userData.account,
        account: userData.account,
        rank: userData.rank,
      };
      state.currentUser = user;
    },
    signOut(state) {
      state.currentUser = {};
    },
  },
  actions: {
    signIn({ commit }, userData) {
      commit("signIn", userData);
    },
    signOut({ commit }) {
      commit("signOut");
    },
  },
};
