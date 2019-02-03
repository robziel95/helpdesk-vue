<template>
  <v-container>
    <v-layout row wrap align-end justify-space-between class="filterPanel">
      <h2 class="section-title">Ticket list</h2>
      <div>
        <v-layout row wrap align-end class="filterPanel__fields-container">
        <div>
          <v-btn
            v-if="statusFilter || dateFilter || priorityFilter"
            class="filterPanel__clear"
            flat
            @click="onClearFilters">
            Clear all
            <v-icon>
              close
            </v-icon>
          </v-btn>
        </div>
        <p class="filterPanel__name">Filter by:</p>
        <div>
          <v-select
            :items="statusList"
            label="Status"
            v-model="statusFilter"
            class="filterPanel__field"
            @change="onFilterChange()"/>
        </div>
        <div>
          <v-select
            :items="priorityList"
            label="Priority"
            v-model="priorityFilter"
            class="filterPanel__field"
            deletable-chips
            @change="onFilterChange()"/>
        </div>
        <div>
          <v-select
            :items="dateFilterOptions"
            label="Date"
            v-model="dateFilter"
            class="filterPanel__field"
            append-outer-icon
            deletable-chips
            @change="onFilterChange()">
          </v-select>
        </div>
        </v-layout>
      </div>
    </v-layout>
    <v-expansion-panel expand class="expansion-panel-modify">
      <v-expansion-panel-content
        v-for="ticket in ((filteredTickets) ? filteredTickets : fetchedTickets)" :key="ticket.id" class="expansion-modify">
        <ticket-header :title="ticket.title" :status="ticket.status" slot="header"/>
        <ticket-body :ticket="ticket"/>
        <div v-if=(isLoggedIn)
          class="expansion-panel__foter">
          <v-btn color="error" @click="onDelete(ticket.id)">
            Delete
          </v-btn>
          <v-btn :to="`/Submit-Ticket/${ticket.id}`" class="btn--cyan">
            Edit Ticket
          </v-btn>
        </div>
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
      .then(() => {
        // TODO - spinner
      })
      .catch(() => {
        // TODO - spinner
      })
  },
  computed: {
    ...mapState([
      'tickets'
    ]),
    fetchedTickets () {
      // return this.$store.state.tickets.tickets
      return this.tickets.tickets
    },
    isLoggedIn () {
      return this.$store.getters.isAuthenticated
    }
  },
  methods: {
    onFilterChange () {
      let ticketsChanged = [...this.fetchedTickets]
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
    },
    onClearFilters () {
      this.statusFilter = null
      this.priorityFilter = null
      this.dateFilter = null
      this.onFilterChange()
    },
    onDelete (ticketId) {
      this.$store.dispatch('deleteTicket', ticketId)
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../styles/components/tickets/_tickets.scss";
</style>
