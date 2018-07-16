<template>
  <v-app>
    <toolbar/>
    <v-content>
      <filter-app/>
    </v-content>
    <v-footer>
      <span>2018</span>
    </v-footer>
  </v-app>
</template>

<script>
import FilterApp from './components/FilterApp'
import Toolbar from './components/Toolbar.vue'

export default {
  name: 'App',
  components: {
    FilterApp,
    Toolbar
  },
  mounted () {
    //for mocking purposes, only
    let axios = require('axios');
    let MockAdapter = require('axios-mock-adapter');
    // This sets the mock adapter on the default instance
    let mock = new MockAdapter(axios);

    // Mock GET request to /users when param `searchText` is 'John' 
    // arguments for reply are (status, data, headers)
    mock.onGet('/productlist').reply(200, {
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
    });
    let auxresponse
    axios.get('/productlist')
      .then(response => {
        console.log('respds')
        console.log(response.data.productListing);
        this.$store.dispatch('changeProductListing', response.data.productListing)
      });
    }
  }
</script>
