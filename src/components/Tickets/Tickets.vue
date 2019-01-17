<template>
  <v-container>
    <v-expansion-panel>
      <v-expansion-panel-content
        v-for="ticket in fetchedTickets" :key="ticket.id">
        <ticket-header :title="ticket.title" :priority="ticket.priority" slot="header"/>
        <ticket-body :ticket="ticket"/>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import ticketHeader from './Ticket-Header'
import ticketBody from './Ticket-Body'

export default {
  components: {
    ticketHeader,
    ticketBody
  },
  beforeCreate () {
    this.$store.dispatch('getTickets')
  },
  computed: {
    ...mapState([
      'tickets'
    ]),
    fetchedTickets () {
      // return this.$store.state.tickets.tickets
      return this.tickets.tickets
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
</style>
