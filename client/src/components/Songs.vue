<template>
  <v-layout column>
    <v-flex xs10 offset-xs1>
      <panel title="Songs">
        <h5>Bem vindo. Pesquise as músicas aqui!</h5>
        <!-- creating a render now, the v-for is going to show lots of songs -->
        <div v-for="song in songs" :key="song.title">
          <!-- Every time I do v-for, iteration expects what is in the binder :key, where title is the 
          unique identifier -->
          <!-- posso usar esses objetos song, para me levar até um link onde terá pesquisa ou informações
          sobre esse song, por exemplo (clico e vai pra música e as tabs dela) -->
          {{song.title}} - 
          {{song.artist}} - 
          {{song.album}} 
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
export default {
  components: {
    Panel
  },
  data () {
    return {
      // v-for vai fazer um loop no objeto songs, mas agora vou guardar essas
      // songs dentro do BD, no server.
      songs: null
    }
  },
  // where there is a await, there is a async method
  async mounted () {
    // do a request to the backend for all the songs
    // do a get request at the moment that the vue component is mounted to the page
    this.songs = await SongsService.index()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component (Login.vue) only -->
<style scoped>

</style>
