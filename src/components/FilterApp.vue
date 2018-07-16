<template>
  <v-container fluid>
    <v-layout justify-end>
    <v-flex sm8>
      <v-text-field
        label="Search"
        placeholder="Search by name"
        v-model="search"
        solo
        append-icon='search' />
    </v-flex>
    </v-layout>
    <v-layout justify-end>
      <v-btn 
        @click="filter = !filter" 
        flat
        color="primaryl">
        Filter
        <v-icon left>
          filter_list
        </v-icon>
      </v-btn>
    </v-layout>
    <filter-input v-if="filter" />
    
    <v-chip v-if="updateProductsType">{{updateProductsType}}</v-chip> 
    <v-chip v-if="updateProductsCategory">{{updateProductsCategory}}</v-chip>
    <v-chip v-if="updateProductsAvailability">{{updateProductsAvailability}}</v-chip>
    
    <v-data-table
      :headers="computedProducts"
      :items="searchedProducts"
      hide-actions
      class="elevation-1">
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td>{{ props.item.category }}</td>
        <td>{{ props.item.type }}</td>
        <td>{{ props.item.price }}</td>
        <td>{{ props.item.rating }}</td>
        <td>{{ props.item.availability }}</td>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import FilterInput from './Shared/FilterInput.vue'
import axios from 'axios'
  export default {
    components:{
      FilterInput,
    },
    data(){
      return{
        headers: this.$store.getters.headers,
        products: this.$store.getters.filteredProducts,
        filteredProducts: this.products,
        search: '',
        applyFilterType: '',
        applyFilterCategory: '',
        applyFilterAvailability: '',
        filter: false
      }
    },
    methods:{
      filterList(searchList){
        let auxlist = this.products
        auxlist = auxlist.filter(item => {
          return !this.applyFilterType || (item.type == this.applyFilterType);
        })
        auxlist = auxlist.filter(item => {
          return !this.applyFilterCategory || (item.category == this.applyFilterCategory);
        })
        auxlist = auxlist.filter(item => {
          console.log(item.availability + ' vs ' + this.applyFilterAvailability)
          return !this.applyFilterAvailability || (item.availability == this.applyFilterAvailability);
        })
        this.filteredProducts = auxlist
      }
    },
    computed: {
      computedProducts(){
        this.headers = this.$store.getters.headers;
        this.products = this.$store.getters.filteredProducts;
        return this.$store.getters.headers;
      },
      searchedProducts: function () {
        let searchList;
        //to-do fix this weird call
        console.log(this.filterList(this.products))
        searchList = this.filteredProducts.filter(item => {
          return item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        })
        console.log(searchList)
        return searchList;
      },
      updateProductsType() {
        this.applyFilterType = this.$store.getters.applyFilterType;
        return this.$store.getters.applyFilterType;
      },
      updateProductsCategory() {
        this.applyFilterCategory = this.$store.getters.applyFilterCategory;
        return this.$store.getters.applyFilterCategory;
      },
      updateProductsAvailability() {
        this.applyFilterAvailability = this.$store.getters.applyFilterAvailability;
        return this.$store.getters.applyFilterAvailability;
      }
    },
    mounted () {
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

<style scoped>
</style>
