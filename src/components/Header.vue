<template>
  <nav>
    <v-toolbar flat>
        <v-toolbar-title>
          <router-link to="/" class="page-title-link">
            <h1 class="page-title">Helpdesk Project</h1>
          </router-link>
        </v-toolbar-title>
        <v-spacer />
        <div class="hidden-xs-only">
          <v-btn to="/Login" v-if="!isLoggedIn">Sign In</v-btn>
          <v-btn to="/Signup" v-if="!isLoggedIn">Sign Up</v-btn>
          <v-btn v-if="isLoggedIn" @click="onLogout()">Sign Out</v-btn>
        </div>
        <v-toolbar-side-icon
          @click="navbarDrawer = !navbarDrawer"
          class="white hidden-sm-and-up" />
    </v-toolbar>
    <v-toolbar flat class="hidden-xs-only">
        <v-btn to="/">Dashboard</v-btn>
        <v-btn to="/Users">Users List</v-btn>
        <v-btn to="/Create-User">Create User</v-btn>
        <v-btn to="/Tickets">Tickets</v-btn>
        <v-btn to="/Submit-Ticket">Submit Ticket</v-btn>
    </v-toolbar>
    <v-navigation-drawer
      v-model="navbarDrawer"
      clipped
      absolute
      floating
      disable-resize-watcher
      width="320">
      <v-list>
        <v-list-tile v-for="link in navbarLinks" :key="link.name" router :to="link.route">
          <v-icon left class="white--text">
            {{ link.icon }}
          </v-icon>
          <v-list-tile-content>
            {{ link.name }}
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="onLogout()">
          <v-icon left class="white--text">exit_to_app</v-icon>
          <v-list-tile-content>
            Sign out
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>

export default {
  data () {
    return {
      navbarDrawer: false,
      navbarLinks: [
        { name: 'Sign in', icon: 'person', addClass: '', route: '/Login' },
        { name: 'Sign up', icon: 'person_add', addClass: '', route: '/Signup' },
        { name: 'Dashboard', icon: 'home', addClass: '', route: '/' },
        { name: 'Users list', icon: 'people', addClass: '', route: '/Users' },
        { name: 'Create user', icon: 'pages', addClass: '', route: '/Create-User' },
        { name: 'Tickets', icon: 'add_to_photos', addClass: '', route: '/Tickets' },
        { name: 'Submit ticket', icon: 'add', addClass: '', route: '/Submit-Ticket' }
      ]
    }
  },
  computed: {
    isLoggedIn () {
      return this.$store.getters.isAuthenticated
    }
  },
  methods: {
    onLogout () {
      this.$store.dispatch('authLogout')
        .then(() => {
          this.$router.push('/')
        })
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../styles/components/header.scss";
</style>
