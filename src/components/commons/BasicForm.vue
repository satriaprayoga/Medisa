<template>
    <v-card class="mb-6">
        <v-toolbar color="teal" dark flat dense cad>
            <v-toolbar-title class="subheading">{{title}}</v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
        <v-divider></v-divider>
        <v-card-text class="">
            <v-form>
                <slot name="form_content"></slot>
                <div class="form-btn">
                    <v-btn outline @click.stop.prevent="submit" color="primary">Simpan</v-btn>
                    <v-btn outline @click.stop.prevent="reset">Reset</v-btn>
                </div>
            </v-form>
        </v-card-text>
    </v-card>
</template>
<script>
export default {
    props:{
        title:{
            type:String,
            required:true,
            default:"Form Title"
        },
        submit:{
            type:Function
        },
        reset:{
            type:Function
        }
    }
}
</script>
