<template>
  <nav>
    <v-toolbar flat app>
        <v-toolbar-title>
          <h1>Helpdesk Project</h1>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <div>
          <v-btn to="/Login">Sign In</v-btn>
          <v-btn to="/Signup">Sign Up</v-btn>
          <v-btn>Sign Out</v-btn>
        </div>
    </v-toolbar>
    <v-toolbar>
        <v-btn to="/">Dashboard</v-btn>
        <v-btn to="/Users">Users List</v-btn>
        <v-btn to="/Tickets">Tickets</v-btn>
        <v-btn to="/Submit-Ticket">Submit Ticket</v-btn>
    </v-toolbar>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">

</style>
