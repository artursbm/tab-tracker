<template>
  <div id="app">
    <v-app toolbar footer>
      <page-header/>
      <main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </main>
      <page-footer/>
    </v-app>
    <!-- <img src="./assets/logo.png"> -->
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'
import PageFooter from '@/components/Footer.vue'
export default {
  name: 'app',
  components: {
    PageHeader,
    PageFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  height: 200px;
  width: 200px;
}
</style>
