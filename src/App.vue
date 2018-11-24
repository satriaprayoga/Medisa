<template>
  <div id="appRoot">
    <v-app id="inspired" class="app">
    <app-drawer class="app--drawer"></app-drawer>
    <app-toolbar class="app--toolbar"></app-toolbar>
    <v-content>
      <div class="page-wrapper">
        <app-header></app-header>
        <div class="page-wrapper">
            <router-view></router-view>
          </div>   
      </div>
       <!-- App Footer -->
      <v-footer height="auto" class="white pa-3 app--footer">
        <span class="caption">Medisa - Medical Information System Aja &copy; {{ new Date().getFullYear() }}</span>
        <v-spacer></v-spacer>
        <span class="caption mr-1"> Make With Love </span> <v-icon color="pink" small>favorite</v-icon>
      </v-footer>
    </v-content>
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
  </div>
</template>

<script>
import AppDrawer from './modules/layout/components/AppDrawer'
import AppToolbar from './modules/layout/components/AppToolbar'
import AppHeader from './modules/layout/components/AppHeader'

export default {
  name: 'App',
  components: {
    AppDrawer,
    AppToolbar,
    AppHeader
  },
  data () {
    return {
      //
    }
  }
}
</script>
<style lang="stylus" scoped>
  .page-wrapper
    min-height:calc(100vh - 64px - 50px - 81px );  

</style>
