export default {
  totalSubmittedTickets: (state) => {
    let resolvedTicketsCount = 0
    for (let ticket of state.tickets) {
      if (ticket.status === 'Resolved') {
        resolvedTicketsCount++
      }
    }
    return resolvedTicketsCount
  },
  totalResolvedTickets: (state) => {
    return state.tickets.length
  }
}
