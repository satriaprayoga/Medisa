<template>
   <div id="page-info">
       <v-container grid-list-xl fluid>
           <v-layout row wrap>
               <v-flex x16>
                   <app-widget :title="info.name"></app-widget>
               </v-flex>
           </v-layout>
       </v-container>
   </div>
</template>
<script>

import AppWidget from "@/modules/layout/components/AppWidget"

export default {
    name:'hospital-info',
    components:{
        AppWidget
    },
    data(){
        return{
            info:this.$store.getters['master/getHospitalInfo']
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>
