import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    user:{
      id: 0,
      name: '',
    },
  },
  getters: {
    getUser: state => {
      return state.user;
    },
  },
  mutations: {
    changeUserid(state, payload){
      state.user.id = payload.id
    },
    changeUsername(state, payload){
      state.user.name = payload.username
    },
  },
  actions: {
    changeUserid (context, payload) {
      context.commit('changeUserid',payload)
    },
    changeUsername (context, payload) {
      context.commit('changeUsername',payload)
    },
  }
});
