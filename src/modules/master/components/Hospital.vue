<template>
   <div id="page-info">
       <v-container grid-list-xl fluid>
           <v-layout row wrap>
               <v-flex x16>
                   <v-card>
                       <v-list two-line subheader>
                           <v-subheader>Informasi Rumah Sakit</v-subheader>
                           <v-list-tile avatar>
                                <v-list-tile-content>
                                <v-list-tile-title>Nama Rumah Sakit</v-list-tile-title>
                                <v-list-tile-sub-title>{{info.name}}</v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>
                            <v-list-tile avatar>
                                <v-list-tile-content>
                                <v-list-tile-title>Kode</v-list-tile-title>
                                <v-list-tile-sub-title>{{info.code}}</v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>
                            <v-list-tile avatar>
                                <v-list-tile-content>
                                <v-list-tile-title>Tanggal Daftar</v-list-tile-title>
                                <v-list-tile-sub-title>{{register_date}}</v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>
                            <v-list-tile avatar>
                                <v-list-tile-content>
                                <v-list-tile-title>Direktur</v-list-tile-title>
                                <v-list-tile-sub-title>{{info.director}}</v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>
                            <v-list-tile avatar>
                                <v-list-tile-content>
                                <v-list-tile-title>Alamat</v-list-tile-title>
                                <v-list-tile-sub-title>{{info.address}}</v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>
                       </v-list>
                   </v-card>
               </v-flex>
           </v-layout>
       </v-container>
   </div>
</template>
<script>
import AppWidget from "@/modules/layout/components/AppWidget";

export default {
  name: "hospital-info",
  components: {
    AppWidget
  },
  data() {
    return {
      info: this.$store.getters["master/getHospitalInfo"]
    };
  },
  computed:{
      register_date(){
          var info=this.$store.getters["master/getHospitalInfo"];
          var date=info.registered_date;
          var day=date.getDate();
          var month=date.getMonth();
          var year=date.getFullYear();
          return day+'/'+month+'/'+year;
        
      }
  }
};
</script>
<style lang="stylus" scoped>
</style>
