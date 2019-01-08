<template>
  <v-container class="mt-5">
    <h2 class="display-1">Submit Ticket</h2>
    <v-card class="pa-4">
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model="title"
          label="Title"
          required
        ></v-text-field>

        <v-text-field
          v-model="priority"
          label="Priority"
          required
        ></v-text-field>

        <v-text-field
          v-model="description"
          label="Description"
          required
        ></v-text-field>

        <v-btn
          @click="validate"
          class="btn--cyan my-2 mx-0"
        >
          Add Ticket
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

</style>
