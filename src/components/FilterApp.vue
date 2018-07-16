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
    {{updateProductsType}}
    <v-data-table
      :headers="headers"
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
        type: '',
        category: '',
        availability: '',
        applyFilterType: '',
        filter: false
      }
    },
    methods:{
      filterByType(searchList){
        searchList = this.products.filter(item => {
          return !this.applyFilterType || (item.type == this.applyFilterType);
        })
        this.filteredProducts = searchList
      }
    },
    computed: {
      searchedProducts: function () {
        let searchList;
        console.log(this.filterByType(this.products))
        searchList = this.filteredProducts.filter(item => {
          return item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        })
        console.log(searchList)
        return searchList;
      },
      updateProductsType() {
        this.applyFilterType = this.$store.getters.applyFilterType;
        // console.log(this.$store.getters.applyFilterType)
        return this.$store.getters.applyFilterType;
      }
    },
    // mounted() {
    //   console.log(this.$store.getters.filteredProducts)
    //   this.products = this.$store.getters.filteredProducts
    // }
  }
</script>

<style scoped>
</style>
