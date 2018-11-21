<template>
  <v-app>
    <app-drawer/>
    <app-toolbar/>
   <!--  <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <HelloWorld/>
    </v-content> -->
  </v-app>
</template>

<script>
import AppDrawer from './modules/layout/components/AppDrawer'
import AppToolbar from './modules/layout/components/AppToolbar'

export default {
  name: 'App',
  components: {
    AppDrawer,
    AppToolbar
  },
  data () {
    return {
      //
    }
  }
}
</script>
