<template>
  <v-container class="mt-5">
    <h2 class="display-1">Sign in</h2>
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
  </v-container>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
  @import "../../styles/components/_login.scss";
</style>
