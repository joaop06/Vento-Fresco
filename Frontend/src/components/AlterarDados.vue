<template>
    <v-dialog v-model="open" class="ma-auto" width="50%" scrim="black">
        <v-card :elevation="0">
            <div class="mt-7">
                <v-card color="rgb(0,0,0,0)" class="pa-8" elevation="0">
                    <v-row class="ma-auto">
                        <v-text-field v-model="newNome_completo" name="nome_completo" type="text" label="Nome Completo"
                            class="mr-8" :style="{ 'color': 'white' }" bg-color="indigo-accent-4">
                        </v-text-field>

                        <v-text-field v-model="newCelular" name="celular" label="Celular" :style="{ 'color': 'white' }"
                            bg-color="indigo-accent-4">
                        </v-text-field>

                    </v-row>

                    <v-row class="ma-auto">
                        <v-text-field v-model="newEmail" name="email" type="email" label="E-mail"
                            :rules="[requiredCadastro, validEmail]" :style="{ 'color': 'white' }"
                            bg-color="indigo-accent-4">
                        </v-text-field>
                    </v-row>


                    <v-row class="ma-auto mt-5">
                        <v-col cols="6">
                            <v-text-field v-model="confirmaSenhaAlt" name="confirmarsenha" type="password"
                                placeholder="Confirme sua senha para alteração" label="Confirmar Senha">

                            </v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-btn @click="gravarAlteracao()" class="ma-auto bg-indigo-accent-4">
                                Salvar
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card>
            </div>
        </v-card>
    </v-dialog>
</template>

<script>

export default ({
    data() {
        return {
            open: false,
            cliente: [],

            newNome_completo: '',
            newCelular: '',
            newEmail: '',


            confirmaSenhaAlt: ''
        }
    },
    methods: {
        gravarAlteracao() {
            if (this.newNome_completo !== '' &&
                this.newCelular !== '' &&
                this.newEmail !== '') {

                if (this.confirmaSenhaAlt === this.cliente.senha) {
                    this.cliente.nome_completo = this.newNome_completo
                    this.cliente.celular = this.newCelular
                    this.cliente.email = this.newEmail
                    console.log(this.cliente)
                    alert("Alteração realizada")
                    this.open = false
                } else {
                    alert("Senha inválida")
                }

            } else {
                alert("Preencha todos os campos!")

            }
        }
    }
})
</script>