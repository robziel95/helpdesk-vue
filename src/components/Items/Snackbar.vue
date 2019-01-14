<template>
  <v-snackbar
    v-model="snackbar.visible"
    bottom
    right
    :timeout="snackbar.timeout"
    class="snackbar--cyan"
    color="$color-cyan"
    :multi-line="snackbar.multiline === true">

      {{ snackbar.text }}

      <v-btn flat @click="closeSnackbar()">Close</v-btn>
  </v-snackbar>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  computed: {
    snackbar () {
      return this.$store.state.snackbar;
    }
  },
  methods: {
    ...mapMutations(['closeSnackbar'])
  }
};
</script>

<style lang="scss">
  .v-snack__wrapper{
    background-color: $color-cyan!important;
  }
</style>
