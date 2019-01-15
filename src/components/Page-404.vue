<template>
  <section class="page-not-found">
    <h2 class="page-not-found--title">Page not found</h2>
    <div class="page-not-found--body">
    <img src="http://localhost:3000/images/404-not-found.png" alt="404 page not found">
    </div>
  </section>
</template>

<script>
export default {
};
</script>

<style scoped lang="scss">
  .page-not-found{
    &--title{
      font-size: 3rem;
      text-align: center;
      margin-top: 30px;
    }
    &--body{
      margin-top: 50px;
      display: flex;
      justify-content: center;
      img{
        align-self: center;
        display: block;
        width: 100%;
        height: auto;
        max-width: 724px;
      }
    }
  }
</style>
