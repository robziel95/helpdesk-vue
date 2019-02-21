<template>
<section class="section-users-list">
  <v-container>
    <h2 class="section-title">Users list</h2>

    <v-layout row wrap>
      <v-flex xs12 sm6 md3>
        <v-text-field
          v-model="search"
          label="Search"
          type="search"
          append-icon="search"
        />
      </v-flex>
    </v-layout>
    <div v-if="loader" class="infiniteLoader">
      <v-progress-circular
        indeterminate
        :width="2.5"
        class="infiniteLoader__loader"
      />
    </div>
    <section class="users-list" v-if="users.length > 0 && !loader" >
      <div v-for="user in users" :key="user.id" class="box">
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
        <div v-if="isAuthenticated && (isAdmin || user.id === authUserData.userId)"
          class="box__footer">
          <v-btn color="error" @click="onDelete(user.id)">
            Delete
          </v-btn>
          <v-btn :to="`/Edit-User/${user.id}`" class="btn--cyan">
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
import { mapGetters } from 'vuex'

export default {
  beforeCreate () {
    this.$store.dispatch('fetchUsers')
  },
  data () {
    return {
      search: ''
    }
  },
  computed: {
    ...mapGetters([
      'isAuthenticated',
      'isAdmin',
      'authUserData',
      'loader'
    ]),
    users () {
      return this.$store.state.users.users.filter(user => {
        return (
          (user.email.toLowerCase().includes(this.search.toLowerCase())) ||
          (user.name.toLowerCase().includes(this.search.toLowerCase())) ||
          (user.nickname.toLowerCase().includes(this.search.toLowerCase())) ||
          (user.surname.toLowerCase().includes(this.search.toLowerCase())) ||
          (user.userType.toLowerCase().includes(this.search.toLowerCase()))
        )
      })
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
