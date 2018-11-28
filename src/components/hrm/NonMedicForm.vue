<template>
    <div id="page-forms">
        <v-container grid-list-xl fluid>
            <v-layout row wrap>
                <v-flex lg12>
                    <v-card class="mb-6">
                        <v-toolbar color="teal" dark flat dense cad>
                            <v-toolbar-title class="subheading">Form Pegawai Non Medis</v-toolbar-title>
                            <v-spacer></v-spacer>
                        </v-toolbar>
                        <v-divider></v-divider>
                         <v-card-text class="">
                             <v-form>
                                 <v-text-field
                                    label="Nama Lengkap"
                                    name="name"
                                    v-model="employee.name">
                                 </v-text-field>
                                 <v-select
                                    :items="types"
                                    label="Jenis Pegawai"
                                    v-model="employee.type"
                                    auto>
                                </v-select>
                                  <div class="form-btn">
                                    <v-btn outline @click.stop.prevent="submit()" color="primary">Simpan</v-btn>
                                    <v-btn outline @click.stop.prevent="reset()">Reset</v-btn>
                                 </div>
                             </v-form>
                        </v-card-text>  
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>
<script>
export default {
    computed:{
        types(){
             var _types=this.$store.getters['hrmEmployeeModule/getNonMedicTypes'];
             var typeNames=[];
            _types.forEach(element => {
                typeNames.push(element.name);
            });
            return typeNames;
        }
    },
    data(){
        return{
            employee:{
                name:'',
                type:'',
            },
            cacheEmployee:{}
        }
        
    },
    beforeMount(){
        var id=parseInt(this.$route.params.id);
        if(!id){
            this.employee={}
        }else{
            this.employee=this.$store.getters['hrmEmployeeModule/getNonMedicId'](id)
        }
        this.cacheEmployee=Object.assign({},this.employee);
    },
    methods:{
        submit(){
            console.log(this.employee);
            this.$store.dispatch('hrmEmployeeModule/updateNonMedic',this.employee);
            this.$router.push('/employee_non_medics');
        },
        reset(){
           Object.assign(this.employee,this.cacheEmployee);
        }
    }
}
</script>
