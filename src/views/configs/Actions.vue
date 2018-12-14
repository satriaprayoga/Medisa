    <template>
        <div id="pageTable">
            <v-container grid-list-xl fluid>
                <v-layout row wrap>
                    <v-flex sm12>
                        <h3>Pilih Tindakan</h3>
                        <v-toolbar card color="white">
                            <v-select 
                                :items="loadSelections"
                                v-model="selected"
                                @change="change"></v-select>   
                        </v-toolbar>
                    </v-flex>  
                    <v-flex lg12>
                         
                    </v-flex>
                    <v-flex lg12 v-if="selected!==''">
                         <v-toolbar card color="white">
                            <v-btn color="success" to="">Tambah Tindakan</v-btn>
                            <v-text-field
                            flat
                            solo
                            prepend-icon="search"
                            placeholder="Cari Tindakan"
                            hide-details
                            class="hidden-sm-and-down"
                            ></v-text-field>           
                        </v-toolbar>
                        <v-divider></v-divider>
                        <price-table :headers="actions.headers"
                            :items="actions.items" 
                        >
                        </price-table>
                    </v-flex>      
                </v-layout>
            </v-container>
        </div>
    </template>
    <script>

    import PriceTable from "@/components/configs/PriceTable"

    export default {
        components:{
            PriceTable
        },
        computed:{
            loadSelections(){
                var selections=[];
                var actions=this.$store.getters["configsActionsModule/getActions"];
                actions.forEach(element => {
                    selections.push(element.type)
                });
                return selections;
            }
        },
        data(){
            return{
                dialog:false,
                actions:{
                    headers:[
                        {
                            text:'Nama',
                            value:'name'
                        },
                        {
                            text:'Harga',
                            value:'price'
                        },
                        {
                            text:'Aksi',
                            value:'action'
                        }
                    ],
                    items:[]
                },
                selected:''
            }
        },
        methods:{
            change(){
                this.actions.items=this.$store.getters["configsActionsModule/getSubActionsByType"](this.selected)
            }
        }
    }
    </script>
