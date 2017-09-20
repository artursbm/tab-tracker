<template>
  <v-toolbar fixed class="indigo" dark elevation-5>
    <v-toolbar-title class="mr-4">
      <router-link :to="{name: 'Hello'}" tag="span" class="logo">Tab Tracker</router-link>
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn flat dark :to="{name: 'Songs'}" v-if="$store.state.isUserLoggedIn">Browse</v-btn>
    </v-toolbar-items>
    <!-- v-spacer joga os itens abaixo dele para o canto direito da toolbar -->
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <!-- router-link é um modo de o Vue olhar pro diretório router, e encontrar para onde o atributo to="register" vai -->
      <!-- vou usar o v-btn to="" pro estilo se manter -->
      <v-btn flat dark :to="{name: 'Login'}" v-if="!$store.state.isUserLoggedIn">Login</v-btn>
    </v-toolbar-items>
    <v-toolbar-items>
      <v-btn flat dark :to="{name: 'Register'}" v-if="!$store.state.isUserLoggedIn">Registrar</v-btn>
    </v-toolbar-items>
    <v-toolbar-items>
      <v-btn flat dark @click="logout" v-if="$store.state.isUserLoggedIn">Log Out</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'Hello'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo {
  cursor: pointer; 
}

.logo:hover {
  color: darkviolet;
}

</style>
