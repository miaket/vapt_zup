<template>
  <v-app>
    <toolbar/>
    <v-content>
      <filter-app/>
    </v-content>
    <v-footer>
      <span>2018</span>
    </v-footer>
  </v-app>
</template>

<script>
import FilterApp from './components/FilterApp'
import Toolbar from './components/Toolbar.vue'

export default {
  name: 'App',
  components: {
    FilterApp,
    Toolbar
  },
  data () {
    return {
    }
  }
}
</script>
