<template>
    <v-navigation-drawer
    id="appDrawer"
    v-model="drawer"
    :mini-variant="mini"
    width="260"
    fixed
    app>
        <v-toolbar color="light-green" light>
            <v-img :src="require('../../assets/logo-dd.png')" contain height="36"></v-img>
            <v-toolbar-title class="ml-0 pl-3">
                <span class="hidden-sm-and-down">Dompet Duafa</span>
            </v-toolbar-title>  
        </v-toolbar>
        <vue-perfect-scrollbar class="drawer-menu--scroll" :settings="scrollSettings">
            <app-menu></app-menu>
        </vue-perfect-scrollbar>
    </v-navigation-drawer>
</template>
<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar';
import AppMenu from './AppMenu'

export default {
    name:"app-drawer",
    components:{
        VuePerfectScrollbar,
        AppMenu
    },
    computed:{
        drawer:{
            get(){
                return this.$store.getters['layoutsMenusModule/getDrawer']
            },
            set(val){
               
            }
        }
    },
    data(){
        return{
           
            mini:false,
            scrollSettings: {
                maxScrollbarLength: 160
            }    
        }
    }
}
</script>
<style lang="stylus">
// @import '../../node_modules/vuetify/src/stylus/settings/_elevations.styl';

#appDrawer
  overflow: hidden
  .drawer-menu--scroll
    height: calc(100vh - 48px)
    overflow: auto

</style>