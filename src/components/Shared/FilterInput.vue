<template>
  <v-container grid-list-md>
    <v-layout 
      row
      wrap>
      <v-flex 
        v-for="(field, index) in fields"
        sm4
        :key=index>
        <v-select 
          :label = field.name
          :items = field.content
          v-model = "filter.filterid[index]">
        </v-select>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data(){
      return{
        fields: this.$store.getters.filterFields,
        filter:{
          filterid:[]
        }
      }
    },
  }
</script>

<style scoped>
</style>
