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
                                    v-model="employee.name"
                                    v-validate="'required'"
                                    data-vv-name="name"  
                                    :error-messages="errors.collect('name')"  
                                    required>
                                 </v-text-field>
                                 <v-select
                                    :items="types"
                                    label="Jenis Pegawai"
                                    v-model="employee.type"
                                     v-validate="'required'"
                                    data-vv-name="type"  
                                    :error-messages="errors.collect('type')"  
                                    required
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
        },
        types(){
            var _types= this.$store.getters['hrmEmployeeModule/getMedicTypes'];
            var typeNames=[];
            _types.forEach(element => {
                typeNames.push(element.name);
            });
            console.log(typeNames);
            return typeNames;
        }
    },
    data(){
        return{
           // types:this.$state.getters['hrmEmployeeModule/getMedicTypes'],
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
            this.employee=this.$store.getters['hrmEmployeeModule/getMedicId'](id)
        }
        this.cacheEmployee=Object.assign({},this.employee);
    },
    methods:{
        submit(){
           this.$validator.validateAll().then((result)=>{
               if(result){
                    console.log(this.employee);
            this.$store.dispatch('hrmEmployeeModule/updateMedic',this.employee);
            this.$router.push('/employee_medics');
               }
           });
        },
        reset(){
         if(this.employee.id===undefined){
              this.employee={}
         }else{
              Object.assign(this.employee,this.cacheEmployee);

         }
         $this.validator.reset();
         
        }
    }
}
</script>
