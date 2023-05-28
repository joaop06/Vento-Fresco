<template>
  <v-app>
    <v-main>
      <Navbar />
      <v-card class="d-flex" width="100%" height="100%">
        <MenuLateral v-if="!$route.path.includes('login_cadastro') && !$route.path.includes('produto')" />
        <router-view />
      </v-card>
      <Footer />
    </v-main>
  </v-app>
</template>


<script>
import Navbar from '@/components/Navbar.vue'
import MenuLateral from '@/components/MenuLateral.vue'
import Footer from '@/components/Footer.vue'

export default ({
  components: {
    Navbar,
    MenuLateral,
    Footer
  },
  data() {
    return {

    }
  },
  created() {
    // Importa o objeto $route do Vue Router
    const { $route } = this
    console.log($route.path) // Verifica o caminho da rota atual
  },
  mounted() {
    window.scrollTo(0, 0);
  }
})
</script>


<style>
body {
  background-color: #BBDEFB;
}
</style>