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
        'type',
        'price',
        'availability'
      ],
    },
    productListing:{
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
        },
        {
          name: 'Kaytee Timothy Complete Diet for Rabbit',
          type: 'Food',
          price: 11.49,
          rating: 4.7,
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
      console.log (state.productListing.headers)
      return state.productListing.headers;
    },
    filterFields: state => {
      return state.filter.fields;
    },
    filters: state => {
      return state.productListing.filters;
    },
    filteredProducts: state => {
      let filters = state.productListing.filters;
      console.log('filters')
      console.log(filters)
      let filteredProducts = [];
      let products = state.productListing.products;
      console.log('prods')
      console.log(products)

      console.log('double loop')
      for (let key in products) {
        if (!products.hasOwnProperty(key)) continue;
        var obj = products[key];
        console.log('ibj')
        console.log(obj)
        // console.log(key)

      //   Object.keys(obj).forEach(function(key,index) {
      //     console.log(obj)
      //     console.log(Object.values(obj))
      //     console.log(obj + key)
      //     console.log(index)
      //     // key: the name of the object key
      //     // index: the ordinal position of the key within the object 
      // });
        for (var prop in obj) {
          if (obj.hasOwnProperty(prop)) {
            console.log('nd')
            console.log(console.log(Object.values(obj)))
            let regex = / + state.productListing.filters + /i;
            // console.log(state.productListing.filters)
            console.log(regex)
            if(regex.test(prop)){
              filteredProducts.push(obj[prop])
    
            }
            // do stuff
        }
          // if(!obj.hasOwnProperty(prop)) continue;
          // let propname = prop
// console.log(obj[0].prop)
        }

      }

      console.log('filtered prod')

      
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
