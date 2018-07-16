<template>
  <v-container grid-list-md>
    <v-layout 
      row
      wrap>
      <v-flex 
        sm3
        v-for="(field, index) in fields"
        :key=index>
        {{ field }}
        <v-text-field>
        </v-text-field>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data(){
      return{
        fields: this.$store.getters.filterFields,
        products: this.$store.getters.filteredProducts,
        search:'',
        filter:false
      }
    },
  }
</script>

<style scoped>
</style>
