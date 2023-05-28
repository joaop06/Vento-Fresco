<template>
    <v-container>
        <v-row class="d-flex">
            <v-col cols="10">
                <v-card v-if="produtosCarrinho == 0" width="100%" :elevation="0">
                    <p class="text-h4 mt-12 text-indigo-accent-4" align="center">Seu carrinho está vazio!</p>
                </v-card>

                <v-card v-else class="mt-12" width="100%" :elevation="0">
                    <v-card v-for="(produto, index) in produtosCarrinho" :key="index" :elevation="0"
                        class="ma-auto mt-5 pa-2 d-flex" :style="{ 'border': 'solid grey 2px' }" color="rgb(0,0,0,0)"
                        width="60%" max-height="200px">

                        <v-col cols="3">
                            <v-img :src="produto.imagem"></v-img>
                        </v-col>

                        <v-divider vertical color="black"></v-divider>

                        <v-col cols="7" class="d-flex flex-column justify-space-around">
                            <span class="text-h5 text-indigo-accent-4 my-n12">{{ produto.nome }}</span>
                            <span>{{ (produto.preco).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
                            }}</span>
                        </v-col>

                        <v-col cols="2" class="ma-auto" align="center">
                            <v-btn @click="removeCarrinho(index, produto)" icon="mdi-delete"
                                color="indigo-accent-4"></v-btn>
                        </v-col>
                    </v-card>
                </v-card>
            </v-col>

            <v-col cols="2">
                <v-card class="mt-12 pa-6" color="rgb(0,0,0,0)" :elevation="5" :style="{ 'border': 'solid 2px #304FFE' }">

                    <v-row>
                        <v-card width="100%" min-height="30vh" color="rgb(0,0,0,0)" :elevation="0">
                            <v-row v-for="(produto, index) in produtosCarrinho" :key="index"
                                class="ma-auto mt-2 justify-space-between d-flex text-subtitle-1">
                                <p>{{ produto.nome }}</p>
                                <p>{{ (produto.preco).toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) }}</p>
                            </v-row>
                        </v-card>
                    </v-row>


                    <v-divider></v-divider>

                    <v-row class="ma-auto mt-5 d-flex flex-column" justify="end">
                        <div v-if="totalCarrinho == null" class="justify-space-between d-flex text-h6">
                            <p class="pl-2">Total:</p>

                            <p class="pr-2">R$ 0,00</p>
                        </div>
                        <div v-else-if="totalCarrinho <= 0" class="justify-space-between d-flex text-h6">
                            <p class="pl-2">Total:</p>

                            <p class="pr-2">R$ 0,00</p>
                        </div>
                        <div v-else class="justify-space-between d-flex text-h6">

                            <p class="pl-2">Total:</p>

                            <p class="pr-2">{{ (totalCarrinho).toLocaleString("pt-BR", {
                                style: "currency", currency: "BRL"
                            }) }}</p>

                        </div>
                    </v-row>

                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>


<script>
import globalVariables from '@/controller/globalVariables'

export default ({

    data() {
        return {
            produtosCarrinho: [],
            totalCarrinho: null
        }
    },
    methods: {
        carregaCarrinho() {
            this.produtosCarrinho = globalVariables.listaCarrinho
            this.totalCarrinho = globalVariables.totalCarrinho
        },
        removeCarrinho(index, produto) {
            globalVariables.totalCarrinho -= parseFloat(produto.preco)
            globalVariables.listaCarrinho.splice(index, 1)

            this.$router.push('/carrinho')

        }
    },
    mounted() {
        this.carregaCarrinho()
    }
})

</script>