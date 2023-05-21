<template>
    <v-container>
        <v-row>

            <v-col>

                <p class="text-indigo-accent-4 text-h5 text-center mt-12">Dados Pessoais</p>

                <v-sheet class="pa-12 ma-auto d-flex flex-column" width="50%" rounded="xl" :elevation="0">

                    <div class="mt-7">
                        <v-card color="rgb(0,0,0,0)" elevation="0">
                            <v-row class="ma-auto">
                                <v-text-field v-model="cliente.nome_completo" name="nome_completo" type="text" label="Nome Completo"
                                    class="mr-8" :style="{ 'color': 'white' }" bg-color="indigo-accent-4"
                                    placeholder="Ex: João Silva" :readonly="true">
                                </v-text-field>

                                <v-text-field v-model="cliente.celular" name="celular" label="Celular" :style="{ 'color': 'white' }"
                                    bg-color="indigo-accent-4" placeholder="(__) _____-____" :readonly="true">
                                </v-text-field>

                            </v-row>

                            <v-row class="ma-auto">
                                <v-text-field v-model="cliente.email" name="email" type="email" label="E-mail"
                                    :rules="[requiredCadastro, validEmail]" :style="{ 'color': 'white' }"
                                    bg-color="indigo-accent-4" placeholder="Ex: joao_silva@gmail.com" :readonly="true">
                                </v-text-field>
                            </v-row>


                            <v-row class="ma-auto mt-5">
                                <v-btn @click="chamar_alterarDados" class="ma-auto bg-indigo-accent-4">
                                    Alterar Dados
                                </v-btn>
                            </v-row>
                        </v-card>
                    </div>
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>


    <AlterarDados ref="AlterarDados" />
</template>

<script>
import cliente from '@/data/clientes.json'
import AlterarDados from '@/components/AlterarDados.vue'

export default ({
    components:{
        AlterarDados
    },
    data() {
        return {
            cliente: cliente.find(item => item.id == 1),
            readonly: true,
            showpassCadastro: null
        }
    },
    methods:{
        chamar_alterarDados(){
            console.log(this.cliente)
            this.$refs.AlterarDados.open = true;
            this.$refs.AlterarDados.newNome_completo = this.cliente.nome_completo;
            this.$refs.AlterarDados.newCelular = this.cliente.celular;
            this.$refs.AlterarDados.newEmail = this.cliente.email;
            
        }
    },
    mounted(){
        this.$refs.AlterarDados.cliente = this.cliente;
    }
})
</script>