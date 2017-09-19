<template>
 <v-layout column>
    <v-flex xs10 offset-xs1>
      <panel title="Perguntas">
        <h5>Bem vindo. Selecione a categoria desejada:</h5>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component (Login.vue) only -->
<style scoped>

</style>
