<template>
  <div>
    <div>Title: {{ title }}</div>
    <div>Title: {{ priority }}</div>
  </div>
</template>

<script>

export default {
  props: [
    'title',
    'priority'
  ]
}
</script>

<style scoped lang="scss">

</style>
