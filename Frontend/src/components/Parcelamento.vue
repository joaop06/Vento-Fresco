<template>
    <v-dialog v-model="dialog" class="pa-10" scrim="black" width="50%">
        <v-card class="pa-8" :elevation="0">
            <span v-for="i in 12" class="w-100" :key="i">

                <v-row v-if="i % 2 == 0" class="bg-indigo-accent-1 ma-auto pa-1 justify-space-between">
                    <p class="pl-2">{{ i }}x sem juros</p>

                    <p class="pr-2">{{ (preco_produto / i).toLocaleString("pt-BR", {style: "currency", currency: "BRL"}) }}</p>
                </v-row>

                <v-row v-else class="bg-indigo-lighten-5 ma-auto pa-1 justify-space-between">
                    <p class="pl-2">{{ i }}x sem juros</p>

                    <p class="pr-2">{{ (preco_produto / i).toLocaleString("pt-BR", {style: "currency", currency: "BRL"}) }}</p>
                </v-row>
            </span>
        </v-card>
    </v-dialog>
</template>


<script>

export default ({
    data() {
        return {
            dialog: false,
            preco_produto: ''
        }
    },
})

</script>