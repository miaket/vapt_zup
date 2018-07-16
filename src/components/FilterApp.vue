<template>
  <v-container fluid>
    <v-layout justify-end>
    <v-flex sm8>
      <v-text-field
        label="Search"
        placeholder="Search by name"
        v-model="search"
        solo
        append-icon='search'
      >
      </v-text-field>
    </v-flex>
    </v-layout>
    <v-layout justify-end>
      <v-btn  @click="filter = !filter" flat color="blue lighten-2">
        Filter <v-icon left>filter_list</v-icon>
      </v-btn>
    </v-layout>
    <filter-input v-if="filter" />
    <v-data-table
      :headers="headers"
      :items="filteredProducts"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
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
        search:'',
        filter:false
      }
    },
    computed: {
      filteredProducts: function () {
        return this.products.filter(item => {
          return item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        })
      }
    }
  }
</script>

<style scoped>
</style>
