<template>
  <v-layout column>
    <v-flex xs12>
      <panel title="Song Metadata">
        <v-text-field label="Title" v-model="title"></v-text-field>
        <v-text-field label="Artist" v-model="artist"></v-text-field>
        <v-text-field label="Genre" v-model="genre"></v-text-field>
        <v-text-field label="Album" v-model="album"></v-text-field>
        <v-text-field label="Album Image URL" v-model="albumImage"></v-text-field>
        <v-text-field label="You Tube ID" v-model="youtubeID"></v-text-field>
      </panel>
    </v-flex>
    <v-flex xs12>
      <panel title="Song Structure" class="mt-2">
        <v-text-field name="input-7-1" multi-line label="Lyrics" v-model="lyrics"></v-text-field>
        <v-text-field name="input-7-1" multi-line label="Tabs" v-model="tabs"></v-text-field>
      </panel>
    </v-flex>
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
      title: null,
      artist: null,
      genre: null,
      album: null,
      albumImage: null,
      youtubeID: null,
      lyrics: null,
      tab: null
    }
  },
  methods: {
    async create () {
      // call API
      try {
        await SongsService.post(this.song)
        this.$router.push({
          name: 'songs'
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
