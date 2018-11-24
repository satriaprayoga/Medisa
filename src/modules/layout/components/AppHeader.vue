<template>
  <v-layout row class="align-center layout px-4 pt-4 app--page-header">
    <div class="page-header-left">
      <h3 class="pr-3">{{title}}</h3>
    </div>
    <v-breadcrumbs divider="-">
      <v-breadcrumbs-item>
      <v-icon larg>home</v-icon>
      </v-breadcrumbs-item>
    </v-breadcrumbs>
    <v-spacer></v-spacer>
    <div class="page-header-right">
      <v-btn icon>
        <v-icon class="text--secondary">refresh</v-icon>
      </v-btn>
    </div>
  </v-layout>  
</template>

<script>
export default {
  name:'app-header',
  data () {
    return {
      title: 'Dashboard'
    };
  },
  computed: {
      
    },    
  }

</script>
