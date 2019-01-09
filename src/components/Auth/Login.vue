<template>
  <v-container class="mt-5">
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h2 class="headline my-4">Login</h2>
        <v-card class="pa-4">
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-text-field
              v-model="email"
              label="E-mail"
              required
            ></v-text-field>

            <v-text-field
              v-model="password"
              :rules="emailRules"
              label="Password"
              required
            ></v-text-field>

            <v-btn
              @click="validate"
              class="btn--cyan my-2 mx-0"
            >
              Login
            </v-btn>
          </v-form>
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
  @import "../../styles/components/_login.scss";
</style>
