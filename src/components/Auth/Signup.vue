<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h2 class="headline my-4">Create a new account</h2>
        <v-card class="pa-4">
          <v-form
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

            <div class="formField" :class="{invalidField: $v.userData.name.$error}">
              <v-text-field
                v-model="userData.name"
                label="Name*"
                type="text"
                @blur="$v.userData.name.$touch()"
              />

              <p v-if="!$v.userData.name.required && $v.userData.name.$error" class="errorText">This field must not be empty.</p>
            </div>

            <div class="formField" :class="{invalidField: $v.userData.surname.$error}">
              <v-text-field
                v-model="userData.surname"
                label="Surname*"
                type="text"
                @blur="$v.userData.surname.$touch()"
              />

              <p v-if="!$v.userData.surname.required && $v.userData.surname.$error" class="errorText">This field must not be empty.</p>
            </div>

            <v-text-field
              v-model="userData.nickname"
              label="Nickname"
              type="text"
            />

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

            <div class="formField" :class="{invalidField: $v.userData.confirmPassword.$error}">
              <v-text-field
                v-model="userData.confirmPassword"
                type="password"
                label="Repeat password*"
                @blur="$v.userData.confirmPassword.$touch()"
              />

              <p v-if="!$v.userData.confirmPassword.required && $v.userData.confirmPassword.$error"
                class="errorText">This field must not be empty.
              </p>
              <p v-if="!$v.userData.confirmPassword.sameAs && $v.userData.confirmPassword.$error"
                class="errorText">Passwords do not match
              </p>
            </div>

            <v-btn
              class="btn--cyan my-2 mx-0"
              @click = onSubmit()
            >
              Create Account
            </v-btn>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      userData: {
        email: '',
        name: '',
        surname: '',
        nickname: '',
        password: '',
        confirmPassword: ''
      }
    }
  },
  methods: {
    onSubmit () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      }
      console.log('dispatch')
      this.$store.dispatch('addUser', this.userData)
        .then(() => {
          this.$router.push('/')
        })
    }
  },
  validations: {
    userData: {
      email: {
        required: required,
        email: email
      },
      name: {
        required
      },
      surname: {
        required
      },
      password: {
        required,
        minLength: minLength(4)
      },
      confirmPassword: {
        required,
        sameAs: sameAs('password')
      }
    }

  }
}
</script>

<style scoped lang="scss">

</style>
