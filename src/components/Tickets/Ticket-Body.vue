<template>
  <div class="body-content">
    <div class="body-content__text">
      {{ ticket.description }}
    </div>
    <div class="body-content__info">
      <div class="body-content__info__priority">
        <v-icon left>flash_on</v-icon>
        Priority:
        <span>
          {{ ticket.priority }}
        </span>
      </div>
      <div class="body-content__info__creationDate">
        <v-icon left>access_time</v-icon>
        Creation date:
        <span>
          {{ ticket.creationDate }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'ticket'
  ]
}
</script>

<style scoped lang="scss">
  @import "../../styles/components/tickets/_ticket-body.scss";
</style>
