<template>
  <nav class="navbar-expand-sm navbar-dark">
    <div class="container">
      <div class="navbar navbar-top">
        <h1><a class="navbar-brand" routerLink="">Helpdesk Project</a></h1>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#hamburgerCollapse"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="hamburgerCollapse">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <!-- <a class="nav-link" routerLink="/login"><i class="fa fa-sign-in" aria-hidden="true"></i>Login</a> -->
                <router-link to="/Login">Login</router-link>
              </li>
              <li class="dropdown logout-dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="fa fa-user" aria-hidden="true"></i>
                  Username
                  <i class="fa fa-angle-down dropdown-rotate" aria-hidden="true"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                  <!-- <a class="nav-link" (click)="onLogout()"><i class="fa fa-sign-out"></i>Logout</a> -->
                </div>
              </li>
              <li class="nav-item">
                <!-- <a class="nav-link" routerLink="/signup" ><i class="fa fa-user-plus" aria-hidden="true"></i>Sign up</a> -->
                <router-link to="/Signup">Signup</router-link>
              </li>
            </ul>
          </div>
      </div>
      <div class="separator separator--gradient-light"></div>
      <div class="navbar navbar-bottom">
        <div class="collapse navbar-collapse" id="hamburgerCollapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <!-- <a class="nav-link" routerLink="">Dashboard</a> -->
              <router-link to="/">Dashboard</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/users">Users List</a>
            </li>
            <li class="nav-item">
              <!-- <a class="nav-link" routerLink="/create-user" *ngIf="userIsAuthenticated">Create User</a> -->
              <router-link to="/Users">Users</router-link>
            </li>
            <li class="nav-item">
                <!-- <a class="nav-link" routerLink="/tickets">Tickets</a> -->
                <router-link to="/Tickets">Tickets</router-link>
            </li>
            <li class="nav-item">
                <!-- <a class="nav-link" routerLink="/submit-ticket">Submit Ticket</a> -->
                <router-link to="/">Submit Ticket</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
