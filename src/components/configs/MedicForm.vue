<template>
    <div id="page-forms">
        <v-container grid-list-xl fluid>
            <v-layout row wrap>
                <v-flex lg12>
                    <v-card class="mb-6">
                        <v-toolbar color="teal" dark flat dense cad>
                            <v-toolbar-title class="subheading">Form Pegawai Medis</v-toolbar-title>
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
                                <v-select v-if="employee.type==='Dokter' ||employee.type===''"
                                    label="Spesialisasi"
                                    :items="specialists"
                                    v-model="employee.specialist"
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
        id(){
            return this.$route.params.id
        }
    },
    data(){
        return{
            types:["Dokter","Perawat","Bidan","Farmasi"],
            specialists:[
                "Anak","Obsgin","Penyakit Dalam","Bedah",
                "Radiologi","Anastesi","Jantung dan Pembuluh Darah",
                "Mata","THT","Jiwa","Paru","Gigi","Umum"
            ],
            employee:{
                name:'',
                type:'',
                specialist:''
            },
            cacheEmployee:{}
        }
        
    },
    beforeMount(){
        var id=parseInt(this.$route.params.id);
        if(!id){
            this.employee={}
        }else{
            this.employee=this.$store.getters['configsEmployeeModule/getMedicId'](id)
        }
        this.cacheEmployee=Object.assign({},this.employee);
    },
    methods:{
        submit(){
            console.log(this.employee);
            this.$store.dispatch('configsEmployeeModule/updateMedic',this.employee);
            this.$router.push('/employee_medics');
        },
        reset(){
         Object.assign(this.employee,this.cacheEmployee);
         
        }
    }
}
</script>
