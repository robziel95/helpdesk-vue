<template>
  <v-app>
    <v-content>
      <app-header/>
      <snackbar-store/>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Header from './components/Header.vue'
import snackbarStore from './components/Items/Snackbar.vue'

export default {
  name: 'App',
  components: {
    appHeader: Header,
    snackbarStore
  }
}
</script>

<style lang="scss">
</style>
