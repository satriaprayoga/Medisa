<template>
   <div id="page-info">
       <v-container grid-list-xl fluid>
           <v-layout row wrap>
               <v-flex x16>
                   <v-widget title="Informasi Rumah Sakit"></v-widget>
               </v-flex>
           </v-layout>
       </v-container>
   </div>
</template>
<script>

import AppWidget from "@modules/layout/components/AppWidget"

export default {
    name:'hospital-info',
    components:{
        AppWidget
    }
}
</script>
<style lang="stylus" scoped>

</style>
