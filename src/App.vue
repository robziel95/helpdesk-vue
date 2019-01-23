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
import axios from 'axios'

export default {
  name: 'App',
  components: {
    appHeader: Header,
    snackbarStore
  },
  beforeCreate () {
    this.$store.dispatch('getTickets')
    this.$store.dispatch('fetchUsers')
  },
  created: () => {
    axios.interceptors.response.use(undefined, function (err) {
      return new Promise(function (resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
        // if you ever get an unauthorized, logout the user
          this.$store.dispatch('authLogout')
        // you can also redirect to /login if needed !
        }
        throw err
      })
    })
  }
}
</script>

<style lang="scss">
</style>
