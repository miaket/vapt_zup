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
    }
  }
</script>

<style scoped>
</style>
