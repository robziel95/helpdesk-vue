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
  .header-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    &__title{
      font-size: 1.1rem;
      &__icon{
        color: $color-cyan;
      }
    }
    .chip{
      font-weight: 500;
      color: $color-white-90;
      background-color: $color-pill-grey;
      font-size: 1rem;

      &--pending{
        color: $color-white-90;
        background-color: $color-pill-orange;
      }
      &--resolved{
        color: $color-white-90;
        background-color: $color-pill-green;
      }
      &--rejected{
        color: $color-white-90;
        background-color: $color-pill-red;
      }
    }

  }
  @media only screen and (max-width: 600px) {
    .header-container{
      &__title{
        position: relative;
        padding-left: 28px;
        padding-right: 28px;
        margin-bottom: 15px;
        &__icon{
          position: absolute;
          left: 0;
          top: -2px;
        }
      }
      &__status{
        margin-bottom: 10px;
      }
      > div {
        width: 100%;
        text-align: center;
      }
    }
  }
  @media only screen and (min-width: 600px) {
    .header-container{
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: nowrap;
      &__title{
        display: flex;
        align-items: center;
        &__icon{
          margin-right: 20px;
        }
      }
      &__status{
        margin-right: 10px;
      }
    }
  }
</style>
