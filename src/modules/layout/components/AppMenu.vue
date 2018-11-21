<template>
    <v-list class="pa-2 ma-2" dense expand>
                <v-list-tile>
                  <v-list-tile-action>
                        <label>Modul:</label>
                   </v-list-tile-action>
                   <v-list-tile-content>
                       <v-select
                        :items="loadModules"
                        v-model="selected"
                        @change="loadMenu"></v-select>
                   </v-list-tile-content>
                </v-list-tile> 
                <v-divider></v-divider>
                <v-list-group>
                    <v-list-tile slot="activator">
                        <v-list-tile-content>
                            <v-list-tile-title>{{menus.title}}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile v-for="it in menus.item" :key="it.title" @click="">
                        <v-list-tile-content>
                            <v-list-tile-title>{{ it.title }}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list-group>
     </v-list>
</template>
<script>
export default {
    name:'app-menu',
    computed:{
        loadModules(){
            return this.$store.getters['layout/getModules'];
        }
    },
    created(){
        this.menus=this.$store.getters['layout/getActiveMenu'][0];
    },
    data(){
        return{
            selected:'Help Desk',
            menus:null
        }
    },
    methods:{
        loadMenu(){
            this.$store.commit('layout/changeModule',this.selected);
            this.$store.commit('layout/changeMenu')
            this.menus=this.$store.getters['layout/getActiveMenu'];
            console.log(this.menus[0])
        }
    }
}
</script>
