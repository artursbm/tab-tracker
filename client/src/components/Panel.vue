<template>
  <div class="white elevation-2">
    <v-toolbar flat dense class="indigo" dark>
      <v-toolbar-title>{{title}}</v-toolbar-title>
    </v-toolbar>

    <div class="pl-4 pr-4 pt-2 pb-2">
      <slot>
        <!-- Slot de dados, tudo que estiver dentro de uma tag <panel>, o componente Panel vai renderizar com o que tiver no componente destino-->
        Nothing to display here
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component (Login.vue) only -->
<style scoped>

</style>
