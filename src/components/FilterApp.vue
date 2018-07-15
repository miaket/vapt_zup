<template>
  <v-container fluid>
    <v-data-table
      :headers="headers"
      :items="products"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.type }}</td>
        <td class="text-xs-right">{{ props.item.price }}</td>
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
        products: this.$store.getters.products
      }
    }
  }
</script>

<style scoped>
</style>
