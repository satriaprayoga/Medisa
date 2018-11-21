<template>
    <v-navigation-drawer
    id="appDrawer"
    v-model="drawer"
    :mini-variant.sync="mini"
    width="260"
    fixed
    app>
        <v-toolbar color="white" light>
          
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
    data(){
        return{
            drawer:null,
            mini:false,
        }
    }
}
</script>
