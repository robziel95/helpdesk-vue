<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h2 class="headline my-4">Create a new account</h2>
        <v-card class="pa-4">
          <v-form
            @submit.prevent="onSubmit"
            ref="form">
            <div class="formField" :class="{invalidField: $v.formData.title.$error}">
              <v-text-field
              v-model="formData.title"
              label="Title*"
              @blur="$v.formData.title.$touch()"/>

              <!-- <p v-if="!$v.formData.title.required && $v.formData.title.$error && $v.formData.title.$dirty" class="errorText">This field must not be empty.</p> -->
              <p v-if="!$v.formData.title.required && $v.formData.title.$error"
                class="errorText">
                This field must not be empty.
              </p>
            </div>

            <div class="formField">
              <v-select
                v-model="formData.status"
                item-value="Unassigned"
                label="Status"
                :items="statusList"/>
            </div>

            <div class="formField">
              <v-select
                v-model="formData.priority"
                item-value="Unassigned"
                label="Priority"
                :items="priorityList"/>
            </div>

            <div class="formField" :class="{invalidField: $v.formData.description.$error}">
              <v-text-field
              v-model="formData.description"
              label="Title*"
              @blur="$v.formData.description.$touch()"/>

              <p v-if="!$v.formData.description.required && $v.formData.description.$error"
                class="errorText">
                This field must not be empty.
              </p>
            </div>

            <v-btn
            class="btn--cyan my-2 mx-0"
            @click = onSubmit()>
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
      priorityList: ['Low', 'Normal', 'High'],
      statusList: this.$store.state.tickets.statusList,
      formData: {
        title: '',
        status: 'Unassigned',
        priority: 'Low',
        description: ''
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
      let ticketData = {
        id: null,
        title: this.formData.title,
        priority: this.formData.priority,
        description: this.formData.description,
        creator: null,
        status: 'Unassigned',
        creationDate: new Date().toISOString().slice(0, 10).replace(/-/g, '/'),
        uploadedFilePath: null,
        uploadedFileName: null
      }
      this.addTicket(ticketData)
    }
  },
  validations: {
    formData: {
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
