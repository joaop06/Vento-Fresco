<template>
<v-dialog v-model="open" class="" scrim="black" :offset-y="5000" no-gutters>
    <v-card class="bg-red mr-12 algin-center">
        <span>TESTE</span>
    </v-card>

</v-dialog>

</template>


<script>

export default({
    data(){
        return{
            open: false
        }
    }
})
</script>