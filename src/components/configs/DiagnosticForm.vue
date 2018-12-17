<template>
    <div id="page-forms">
        <v-container grid-list-xl fluid>
            <v-layout row wrap>
                <v-flex lg12>
                    <basic-form :title='title' :submit='submit' :reset='reset'>
                        <template slot="form_content">
                            <v-text-field
                             label="DTD"
                             name="dtd"
                             v-model="diagnostic.dtd">
                             </v-text-field>
                               <v-text-field
                             label="Kode Diagnosa"
                             name="code"
                             v-model="diagnostic.code">
                             </v-text-field>
                               <v-text-field
                             label="Nama Penyakit"
                             name="name"
                             v-model="diagnostic.name">
                             </v-text-field>
                        </template>
                    </basic-form>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>
<script>
  import BasicForm from "@/components/commons/BasicForm"

export default {
    components:{
        BasicForm
    },
    beforeMount(){
        var id=parseInt(this.$route.params.id);
         if(!id){
            this.diagnostic={}
        }else{
            this.diagnostic=this.$store.getters['configsDiagnosticsModule/getDiagnosticId'](id)
        }
        this.cacheDiagnostic=Object.assign({},this.diagnostic);
    },
    data(){
        return{
            title:'Form Diagnosa',
            diagnostic:{
                dtd:'',
                code:'',
                name:''
            },
            cacheDiagnostic:{}
        }
    },
    methods:{
        submit(){
            console.log(this.diagnostic);
            this.$store.dispatch('configsDiagnosticsModule/update',this.diagnostic);
            this.$router.push('/diagnostics');
        },
        reset(){
            Object.assign(this.diagnostic,this.cacheDiagnostic);
        }
    }
}
</script>
