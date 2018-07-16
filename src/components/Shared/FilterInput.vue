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
    watch: {
      "filter.filterid": function (newFilter, oldFilter) {
        let filterFields = this.$store.getters.filterFields;
        for (let key in newFilter){
          if (key){
            let objname = filterFields[key].name;
            let filterid = this.filter.filterid[key];
            console.log(objname)
            console.log(filterid)
            let payload = filterid
            console.log(payload)
            if (key == 0) this.$store.dispatch('changeFilterType', payload);
            if (key == 1) this.$store.dispatch('changeFilterCategory', payload);
            if (key == 2) this.$store.dispatch('changeFilterAvailability', payload);
          }
        }
      }
    },
  }
</script>

<style scoped>
</style>
