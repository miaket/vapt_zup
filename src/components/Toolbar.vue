<template>
  <v-toolbar
    app
    class="primary"
    dark
  >
  <v-toolbar-title>List filter</v-toolbar-title>
  <v-spacer></v-spacer>
  <v-btn 
    @click.stop="signOut"
    class="primaryd">
    sign out
  </v-btn>
  </v-toolbar>
</template>

<script>
  export default {
    data(){

    },
    methods: {
      signOut() {
        alert("signed out");
      }
    }
  }
</script>
