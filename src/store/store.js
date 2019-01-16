import Vue from 'vue';
import Vuex from 'vuex';
import users from './modules/users/index';
import snackbar from './modules/snackbar/index';
import authentication from './modules/authentication/index';
import tickets from './modules/tickets/index';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    users,
    snackbar,
    authentication,
    tickets
  }
});
