import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    user:{
      id: 0,
      name: '',
    },
    filter:{
      fields:[
        {
          name: 'type',
          content: ['Cages', 'Foods', '']
        },
        {
          name: 'category',
          content: ['Cats', 'Small animals', '']
        },
        {
          name: 'availability',
          content: ['In Stock', 'Out of Stock', '']
        }
      ],
      apply:{
        type: '',
        category: '',
        availability: ''
      }
    },
    productListing:{
      headers: [],
      products: []
    }
  },
  getters: {
    user: state => {
      return state.user;
    },
    headers: state => {
      return state.productListing.headers;
    },
    filterFields: state => {
      return state.filter.fields;
    },
    filters: state => {
      return state.productListing.filters;
    },
    filteredProducts: state => {
      return state.productListing.products;
    },
    applyFilterType: state => {
      return state.filter.apply.type;
    },
    applyFilterCategory: state => {
      return state.filter.apply.category;
    },
    applyFilterAvailability: state => {
      return state.filter.apply.availability;
    }
  },
  mutations: {
    changeUserid(state, payload) {
      state.user.id = payload.id
    },
    changeUsername(state, payload) {
      state.user.name = payload.username
    },
    changeFilterType(state, payload) {
      state.filter.apply.type = payload;
    },
    changeFilterCategory(state, payload) {
      state.filter.apply.category = payload;
    },
    changeFilterAvailability(state, payload) {
      state.filter.apply.availability = payload;
    },
    changeProductListing(state, payload) {
      state.productListing = payload;
    }
  },
  actions: {
    changeUserid (context, payload) {
      context.commit('changeUserid',payload)
    },
    changeUsername (context, payload) {
      context.commit('changeUsername',payload)
    },
    changeFilterType (context, payload) {
      context.commit('changeFilterType',payload)
    },
    changeFilterCategory (context, payload) {
      context.commit('changeFilterCategory',payload)
    },
    changeFilterAvailability (context, payload) {
      context.commit('changeFilterAvailability',payload)
    },
    changeProductListing(context, payload) {
      context.commit('changeProductListing', payload)
    }
  }
});
