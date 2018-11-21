<template>
    <v-navigation-drawer
    id="appDrawer"
    v-model="drawer"
    :mini-variant="mini"
    width="260"
    fixed
    app>
        <v-toolbar color="white" light>
            <v-img :src="require('../../../assets/logo-dd.png')" contain height="36"></v-img>
            <v-toolbar-title class="ml-0 pl-3">
                <span class="hidden-sm-and-down">Dompet Duafa</span>
            </v-toolbar-title>  
        </v-toolbar>
        <app-menu/>
    </v-navigation-drawer>
</template>
<script>

import AppMenu from './AppMenu'

export default {
    name:"app-drawer",
    components:{
        AppMenu
    },
    computed:{
        drawer:{
            get(){
                return this.$store.getters['layout/getDrawer']
            },
            set(val){
               
            }
        }
    },
    data(){
        return{
           
            mini:false,
        }
    }
}
</script>
