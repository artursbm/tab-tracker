<template>
  <v-layout column>
    <v-flex xs10 offset-xs1>
      <panel title="Login">
        <v-text-field label="Nome de usuário" v-model="username"></v-text-field>
        <v-text-field name="password" label="Senha" min="8" max="32" type="password" v-model="password"></v-text-field>
        <div class="error" v-html="error" />
        <v-btn dark class="indigo" @click="login">Login</v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
// inside this script I will bind the HTML to the controller (everything inside this script)
// using keywords as attributes to link things together (v-models)
import AuthenticationService from '@/services/AuthenticationService.js'
import Panel from '@/components/Panel'
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: '',
      error: null
    }
  },
  components: {
    Panel
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          username: this.username,
          password: this.password
        })
        // call action using dispatch (it will call the action 'setToken',
        // the method that calls the mutation that stores the token)
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component (Login.vue) only -->
<style scoped>
/* .error {
  color: red;
} */
</style>
