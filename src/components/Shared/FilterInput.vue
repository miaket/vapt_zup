<template>
<v-container grid-list-md text-xs-center>
  <v-layout row wrap>
    <v-flex sm3  v-for="(header, index) in headers" :key=index>
        {{header.value}}
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
        headers: this.$store.getters.headers,
        products: this.$store.getters.filteredProducts,
        search:'',
        filter:false
      }
    },
  }
</script>

<style scoped>
</style>
