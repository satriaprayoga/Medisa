<template>
    <v-list dense expand>
                <v-list-tile>
                  <v-list-tile-content>
                       <v-list-tile-title><h4>Pilih Modul</h4></v-list-tile-title>
                   </v-list-tile-content>
                </v-list-tile> 
                 <v-divider></v-divider>
                <v-list-tile>
                    <v-list-tile-content>
                       <v-select
                        :items="loadModules"
                        v-model="selected"
                        @change="loadMenu"
                        ></v-select>
                   </v-list-tile-content>
                </v-list-tile>
                <v-divider></v-divider>
                    <!-- <v-list-tile slot="activator">
                        <v-list-tile-content>
                            <v-list-tile-title>{{menus.title}}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile> -->
                    <template v-for="it in menus.item">
                        <v-list-group v-if="it.subItem" :key="it.name">
                             <v-list-tile slot="activator" ripple dense>
                                <v-list-tile-content>
                                    <v-list-tile-title>{{it.title}}</v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                             <v-list-tile v-for="i in it.subItem" :key="i.name" :to="i.to">
                                <v-list-tile-content>
                                    <v-list-tile-title>{{ i.title}}</v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </v-list-group>
                        <v-list-tile v-else :key="it.name" @click="" :to="it.to">
                            <v-list-tile-content>
                                    <v-list-tile-title>{{ it.title}}</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </template>
     </v-list>
</template>
<script>
import helpdesk from '../api/menus/helpdesk'
import master from '../api/menus/master'
import registration from '../api/menus/registration'
import igd from '../api/menus/igd'

export default {
    name:'app-menu',
    computed:{
        loadModules(){
            return this.$store.getters['layout/getModules'];
        }
    },
    created(){
        this.menus=helpdesk.helpdesk;
    },
    data(){
        return{
            selected:'Help Desk',
            menus:{}
        }
    },
    methods:{
        loadMenu(){
            this.$store.commit('layout/changeModule',this.selected);
            var currentModule=this.$store.getters['layout/getActiveModule'];
            var modules=this.$store.getters['layout/getModules'];
            if(currentModule===modules[1])
                this.menus=master.master;
            else if(currentModule===modules[2])
                this.menus=registration.registration
            else if(currentModule===modules[3])
                this.menus=igd.igd;
            else
                this.menus=helpdesk.helpdesk;
        }
    }
}
</script>
