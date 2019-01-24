<template>
  <v-container>
    <h2 class="section-title">Ticket list</h2>
    <v-layout row wrap align-end>
      <p>Sort by:</p>
      <div>
        <v-select
          label="Status"
          :items="statusList"
          v-model="statusFilter"
          @change="onFilterChange()"/>
      </div>
      <div>
        <v-select
          label="Priority"
          :items="priorityList"
          v-model="priorityFilter"
          @change="onFilterChange()"/>
      </div>
      <div>
        <v-select
          label="Date"
          :items="dateFilterOptions"
          v-model="dateFilter"
          @change="onFilterChange()"/>
      </div>
      <div>
        <v-btn icon @click="onClearFilters">
          <v-icon>close</v-icon>
        </v-btn>
      </div>
    </v-layout>
    <v-expansion-panel expand class="expansion-panel-modify">
      <v-expansion-panel-content
        v-for="ticket in ((filteredTickets) ? filteredTickets : fetchedTickets)" :key="ticket.id" class="expansion-modify">
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
  data () {
    return {
      statusList: ['Resolved', 'Pending', 'Unassigned', 'Rejected'],
      priorityList: ['High', 'Normal', 'Low'],
      dateFilterOptions: ['Ascending', 'Descending'],
      filteredTickets: null,
      statusFilter: null,
      priorityFilter: null,
      dateFilter: null
    }
  },
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
    onFilterChange () {
      let ticketsChanged = [...this.fetchedTickets]
      console.log(ticketsChanged)
      if (this.statusFilter) {
        ticketsChanged = ticketsChanged.filter(ticket => {
          return (
            (ticket.status.toLowerCase().includes(this.statusFilter.toLowerCase()))
          )
        })
      }
      if (this.priorityFilter) {
        ticketsChanged = ticketsChanged.filter(ticket => {
          return (
            (ticket.priority.toLowerCase().includes(this.priorityFilter.toLowerCase()))
          )
        })
      }
      if (this.dateFilter) {
        if (this.dateFilter === 'Ascending') {
          ticketsChanged.sort(function (a, b) {
            let dateA = new Date(a.creationDate).getTime()
            let dateB = new Date(b.creationDate).getTime()
            return dateA - dateB
          })
        } else if (this.dateFilter === 'Descending') {
          ticketsChanged.sort(function (a, b) {
            let dateA = new Date(a.creationDate).getTime()
            let dateB = new Date(b.creationDate).getTime()
            return dateB - dateA
          })
        }
      }
      this.filteredTickets = ticketsChanged
      console.log(this.filteredTickets)
    },
    onClearFilters () {
      this.statusFilter = null
      this.priorityFilter = null
      this.dateFilter = null
      this.onFilterChange()
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
