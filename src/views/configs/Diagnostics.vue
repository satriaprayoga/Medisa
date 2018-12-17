    <template>
        <div id="pageTable">
            <v-container grid-list-xl fluid>
                <v-layout row wrap>
                    <v-flex sm12>
                        <h3>Daftar Diagnosa</h3>
                    </v-flex>  
                    <v-flex lg12>
                        <v-toolbar card color="white">
                            <v-btn color="success" to="/update_diagnostics">Tambah Diagnosa</v-btn>
                            <v-text-field
                            flat
                            solo
                            prepend-icon="search"
                            placeholder="Cari Diagnosa"
                            hide-details
                            class="hidden-sm-and-down"
                            ></v-text-field>           
                        </v-toolbar>
                        <v-divider></v-divider>
                        <basic-table :headers="diagnostics.headers" 
                            :items="diagnostics.items" 
                        >
                        </basic-table>
                    </v-flex>      
                </v-layout>
            </v-container>
        </div>
    </template>
    <script>

    import BasicTable from "@/components/commons/BasicTable"

    export default {
        components:{
            BasicTable
        },
        data(){
            return{
                dialog:false,
                diagnostics:{
                    headers:[
                        {
                            text:'DTD',
                            value:'dtd'
                        },
                        {
                            text:'Kode',
                            value:'code'
                        },
                        {
                            text:'Diagnosa',
                            value:'name'
                        },
                        {
                            text:'Aksi',
                            value:'action'
                        }
                    ],
                    items:this.$store.getters["configsDiagnosticsModule/getDiagnostics"]
                },
                selected:{}
            }
        },
        methods:{
        }
    }
    </script>
