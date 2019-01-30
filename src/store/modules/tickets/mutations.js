export default {
  fetchTickets: (state, payload) => {
    state.tickets = payload
  },
  deleteTicket: (state, payload) => {
    state.tickets = state.tickets.filter(ticket => { return ticket.id !== payload })
  }
}
