<template>
  <v-app>
    <v-content>
      <app-header></app-header>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    appHeader: Header
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style lang="scss">

</style>
