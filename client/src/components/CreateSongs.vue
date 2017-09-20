<template>
  <v-layout column>
    <v-flex xs12>
      <panel title="Dados da Música">
        <v-text-field label="Título" v-model="song.title" :rules="[required]"></v-text-field>
        <v-text-field label="Artista" v-model="song.artist" :rules="[required]"></v-text-field>
        <v-text-field label="Gênero" v-model="song.genre" :rules="[required]"></v-text-field>
        <v-text-field label="Álbum" v-model="song.album" :rules="[required]"></v-text-field>
        <v-text-field label="Capa do álbum - URL" v-model="song.albumImage" :rules="[required]"></v-text-field>
        <v-text-field label="YouTube ID" v-model="song.youtubeID" :rules="[required]"></v-text-field>
      </panel>
    </v-flex>
    <v-flex xs12>
      <panel title="Letra e Tablatura" class="mt-2">
        <v-text-field multi-line label="Letra" v-model="song.lyrics" :rules="[required]"></v-text-field>
        <v-text-field multi-line label="Tablatura" v-model="song.tab"></v-text-field>
      </panel>
    </v-flex>
    <span class="danger-alert" v-if="error">{{ error }}</span>
    <v-btn dark class="indigo" @click="create">Criar Música</v-btn>
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
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImage: null,
        youtubeID: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: (value) => !!value || 'Required'
    }
  },
  methods: {
    async create () {
      this.error = null
      const fieldsFilled = Object
      .keys(this.song)
      .every(key => !!this.song[key])
      if (!fieldsFilled) {
        this.error = 'Por favor, preencha todos os dados requeridos'
        return
      }
      // call API
      try {
        await SongsService.post(this.song)
        this.$router.push({
          name: 'Songs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>

</style>
