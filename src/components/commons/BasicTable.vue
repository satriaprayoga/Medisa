<template>
        <v-data-table
            :headers="headers"
            :items="items"
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
                    class="mr-2"
                    @click="viewPage(props.item.id)"
                >
                    visibility
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
</template>
<script>
export default {
    props:{
        headers:{
            type:Array,
            required:true,
            default:function(){return [];}
        },
        items:{
            type:Array,
            required:true,
            default:function(){return [];}
        },
        updatePage:{
            type:Function
        },
        viewPage:{
            type:Function
        },
        openDialog:{
            type:Function
        }
    }
        
}
</script>
