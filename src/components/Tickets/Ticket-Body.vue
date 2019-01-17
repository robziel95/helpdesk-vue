<template>
  <v-card>
    <v-card-text>
      {{ ticket }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: [
    'ticket'
  ]
}
</script>

<style scoped lang="scss">
</style>
