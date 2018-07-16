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
        name: ''
      }
    },
    productListing:{
      headers: [
        { 
          text: 'Product name',
          align: 'left',
          value: 'name'
        },
        {
          text: 'Pet Category',
          align: 'left',
          value: 'category'
        },
        { 
          text: 'Type',
          align: 'left',
          value: 'type'
        },
        { 
          text: 'Price',
          value: 'price'
        },
        { 
          text: 'Rating',
          value: 'rating'
        },
        { 
          text: 'Availability',
          align: 'left',
          value: 'availability'
        }
      ],
      products:[
        {
          name: 'Living World Deluxe Habitat, Large',
          category: 'Small animals',
          type: 'Cages',
          price: 50.00,
          rating: 4.5,
          availability: 'Out of Stock'
        },
        {
          name: 'Prevue Pet Products 528 Universal Small Animal Home, Dark Gray',
          category: 'Small animals',
          type: 'Cages',
          price: 66.99,
          rating: 4.9,
          availability: 'In Stock'
        },
        {
          name: 'Kaytee Timothy Complete Diet for Rabbit',
          category: 'Small animals',
          type: 'Foods',
          price: 11.49,
          rating: 4.7,
          availability: 'In Stock'
        },
        {
          name: 'Purina Fancy Feasts Grilled Seafood Collection ',
          category: 'Cats',
          type: 'Foods',
          price: 12.59,
          rating: 4.4,
          availability: 'In Stock'
        },
      ]
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
      console.log('filter type in store')
      console.log(state.filter.apply.type)
      return state.filter.apply.type;
    },
    applyFilterCategory: state => {
      console.log('filter type in store')
      console.log(state.filter.apply.category)
      return state.filter.apply.category;
    },
    applyFilterAvailability: state => {
      console.log('filter type in store')
      console.log(state.filter.apply.availability)
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
      console.log('insidemut')
      state.filter.apply.type = payload
      console.log(state.filter.apply)
    },
    changeFilterCategory(state, payload) {
      console.log('insidemut')
      state.filter.apply.category = payload
      console.log(state.filter.apply)
    },
    changeFilterAvailability(state, payload) {
      console.log('insidemut')
      state.filter.apply.availability = payload
      console.log(state.filter.apply)
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
    }
  }
});
