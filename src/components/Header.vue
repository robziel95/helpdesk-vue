<template>
  <nav>
    <v-toolbar flat>
        <v-toolbar-title>
          <h1 class="page-title">Helpdesk Project</h1>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <div class="hidden-xs-only">
          <v-btn to="/Login">Sign In</v-btn>
          <v-btn to="/Signup">Sign Up</v-btn>
          <v-btn>Sign Out</v-btn>
        </div>
        <v-toolbar-side-icon class="white hidden-sm-and-up" @click="navbarDrawer = !navbarDrawer"></v-toolbar-side-icon>
    </v-toolbar>
    <v-toolbar flat class="hidden-xs-only">
        <v-btn to="/">Dashboard</v-btn>
        <v-btn to="/Users">Users List</v-btn>
        <v-btn to="/Tickets">Tickets</v-btn>
        <v-btn to="/Submit-Ticket">Submit Ticket</v-btn>
    </v-toolbar>
    <v-navigation-drawer v-model="navbarDrawer" clipped absolute floating disable-resize-watcher width="320">
      <v-list>
        <v-list-tile v-for="link in navbarLinks" :key="link.name" router :to="link.route">
          <v-icon left class="white--text">{{ link.icon }}</v-icon>
          <v-list-tile-content>
            {{ link.name }}
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="logout()">
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
        { name: 'Tickets', icon: 'pages', addClass: '', route: '/Tickets' },
        { name: 'Submit ticket', icon: 'add', addClass: '', route: '/Submit-Ticket' }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../styles/components/header.scss";
</style>
