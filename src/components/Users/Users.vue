<template>
<section class="section-users-list">
  <v-container>
    <h2 class="section-title">Users list</h2>

    <!-- <mat-spinner *ngIf="spinnerLoading"></mat-spinner> -->
    <section class="users-list" v-if="users.length > 0" >
      <div v-for="user in users" :key="user.email" class="box">
        <div class="box__header">
          <div class="box__header__picture">
            <img :src="user.avatarPath" alt="User avatar">
          </div>
          <div class="box__header__content">
            <h4 class="box__header__content__heading">
              {{ user.name }} {{ user.surname }}
            </h4>
            <p v-if="user.nickname">Nickname: <span>{{ user.nickname }}</span></p>
          </div>
        </div>
        <div class="box__body">
          <div>
            <v-icon color="black"
              class="mr-1">
              settings
            </v-icon>
            <span>
              {{ user.userType }}
            </span>
          </div>
          <div>
            <v-icon color="black" class="mr-1">
              smartphone
            </v-icon>
            Phone number: <span>+48632111222</span>
            </div>
          <div>
            <v-icon color="black" class="mr-1">
              mail_outline
            </v-icon>
            E-mail: <span>{{ user.email }}</span>
          </div>
        </div>
        <div class="box__footer">
            <v-btn color="error" @click="onDelete(user.id)">
              Delete
            </v-btn>
            <v-btn class="btn--cyan">
              Edit User
            </v-btn>
        </div>
      </div>
    </section>

    <p v-if="users.length <= 0">No users were added</p>
  </v-container>
</section>

</template>

<script>
export default {
  beforeCreate () {
    this.$store.dispatch('fetchUsers')
  },
  computed: {
    users () {
      return this.$store.state.users.users
    }
  },
  methods: {
    onDelete (clickedUserId) {
      this.$store.dispatch('deleteUser', clickedUserId)
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../styles/components/users.scss";
</style>
