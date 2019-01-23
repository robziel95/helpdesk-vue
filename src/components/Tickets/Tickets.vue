<template>
  <v-container>
    <h2 class="section-title">Ticket list</h2>
    <v-layout row wrap>
      <v-flex xs12 sm6 md3>
        <v-text-field
          label="Search"
          type="search"
          append-icon="search"
        />
      </v-flex>
    </v-layout>
    <v-expansion-panel expand class="expansion-panel-modify">
      <v-expansion-panel-content
        v-for="ticket in fetchedTickets" :key="ticket.id" class="expansion-modify">
        <ticket-header :title="ticket.title" :status="ticket.status" slot="header"/>
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
  }
}
</script>

<style scoped lang="scss">
  .expansion-panel-modify{
    box-shadow: none!important;
  }
  .expansion-modify{
    margin-bottom: 20px;
    border: 1px solid $color-separator-grey;
    @extend %material-shadow;
  }
</style>
