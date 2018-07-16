<template>
  <v-container fluid>
    <v-flex sm8>
      <v-text-field
        label="Search"
        placeholder="Search"
        v-model="filter"
        solo
        append-icon='search'
      >
      </v-text-field>
    </v-flex>
    <v-data-table
      :headers="headers"
      :items="products"
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
  export default {
    data(){
      return{
        headers: this.$store.getters.headers,
        products: this.$store.getters.filteredProducts,
        filter:''
      }
    }
  }
</script>

<style scoped>
</style>
