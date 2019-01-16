<template>
  <v-container>
    <v-expansion-panel>
      <v-expansion-panel-content
        v-for="(item,i) in 5"
        :key="i"
      >
        <ticket-header slot="header" />
        <ticket-body />
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-container>
</template>

<script>
import ticketHeader from './Ticket-Header';
import ticketBody from './Ticket-Body';

export default {
  components: {
    ticketHeader,
    ticketBody
  }
};
</script>

<style scoped lang="scss">

</style>
