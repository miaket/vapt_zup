<template>
  <v-app>
    <toolbar/>
    <v-content>
      <hello-world/>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Toolbar from './components/Toolbar.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Toolbar
  },
  data () {
    return {
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      right: true,
    }
  }
}
</script>
