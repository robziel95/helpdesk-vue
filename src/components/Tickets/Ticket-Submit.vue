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
            <div class="formField" :class="{invalidField: $v.ticketData.title.$error}">
              <v-text-field
              v-model="ticketData.title"
              label="Title*"
              @blur="$v.ticketData.title.$touch()"
              >
              </v-text-field>

              <!-- <p v-if="!$v.ticketData.title.required && $v.ticketData.title.$error && $v.ticketData.title.$dirty" class="errorText">This field must not be empty.</p> -->
              <p v-if="!$v.ticketData.title.required && $v.ticketData.title.$error" class="errorText">This field must not be empty.</p>
            </div>

            <div class="formField">
              <v-text-field
              v-model="ticketData.priority"
              label="Priority"
              ></v-text-field>
            </div>

            <div class="formField" :class="{invalidField: $v.ticketData.description.$error}">
              <v-text-field
              v-model="ticketData.description"
              label="Title*"
              @blur="$v.ticketData.description.$touch()"
              >
              </v-text-field>

              <p v-if="!$v.ticketData.description.required && $v.ticketData.description.$error" class="errorText">This field must not be empty.</p>
            </div>

            <v-btn
            class="btn--cyan my-2 mx-0"
            @click = onSubmit()
            >
              Submit Ticket
            </v-btn>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      ticketData: {
        id: null,
        title: '',
        priority: '',
        description: '',
        creator: null,
        status: 'Unassigned',
        creationDate: new Date().toISOString().slice(0, 10).replace(/-/g, '/'),
        uploadedFilePath: null,
        uploadedFileName: null
      }
    }
  },
  methods: {
    ...mapActions([
      'addTicket'
    ]),
    onSubmit () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      }
      console.log(this.ticketData)
      this.addTicket(this.ticketData)
    }

  },
  validations: {
    ticketData: {
      title: {
        required
      },
      description: {
        required
      }
    }

  }
}
</script>

<style scoped lang="scss">
</style>
