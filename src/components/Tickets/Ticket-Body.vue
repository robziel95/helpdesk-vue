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
  .body-content{
    padding: 12px 24px;
    display: flex;
    flex-direction: column;
    &__text{
      margin-bottom: 15px;
    }
    &__info{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      > div{
        margin-bottom: 7px;
        display: flex;
        align-items: center;
        white-space: nowrap;
        v-icon{
          color: $color-cyan!important;
        }
        span{
          margin-left: 6px;
          font-weight: 500;
        }
      }
    }
  }
  @media only screen and (min-width: 1264px) {
    .body-content{
      flex-direction: row;
      align-items: flex-start;
      &__text{
        flex: 1 1 auto;
        margin-right: 30px;
      }
    }
  }
</style>
