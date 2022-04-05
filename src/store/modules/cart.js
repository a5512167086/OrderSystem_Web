import _ from "lodash";

export default {
  namespaced: true,
  state: () => ({
    userCart: [],
  }),
  getters: {},
  mutations: {
    addCart(state, updateFood) {
      const foodCart = state.userCart.filter((food, index) => {
        if (food.id === updateFood.id) {
          state.userCart[index].amount = updateFood.amount;
          return food;
        }
      });
      if (!_.isEmpty(foodCart)) {
        return;
      }
      state.userCart.push(updateFood);
    },
    setCart(state, newCart) {
      state.userCart = newCart;
    },
    deleteCartItem(state, deleteItem) {
      const newCart = state.userCart.filter((item) => item.id != deleteItem.id);
      state.userCart = newCart;
    },
    clearCart(state) {
      state.userCart = [];
    },
  },
  actions: {
    addCart({ commit }, updateFood) {
      commit("addCart", updateFood);
    },
    setCart({ commit }, newCart) {
      commit("setCart", newCart);
    },
    deleteCartItem({ commit }, deleteItem) {
      commit("deleteCartItem", deleteItem);
    },
    clearCart({ commit }) {
      commit("clearCart");
    },
  },
};
