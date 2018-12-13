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
                    <template v-for="it in menus.items">
                        <v-list-group v-if="it.subItems" :key="it.name">
                             <v-list-tile slot="activator" ripple dense>
                                <v-list-tile-content>
                                    <v-list-tile-title>{{it.title}}</v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                             <v-list-tile v-for="i in it.subItems" :key="i.name" :to="i.to">
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

import {helpdesk} from '@/store/api/menus/helpdesk'
import {hrm} from '@/store/api/menus/hrm'
import {configs} from '@/store/api/menus/configs'

export default {
    name:'app-menu',
    computed:{
        loadModules(){
           return this.$store.getters['layoutsMenusModule/getModules'];
        }
    },
    created(){
        this.menus=helpdesk.data;
    },
    data(){
        return{
            selected:'Bantuan',
            menu:{}
        }
    },
    methods:{
        loadMenu(){
            this.$store.dispatch('layoutsMenusModule/changeModule',this.selected);
            var currentModule=this.$store.getters['layoutsMenusModule/getActiveModule'];
            var modules=this.$store.getters['layoutsMenusModule/getModules'];
             if(currentModule===modules[1])
                this.menus=hrm.data;
             else if(currentModule===modules[2])
                this.menus=configs.data;
            else
                this.menus=helpdesk.data;
            console.log(this.menus);
        }
    }
}
</script>
