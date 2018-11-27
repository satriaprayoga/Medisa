    <template>
        <div id="pageTable">
            <v-container grid-list-xl fluid>
                <v-layout row wrap>
                    <v-flex sm12>
                        <h3>Daftar Pegawai Medis</h3>
                    </v-flex>  
                    <v-flex lg12>
                        <v-toolbar card color="white">
                            <v-btn color="success" to="/update_employee_medics">Tambah Pegawai</v-btn>
                            <v-text-field
                            flat
                            solo
                            prepend-icon="search"
                            placeholder="Cari Pegawai"
                            hide-details
                            class="hidden-sm-and-down"
                            ></v-text-field>           
                        </v-toolbar>
                        <v-divider></v-divider>
                        <employee-table :headers="medics.headers" 
                            :items="medics.items" 
                            :openDialog="openDialog"
                            :updatePage="updatePage" >
                        </employee-table>
                        <v-dialog v-model="dialog" width="290">
                            <v-card>
                                <v-card-title class="headline">Anda Yakin akan menghapus data?</v-card-title>
                                 <v-card-text>
                                     nama: {{selected.name}}<br/>
                                     jenis: {{selected.type}}<br/>
                                     specialist:{{selected.specialist}}
                                 </v-card-text>
                                    <v-card-actions>
                                         <v-spacer></v-spacer>

                                        <v-btn
                                            color="red darken-1"
                                            flat="flat"
                                            @click="removeMedic"
                                        >
                                            Setuju
                                        </v-btn>

                                        <v-btn
                                            color="green darken-1"
                                            flat="flat"
                                            @click="dialog = false"
                                        >
                                            Batal
                                        </v-btn>
                                  </v-card-actions>

                            </v-card>
                        </v-dialog>
                    </v-flex>      
                </v-layout>
            </v-container>
        </div>
    </template>
    <script>

    import EmployeeTable from "@/components/configs/EmployeeTable"

    export default {
        components:{
            EmployeeTable
        },
        data(){
            return{
                dialog:false,
                medics:{
                    headers:[
                        {
                            text:'Nama',
                            value:'name'
                        },
                        {
                            text:'Tipe',
                            value:'type'
                        },
                        {
                            text:'Spesialis',
                            value:'specialist'
                        },
                        {
                            text:'Aksi',
                            value:'action'
                        }
                    ],
                    items:this.$store.getters["configsEmployeeModule/getMedics"]
                },
                selected:{}
            }
        },
        methods:{
            updatePage(id){
                this.$router.push('/update_employee_medics/'+id)
            },
            openDialog(medic){
                this.selected=this.$store.getters['configsEmployeeModule/getMedicId'](medic.id)
                this.dialog=true;
                //this.$store.dispatch('master/deleteMedic',selected)
            },
            removeMedic(){
                this.$store.dispatch('configsEmployeeModule/removeMedic',this.selected);
                this.dialog=false
            }
        }
    }
    </script>
