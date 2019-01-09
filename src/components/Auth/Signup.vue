<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h2 class="headline my-4">Create a new account</h2>
        <v-card class="pa-4">
          <form
            ref="form"
            lazy-validation
          >
            <v-text-field
            v-model="email"
            label="E-mail"
            required
            ></v-text-field>

            <v-text-field
            v-model="name"
            label="Name"
            required
            ></v-text-field>

            <v-text-field
            v-model="surname"
            label="Surname"
            required
            ></v-text-field>

            <v-text-field
            v-model="nickname"
            label="Nickname"
            ></v-text-field>

            <v-text-field
            v-model="password"
            :rules="emailRules"
            label="Password"
            required
            ></v-text-field>

            <v-text-field
            v-model="password"
            :rules="emailRules"
            label="Repeat password"
            required
            ></v-text-field>

            <v-btn
            @click="validate"
            class="btn--cyan my-2 mx-0"
            >
            Create Account
            </v-btn>
          </form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">

</style>
