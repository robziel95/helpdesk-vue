<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h2 class="headline my-4">Create a new account</h2>
        <div v-if="loader" class="infiniteLoader">
          <v-progress-circular
            indeterminate
            :width="2.5"
            class="infiniteLoader__loader"
          />
        </div>
        <v-card v-else class="pa-4">
          <v-form
            @submit.prevent="onSubmit"
            ref="form">
            <div class="formField" :class="{invalidField: $v.formData.title.$error}">
              <v-text-field
              v-model="formData.title"
              label="Title*"
              @blur="$v.formData.title.$touch()"/>

              <p v-if="!$v.formData.title.required
                  && $v.formData.title.$error"
                class="errorText">
                This field must not be empty.
              </p>
            </div>

            <div v-if="isAdmin" class="formField">
              <v-select
                v-model="formData.status"
                label="Status"
                :items="statusList"/>
            </div>

            <div  class="formField">
              <v-select
                v-model="formData.priority"
                label="Priority"
                :items="priorityList"/>
            </div>
            <text-editor/>
            <div class="custom-textarea">
              <div @input="updateHtml($event)"
                ref="customTextareaContenteditable"
                id ="customTextareaContenteditable"
                v-html="innerDivHtml"
                @blur="$v.formData.description.$touch()"
                contenteditable="true"
                class="custom-textarea__editableDiv"/>
              <div class="formField" :class="{invalidField: $v.formData.description.$error}">
                <v-textarea
                v-model="formData.description"
                label="Description*"
                id ="customTextareaInput"
                type="hidden"
                class="custom-textarea__input"
                @blur="$v.formData.description.$touch()">
                </v-textarea>
                <p v-if="!$v.formData.description.required && $v.formData.description.$error"
                  class="errorText">
                  This field must not be empty.
                </p>
              </div>
            </div>
            <div class="form-field-file"  :class="{invalidField: $v.inputFile.$error}">
              <label class="form-field-file__title" for="uploadFileField">Change user avatar</label>
              <div class=form-field-file__content>
                <v-btn @click="$refs.filePicker.click()" class="btn--cyan mx-0 my-0" type="button">Choose File</v-btn>
                <input @input="$v.inputFile.$touch()" @change="onFileChanged($event)" ref="filePicker" id="uploadFileField" type="file">
                <div class="form-field-file__content__description">
                  <p>{{ inputFile.name }}</p>
                </div>
              </div>
              <p v-if="$v.inputFile.$error"
                class="errorText form-field-file__error">
                Please attach file with correct extension.
                {{ $v.inputFile}}
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
import { mapState, mapGetters, mapActions } from 'vuex'
import textEditor from '../Items/Text-editor'
import fileValidator from '../validators/file-validator.js'

export default {
  data () {
    return {
      priorityList: ['Low', 'Normal', 'High'],
      statusList: this.$store.state.tickets.statusList,
      formData: {
        id: null,
        title: '',
        status: 'Unassigned',
        priority: 'Low',
        description: '',
        creator: null,
        creationDate: null,
        uploadedFilePath: null,
        uploadedFileName: null
      },
      innerDivHtml: '',
      editMode: false,
      inputFile: {
        name: null,
        file: null
      }
    }
  },
  computed: {
    ...mapState([
      'authentication',
      'loader'
    ]),
    ...mapGetters([
      'isAuthenticated',
      'isAdmin',
      'authUserData'
    ])
  },
  created () {
    let routeTicketId = this.$route.params.id
    if (routeTicketId) {
      this.$store.dispatch('getTicket', routeTicketId)
        .then((res) => {
          this.editMode = true

          this.formData.id = res._id
          this.formData.title = res.title
          this.formData.status = res.status
          this.formData.priority = res.priority
          this.formData.description = res.description
          this.innerDivHtml = res.description
          this.formData.creator = res.creator
          this.formData.creationDate = res.creationDate
          this.formData.uploadedFilePath = res.uploadedFilePath
          this.formData.uploadedFileName = res.uploadedFileName

          // Update height of div, after form (code above) is filled with data
          Promise.resolve().then(() => {
            this.updateDivHeight()
          })
        })
        .catch((err) => {
          console.log('err', err)
          this.$router.push('/')
        })
    }
  },
  components: {
    textEditor
  },
  methods: {
    ...mapActions([
      'addTicket',
      'updateTicket'
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
        creator: this.authUserData.userId,
        status: this.formData.status,
        creationDate: new Date().toISOString().slice(0, 10).replace(/-/g, '/'),
        uploadedFilePath: this.formData.uploadedFilePath,
        uploadedFileName: this.formData.uploadedFileName
      }
      if (this.editMode) {
        ticketData.id = this.formData.id
        ticketData.creator = this.formData.creator
        this.updateTicket({ inputTicket: ticketData, uploadedFile: this.inputFile.file })
          .then(() => {
            this.$router.push('/tickets')
          })
        return
      }
      this.addTicket({ inputTicket: ticketData, uploadedFile: this.inputFile.file })
        .then(() => {
          this.$router.push('/tickets')
        })
    },
    updateHtml: function (e) {
      this.formData.description = e.target.innerHTML
      this.updateDivHeight()
    },
    updateDivHeight () {
      document.getElementById('customTextareaInput').style.height = this.$refs.customTextareaContenteditable.offsetHeight + 'px'
    },
    onFileChanged (event) {
      const file = (event.target).files[0]
      this.inputFile.file = file
      this.inputFile.name = file.name
      // create reader
      const reader = new FileReader()
      // start reader (read 'file')
      reader.readAsDataURL(file)
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
    },
    inputFile: {
      attachedFile: attachedFile => {
        if (!attachedFile) return true
        return fileValidator(attachedFile.file)
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../styles/components/tickets/_ticket-submit.scss";
</style>
