<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>{{ msg4 }}</h3>
    
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Bem vindo ao web app Aonde Ir!',
      msg4: 'Para começar, faça login ou registre-se!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 4rem;
  font-weight: normal;
}

h2 {
  font-size: 2rem;
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
