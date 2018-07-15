<template>
  <v-toolbar
    app
    class="primary"
    dark
  >
  <!-- <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon> -->
  <v-btn icon @click.stop="miniVariant = !miniVariant">
    <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
  </v-btn>
  <v-btn icon @click.stop="clipped = !clipped">
    <v-icon>web</v-icon>
  </v-btn>
  <v-btn icon @click.stop="fixed = !fixed">
    <v-icon>remove</v-icon>
  </v-btn>
  <v-toolbar-title v-text="title"></v-toolbar-title>
  <v-spacer></v-spacer>
  <v-btn icon @click.stop="rightDrawer = !rightDrawer">
    <v-icon>menu</v-icon>
  </v-btn>
</v-toolbar>
</template>
