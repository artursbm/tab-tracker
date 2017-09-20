<template>
  <v-layout column>
    <v-flex xs10 offset-xs1>
      <panel title="Songs">
        <v-btn :to="{name: 'songs-create'}" dark medium right bottom fab absolute class="pink" slot="action">
          <v-icon>add</v-icon>
        </v-btn>
        <h5>Bem vindo. Encontre as músicas aqui!</h5>
        
        <!-- creating a render now, the v-for is going to show lots of songs -->
        <div class="song" v-for="song in songs" :key="song.id">
          <!-- Every time I do v-for, iteration expects what is in the binder :key, where title is the 
          unique identifier -->
          <!-- posso usar esses objetos song, para me levar até um link onde terá pesquisa ou informações
          sobre esse song, por exemplo (clico e vai pra música e as tabs dela) -->
          <!-- v-bind == ':', exemplo, :src="..." -->
          <v-layout>
            <v-flex xs6>
              <div class="song-title">{{song.title}}</div>
              <div class="song-artist">{{song.artist}}</div>
              <!-- <div class="song-album">{{song.album}} - <span class="song-genre">{{song.genre}}</span></div> -->
              <!-- sempre que eu clicar aqui, me leva pra música com id = songId -->
              <v-btn dark class="indigo" :to="{ name: 'song', params: { songId: song.id }}">Visualizar</v-btn>
            </v-flex>
            
            <v-flex xs6>
              <img class="album-image" :src="song.albumImage"/>
            </v-flex>
          </v-layout>

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
    // axios returns data using .data in the async call below
    this.songs = (await SongsService.index()).data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component (Login.vue) only -->
<style scoped>
.song {
  padding: 10px;
  height: 200px;
  overflow: hidden;
}
.song-title{
  font-size: 24pt;
}

.song-artist{
font-size: 14pt;
}

.album-image {
  width: 150px;
  height: 150px;
}

</style>
