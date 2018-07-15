import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    user:{
      id: 0,
      name: '',
    },
    ProductListing:{
      headers: [
        { 
          text: 'Product name',
          align: 'left',
          value: 'name'
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
          value: 'availability'}
      ],
      filters:{
          rating: 4.9,
          type: 'Cages'
        },
      products:[
        {
          name: 'Living World Deluxe Habitat, Large',
          type: 'Cages',
          price: 50.00,
          rating: 4.5,
          availability: 'Out of Stock'
        },
        {
          name: 'Prevue Pet Products 528 Universal Small Animal Home, Dark Gray',
          type: 'Cages',
          price: 66.99,
          rating: 4.9,
          availability: 'In Stock'
        }
      ]
    }
  },
  getters: {
    user: state => {
      return state.user;
    },
    headers: state => {
      console.log (state.ProductListing.headers)
      return state.ProductListing.headers;
    },
    filters: state => {
      return state.ProductListing.filters;
    },
    filteredProducts: state => {
      let filters = state.ProductListing.filters;
      console.log('filters')
      console.log(filters)
      // let filteredProducts = [];
      let products = state.ProductListing.products;
      console.log('prods')
      console.log(products)
      // for (var key in filters) {
      //   if (!filters.hasOwnProperty(key)) continue;
      //   var obj = filters[key];
      //   for (var prop in obj) {
      //     if(!obj.hasOwnProperty(prop)) continue;
      //     filteredProducts.push(obj[prop])
      //   }
      // }
      console.log('filtered prod')

      let filteredProducts = products.filter((e) => filters.includes(e.id));
      console.log(filteredProducts);
      return products;
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
