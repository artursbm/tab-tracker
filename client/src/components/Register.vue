<template>
  <div>
    <h1>Register</h1>

    <input type="email" name="email" v-model="email" placeholder="email"/>
    <br>
    <input type="password" name="password" v-model="password" placeholder="password"/>
    <br>
    <input type="text" name="username" v-model="username" placeholder="username">
    <br>
    <button @click="register">Register</button>

  </div>
</template>

<script>
// I want to bind the script to the HTML
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      username: ''
    }
  },
  // watch: {
  //   email (value) {
  //     console.log('email has changed value')
  //   }
  // },
  methods: {
    async register () {
      // pegarei os dados do authentication service, esperarei pela response, e então...
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password,
        username: this.username
      })
      console.log(response.data)
    }
  }
  // mounted () {
  //   setTimeout(() => {
  //     this.email = 'hello, world'
  //   }, 2000) // isso mudará o valor de email após 2 segundos para hello, world
  // }
}
</script>

<style scoped>
</style>
