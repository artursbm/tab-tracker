<template>
  <v-layout column>
    <v-flex xs10 offset-xs1>
      <panel title="Registrar">
        <!-- When Vue.js starts, it will look for the v-models and will bind it to the controller (script below) -->
        <v-text-field label="Nome de usuário" v-model="username"></v-text-field>
        <v-text-field label="E-mail" v-model="email"></v-text-field>
        <v-text-field name="password" label="Crie sua senha" hint="A senha deve conter pelo menos 8 caracteres" min="8" max="32" type="password" v-model="password"></v-text-field>
        <!-- The goal here is to, when I click the Register button, it will make something to the data typed; Add a listener to the button -->
        <!-- Vou colocar a mensagem de erro logo acima do botão de registro -->
        <div class="error" v-html="error" />
        <!-- @click dispara um evento que se chama register, o que vai procurar nos scripts oq fazer com o clique -->
        <v-btn dark class="indigo" @click="register">Registrar</v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService.js'
import Panel from '@/components/Panel'
// inside this script I will bind the HTML to the controller (everything inside this script)
// using keywords as attributes to link things together (v-models)
export default {
  name: 'register',
  data () {
    // this will make the appearence of the v-model the way it is here
    // the error key is the one that communicates errors between back and front end, as defined now
    // and requested below, if error happens; It catches the error from the backend endpoint (/register) response,
    // and is put in the UI.
    return {
      username: '',
      email: '',
      password: '',
      error: null
    }
  },
  components: {
    Panel
  },
  methods: {
    async register () {
      // use promises to make asyncronous request/responses
      // Sends message to UI so user knows something is happening on backend
      try {
        const response = await AuthenticationService.register({
          username: this.username,
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'Login'
        })
      } catch (error) {
        // if status != 200 (response correctly), this happens
        // axios will return the message from response, which is defined in 8081
        // which means, the Express server backend
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component (Register.vue) only -->
<style scoped>
/* .error {
  color: red;
} */
</style>
