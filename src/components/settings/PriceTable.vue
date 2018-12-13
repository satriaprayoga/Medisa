<template>
        <v-data-table
            :headers="headers"
            :items="items"
            hide-actions
            class="eleveation-1"
        >
        <template slot="items" slot-scope="props">
            <template v-for="(value,key) in props.item">
                <td v-if="key!=='id'">{{formatNumber(value)}}</td>
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
        openDialog:{
            type:Function
        }
    },
    methods:{
        formatNumber(value){
            var output;
            if(isNaN(value)){
                output=value;
            }else{
                const formatter=Intl.NumberFormat('id-ID',{
                    style:'currency',
                    currency:'IDR',
                    minimumFractionDigits:2
                });
                output=formatter.format(value);
            }
            return output;
        }
    }
        
}
</script>
