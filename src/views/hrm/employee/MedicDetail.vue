<template>
    <div>
        <v-container grid-list-xl fluid>
            <v-layout row wrap>
                <detail></detail>
            </v-layout>
        </v-container>
    </div>
</template>
<script>

import Detail from '@/components/commons/Detail'

export default {
    components:{
        Detail
    }
}
</script>
