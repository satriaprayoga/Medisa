    <template>
        <div id="pageTable">
            <v-container grid-list-xl fluid>
                <v-layout row wrap>
                    <v-flex sm12>
                        <h3>Daftar Pegawai Medis</h3>
                    </v-flex>  
                    <v-flex lg12>
                        <v-toolbar card color="white">
                            <v-btn color="success" to="/update_employee_non_medics">Tambah Pegawai</v-btn>
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
                        <v-data-table
                            :headers="nonMedics.headers"
                            :items="nonMedics.items"
                            hide-actions
                            class="eleveation-1"
                        >
                        <template slot="items" slot-scope="props">
                            <td>{{ props.item.name }}</td>
                            <td>{{ props.item.type }}</td>
                        </template>

                        </v-data-table>
                    </v-flex>      
                </v-layout>
            </v-container>
        </div>
    </template>
    <script>
    export default {
        data(){
            return{
                nonMedics:{
                    headers:[
                        {
                            text:'Nama',
                            value:'name'
                        },
                        {
                            text:'Tipe',
                            value:'type'
                        }
                    ],
                    items:this.$store.getters["master/getNonMedics"]
                }
            }
        }
    }
    </script>
