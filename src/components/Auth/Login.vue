<template>
  <v-container class="mt-5">
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h2 class="headline my-4">Login</h2>
        <v-card class="pa-4">
          <form
            @submit.prevent="onSubmit"
            ref="form"
          >
            <div class="formField" :class="{invalidField: $v.userData.email.$error}">
              <v-text-field
                v-model="userData.email"
                type="email"
                label="E-mail*"
                @blur="$v.userData.email.$touch()"
              />

              <p v-if="!$v.userData.email.email && $v.userData.email.$error" class="errorText">Please provide a valid email address.</p>
              <p v-if="!$v.userData.email.required && $v.userData.email.$error" class="errorText">This field must not be empty.</p>
            </div>

            <div class="formField" :class="{invalidField: $v.userData.password.$error}">
              <v-text-field
                v-model="userData.password"
                type="password"
                label="Password*"
                @blur="$v.userData.password.$touch()"
              />

              <p v-if="!$v.userData.password.required && $v.userData.password.$error" class="errorText">This field must not be empty.</p>
              <p v-if="!$v.userData.password.minLength" class="errorText">Password must have at least  characters</p>
            </div>

            <v-btn class="btn--cyan my-2 mx-0"
              @click = onSubmit()>
              Login
            </v-btn>
          </form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      userData: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      }
      this.$store.dispatch('authRequest', this.userData)
        .then(() => {
          this.$router.push('/')
        })
        .catch(() => {
          console.log('Login error')
        })
    }
  },
  validations: {
    userData: {
      email: {
        required: required,
        email: email
      },
      password: {
        required,
        minLength: minLength(4)
      }
    }

  }
}
</script>

<style scoped lang="scss">
  @import "../../styles/components/_login.scss";
</style>
