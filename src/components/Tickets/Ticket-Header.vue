<template>
  <div class="header-container">
      <div class="header-container__title">
        <v-icon class="header-container__title__icon">
          label_important
        </v-icon>
        {{ title }}
      </div>
      <div class="header-container__status">
        <v-chip disabled :class="'chip--' + status.toLowerCase()"
          class="chip">
          {{ status }}
        </v-chip>
      </div>
  </div>
</template>

<script>

export default {
  props: [
    'title',
    'status'
  ]
}
</script>

<style scoped lang="scss">
  @import "../../styles/components/tickets/_ticket-header.scss";
</style>
