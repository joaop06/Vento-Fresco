<template>
    <v-app-bar color="indigo-darken-4 pa-2" :elevation="5">

        <v-row no-gutters justify="center" align="center">
            <v-col cols="4">
                <router-link to="/" tag="div" class="ml-5 text-decoration-none" color="white">
                    <v-title class="text-button text-white">
                        <v-icon>mdi-fan</v-icon>
                        Vento Forte
                    </v-title>
                </router-link>
            </v-col>

            <v-col cols="4" class="mt-auto">
                <v-text-field v-model="pesquisa" @input="buscarDados" name="pesquisa" placeholder="O que você está procurando?" class="bg-rgb(255,255,255)" append-inner-icon="mdi-magnify" rounded="lg"></v-text-field>

            </v-col>

            <v-col cols="4">
                <v-col v-if="true" class="d-flex text-right justify-end">

                    <v-btn to="/carrinho" width="5vw" class="ma-5 bg-white" color="indigo-accent-4" rounded="shaped" :elevation="2"
                        icon>
                        <v-icon size="large">mdi-cart</v-icon>
                    </v-btn>

                    <v-btn to="/perfil" width="5vw" class="ma-5 bg-white" color="indigo-accent-4" rounded="shaped" :elevation="2"
                        icon>
                        <v-icon size="large">mdi-account-box</v-icon>
                    </v-btn>

                </v-col>

                <v-col v-else class="text-right">
                    <v-btn to="/login_cadastro" width="14vw" height="5vh" class="overflow-x-hidden ma-5 bg-white font-weight-bold"
                        color="indigo-accent-4" rounded="shaped" :elevation="1" prepend-icon="mdi-login">
                        Entrar / Cadastrar
                    </v-btn>
                </v-col>
            </v-col>
        </v-row>

    </v-app-bar>



    <Carrinho ref="Carrinho" />
    <Home ref="Home" v-if="false" />
</template>
  
<script>
import Carrinho from "@/components/Carrinho.vue"
import Home from "@/views/Home.vue"
import bd from "@/data/bd.json"

export default ({
    components:{
        Carrinho,
        Home
    },
    data() {
        return {
            pesquisa: '',
            resultPesquisa: []
        }
    },
    methods: {
        carrinho(){
            this.$refs.Carrinho.open = true;
        },
        buscarDados(){


            // Limpar os resultados anteriores
            this.resultPesquisa = []

            // Filtrar os dados de "bd" que contenha informações de "pesquisa"
            this.resultPesquisa = bd.filter((item) => item.nome.toLowerCase().includes(this.pesquisa.toLowerCase()))

            // Envia os resultados para a página Home para exibir
            console.log(this.resultPesquisa)
            this.$refs.Home.resultPesquisa = this.resultPesquisa

        }
    }
})
</script>
  