import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    products: []
  },
  mutations: {
    GET_PRODUCTS(state, products) {
      state.products = products.data;
    }
  },
  actions: {
    getProducts({ commit }) {
      axios
        .get(`http://localhost:5000/api/vi/products`)
        .then(resp => resp.data)
        .then(products => {
          commit("GET_PRODUCTS", products);
          console.log(products);
        });
    }
  },
  modules: {}
});
