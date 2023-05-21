<template>
    <v-card class="bg-indigo-darken-4" justify="start" width="12%" height="100%" rounded="0">

        <v-expansion-panels class="mt-5 pa-2" :elevation="0">
            <v-expansion-panel class="bg-indigo-darken-4" :elevation="0">

                <v-expansion-panel-title class="bg-transparent">
                    <template v-slot:default="{ expanded }">
                        <v-row no-gutters>
                            <v-col cols="4" class="d-flex text-white justify-start">
                                Categorias
                            </v-col>
                        </v-row>
                    </template>
                </v-expansion-panel-title>

                <v-expansion-panel-text>
                    <v-btn to="/" prepend-icon="mdi-account-multiple" class="mt-5 text-white text-subtitle-2" width="100%"
                        color="rgb(0,0,0,0)" :elevation="0">
                        Power
                    </v-btn>

                    <v-btn to="/" prepend-icon="mdi-account-multiple" class="mt-5 text-white text-subtitle-2" width="100%"
                        color="rgb(0,0,0,0)" :elevation="0">
                        Lower
                    </v-btn>

                    <v-btn to="/" prepend-icon="mdi-account-multiple" class="mt-5 text-white text-subtitle-2" width="100%"
                        color="rgb(0,0,0,0)" :elevation="0">
                        Confort
                    </v-btn>
                </v-expansion-panel-text>

            </v-expansion-panel>
        </v-expansion-panels>

        <v-list class="mt-3 bg-indigo-darken-4" nav color="white">


            <v-list-item prepend-icon="mdi-account-multiple" title="Mais Vendidos" to="/" class="mt-5"></v-list-item>
            <v-list-item prepend-icon="mdi-star" title="Lançamentos" to="/" class="mt-5"></v-list-item>
        </v-list>
    </v-card>
</template>


<script>
export default ({
    data() {
        return {
            expanded: false,
            trip: {
                name: '',
            },

        }
    }
})
</script>