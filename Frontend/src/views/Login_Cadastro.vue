<template>
    <v-row>
        <v-col cols="5">
            <v-container>
                <v-sheet class="mt-12 pa-12 ma-auto d-flex flex-column" width="30vw" height="70vh" color="indigo-accent-4" rounded="xl"
                    :elevation="10">
                    <div>
                        <v-list-item-title class="text-center">
                            <span class="text-h4 text-white font-weight-bold">
                                Login
                            </span>
                        </v-list-item-title>

                        <v-list-item-title class="pb-5 text-center font-weight-bold">
                            <span class="text-subtitle-1 text-white font-weight-bold">
                                Bem vindo de volta!
                            </span>
                        </v-list-item-title>
                    </div>

                    <div class="mt-7">
                        <v-card color="rgb(0,0,0,0)" elevation="0">
                            <v-row class="ma-auto">
                                <v-text-field v-model="emailLogin" name="email" type="email" label="E-mail"
                                    :rules="[requiredLogin, validEmail]" :style="{ 'color': 'white' }"
                                    bg-color="rgb(255, 255, 255, 0.5)" placeholder="E-mail">
                                </v-text-field>
                            </v-row>

                            <v-row class="ma-auto">
                                <v-text-field v-model="passLogin" name="senha" label="Senha" :rules="[requiredLogin]"
                                    :style="{ 'color': 'white' }" bg-color="rgb(255, 255, 255, 0.5)"
                                    :append-inner-icon="showpassLogin ? 'mdi-eye-off' : 'mdi-eye'"
                                    @click:append-inner="showpassLogin = !showpassLogin"
                                    :type="showpassLogin ? 'text' : 'password'" placeholder="Senha" hint="Digite sua senha">
                                </v-text-field>
                            </v-row>
                        </v-card>
                    </div>

                    <v-card align="center" width="100%" height="3vh" :elevation="0" color="rgb(0,0,0,0)">
                        <p v-if="erro_login" class="text-red-darken-4 text-h6">Dados incorretos ou não encontrados</p>
                    </v-card>


                    <v-row no-gutters justify="center" class="mt-6 d-flex flex-column">
                        <v-btn @click="fazerlogin()" color="white" size="large" class="ma-auto text-indigo-accent-4"
                            max-width="25%">
                            Login
                        </v-btn>
                    </v-row>

                </v-sheet>
            </v-container>
        </v-col>




        <v-col cols="6">
            <v-container>
                <v-sheet class="mt-12 pa-12 ma-auto d-flex flex-column" width="50vw" height="70vh" color="indigo-accent-4" rounded="xl"
                    :elevation="10">
                    <div>
                        <v-list-item-title class="text-center">
                            <span class="text-h4 text-white font-weight-bold">
                                Cadastre-se
                            </span>
                        </v-list-item-title>

                        <v-list-item-title class="pb-5 text-center font-weight-bold">
                            <span class="text-subtitle-1 text-white font-weight-bold">
                                Junte-se a nós!
                            </span>
                        </v-list-item-title>
                    </div>

                    <div class="mt-7">
                        <v-card color="rgb(0,0,0,0)" elevation="0">
                            <v-row class="ma-auto">
                                <v-text-field v-model="nome_completo" name="nome_completo" type="text" label="Nome Completo"
                                    class="mr-8" :style="{ 'color': 'white' }" bg-color="rgb(255, 255, 255, 0.5)"
                                    placeholder="Ex: João Silva">
                                </v-text-field>

                                <v-text-field v-model="celular" name="celular" label="Celular" :style="{ 'color': 'white' }"
                                    bg-color="rgb(255, 255, 255, 0.5)" placeholder="(__) _____-____">
                                </v-text-field>

                            </v-row>

                            <v-row class="ma-auto">
                                <v-text-field v-model="emailCadastro" name="email" type="email" label="E-mail"
                                    :rules="[requiredCadastro, validEmail]" :style="{ 'color': 'white' }"
                                    bg-color="rgb(255, 255, 255, 0.5)" placeholder="Ex: joao_silva@gmail.com">
                                </v-text-field>
                            </v-row>


                            <v-row class="ma-auto">
                                <v-text-field v-model="passCadastro" name="senha" label="Senha" class="mr-8"
                                    :style="{ 'color': 'white' }" bg-color="rgb(255, 255, 255, 0.5)"
                                    :append-inner-icon="showpassCadastro ? 'mdi-eye-off' : 'mdi-eye'"
                                    @click:append-inner="showpassCadastro = !showpassCadastro"
                                    :type="showpassCadastro ? 'text' : 'password'" hint="Crie sua senha">
                                </v-text-field>

                                <v-text-field v-model="passCadastroConfirm" @blur="validar_senha_Cadastro"
                                    name="confirma_senha" label="Confirmar Senha" :style="{ 'color': 'white' }"
                                    bg-color="rgb(255, 255, 255, 0.5)"
                                    :append-inner-icon="showpassCadastroConfirm ? 'mdi-eye-off' : 'mdi-eye'"
                                    @click:append-inner="showpassCadastroConfirm = !showpassCadastroConfirm"
                                    :type="showpassCadastroConfirm ? 'text' : 'password'" :hint="hint_password"
                                    persistent-hint>
                                </v-text-field>
                            </v-row>
                        </v-card>
                    </div>

                    <v-row no-gutters justify="center" class="mt-12">
                        <v-btn @click="cadastrar" class="text-indigo-accent-4" color="white" size="large" max-width="25%">
                            Cadastrar
                        </v-btn>
                    </v-row>

                </v-sheet>
            </v-container>
        </v-col>
    </v-row>
</template>


<script>


export default {
    components:{
        
    },
    data() {
        return {

            // Variáveis Login

            showpassLogin: false,
            emailLogin: '',
            passLogin: '',
            erro_login: false,



            // Variáveis Cadastro
            hint_password: '',
            passCadastro: '',
            showpassCadastro: false,

            passCadastroConfirm: '',
            showpassCadastroConfirm: false,
            select_UF: null,
            UF: ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RR', 'RO', 'RJ', 'RN', 'RS', 'SC', 'SP', 'SE', 'TO'],

            /* Informações cadastro*/
            nome_completo: '',
            celular: '',
            emailCadastro: '',
            passCadastro: '',
            passCadastroConfirm: '',
            infoEndereco: {
                cep: '',
                cidade: '',
                estado: '',
                endereco: '',
                numero: '',
            },

        }
    },
    methods: {

        // Funções Gerais
        validEmail(value) {
            const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            return pattern.test(value) || 'Endereço de e-mail inválido'
        },



        // Funções Login
        requiredLogin(value) {
            return !!value || 'Este campo é obrigatório'
        },
        fazerlogin() {


        },



        // Funções Cadastro
        requiredCadastro(value) {
            return !!value || 'Este campo é obrigatório'
        },
        validar_senha_Cadastro(value) {
            if (this.senha !== '' && this.confirma_senha !== '' && this.senha !== this.confirma_senha) {
                this.hint_verifica_senha = 'As senhas não coincidem!'
                return

            } else if (this.senha !== '' && this.confirma_senha !== '' && this.senha == this.confirma_senha) {
                this.hint_verifica_senha = 'Senha confirmada!'
            }
        },
    },
}


</script>

<style>
main {
    background-color: #9e1d1d;
}
</style>