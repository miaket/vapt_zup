import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    user:{
      id: 0,
      name: '',
    },
    headers: [
      {
        text: 'Dessert (100g serving)',
        align: 'left',
        sortable: false,
        value: 'name'
      },
      { text: 'Calories', value: 'calories' },
      { text: 'Fat (g)', value: 'fat' },
      { text: 'Carbs (g)', value: 'carbs' },
      { text: 'Protein (g)', value: 'protein' },
      { text: 'Iron (%)', value: 'iron' }
    ],
  },
  getters: {
    getUser: state => {
      return state.user;
    },
    getHeaders: state =>{
      console.log (state.headers)
      return state.headers;
    }
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
