<template>
   <v-container grid-list-xl>
        <v-select
    :items="items"
    v-model="selected"
    @change="change">
    </v-select>
    <v-divider>
    </v-divider>
   <v-data-table v-if='selected===""'
            :headers="headers"
            :items="tableItems"
            hide-actions
            class="elevation-1"
        >
        <template slot="items" slot-scope="props">
            <template v-for="(value,key) in props.item">
                <td v-if="key!=='id'">{{value}}</td>
                <!-- <td>{{ props.item.name }}</td>
            <td>{{ props.item.type }}</td>
            <td>{{ props.item.specialist }}</td> -->
            </template>
            <td >
                <v-icon
                    small
                    class="mr-2"
                    @click="updatePage(props.item.id)"
                >
                    edit
                </v-icon>
                <v-icon
                    small
                    @click="openDialog(props.item)"
                >
                    delete
                </v-icon>
            </td>
        </template>

        </v-data-table>
   </v-container>
   
</template>
<script>
export default {
        props:{
            items:{
                type:Array,
                required:true,
                default:function(){return [];}
            },
            selected:{
                type:String,
                required:true,
                default:function(){return "";}
            },
            change:{
                type:Function
            },

            headers:{
                type:Array,
                required:true,
                default:function(){return [];}
            },
            tableItems:{
                type:Array,
                required:true,
                default:function(){return [];}
            },
            updatePage:{
                type:Function
            },
            openDialog:{
                type:Function
            }
        }
}
</script>
