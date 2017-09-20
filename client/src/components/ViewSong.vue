<template>
  <v-layout row>
    <v-flex xs6 class="mr-2">
      <panel title="Música">
        <v-layout>
          <v-flex xs6>
            <div class="song-title">{{song.title}}</div>
            <div class="song-artist">{{song.artist}}</div>
            <div class="song-genre">{{song.genre}}</div>
          </v-flex>

          <v-flex xs6 class="pl-4">
            <img class="album-image" :src="song.albumImage" />
            <div class="song-album">{{song.album}}</div>
          </v-flex>
        </v-layout>
      </panel>
    </v-flex>
    <v-flex xs6 class="ml-2">
      <panel title="Letra">
        <v-btn dark small right bottom fab absolute class="pink" slot="action">
          <v-icon>music_note</v-icon>
        </v-btn>
        <textarea readonly v-model="song.lyrics"></textarea>
      </panel>
    </v-flex>
  </v-layout>    
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      song: {}
    }
  },
  // grab the data from the endpoint
  async mounted () {
    // as store is synced with router, I can call this store.state.route.params
    // Vuex store grab the state, and route.params.songId can change as well
    // here we grab the songId
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
    // after I need to go to backend and request this
  }
}
</script>

<style scoped>
.song {
  padding: 10px;
  height: 200px;
  overflow: hidden;
}

.song-title {
  font-size: 26pt;
}

.song-artist {
  font-size: 16pt;
}

.song-album {
  font-size: 12pt;
}

.song-genre {
  font-size: 10pt;
}

.album-image {
  width: 150px;
  height: 150px;
}
textarea {
  width: 90%;
  font-family: monospace;
  border: none;
  border-style: none;
  border-color: transparent;
  height: 600px;
  overflow: auto;
  padding: 20px;

}
</style>
