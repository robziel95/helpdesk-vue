import axios from 'axios'

export default {
  addTicket: (context, payload) => {
    return new Promise((resolve, reject) => {
      let ticketFormData = new FormData()
      for (var key in payload.inputTicket) {
        ticketFormData.append(key, payload.inputTicket[key])
      }
      ticketFormData.append('uploadedFile', payload.uploadedFile)
      axios.post('http://localhost:3000/api/tickets', ticketFormData)
        .then(
          (responseData) => {
            context.commit('showSnackbar', { text: 'Ticket successfully added' })
            resolve()
          }
        )
        .catch(
          err => {
            console.log(err, 'Add ticket failed')
            context.commit('showSnackbar', { text: 'Ticket addition failed' })
            reject(err)
          }
        )
    })
  },
  updateTicket ({ state }, payload) {
    return new Promise((resolve, reject) => {
      console.log(payload)
      let inputTicketFormData = new FormData()
      for (var key in payload.inputTicket) {
        inputTicketFormData.append(key, payload.inputTicket[key])
      }
      if (payload.uploadedFile !== null) {
        inputTicketFormData.set('uploadedFile', payload.uploadedFile)
      }

      axios.put('http://localhost:3000/api/tickets/' + payload.inputTicket.id, inputTicketFormData)
        .then(
          (response) => {
            resolve()
          }
        ).catch(
          err => {
            reject(err)
          }
        )
    })
  },
  getTickets: ({ commit }) => {
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:3000/api/tickets')
        .then(
          (ticketData) => {
            let fetchedTickets = ticketData.data.tickets.map(
              ticket => {
                return {
                  id: ticket._id,
                  title: ticket.title,
                  priority: ticket.priority,
                  description: ticket.description,
                  creator: ticket.creator,
                  status: ticket.status,
                  creationDate: ticket.creationDate,
                  uploadedFilePath: ticket.uploadedFilePath,
                  uploadedFileName: ticket.uploadedFileName
                }
              }
            )
            resolve()
            commit('fetchTickets', fetchedTickets)
          }
        )
        .catch(
          err => {
            console.log(err, 'Get tickets failed')
            reject(err)
            // TODO error modal
          }
        )
    })
  },
  getTicket: ({ state }, ticketId) => {
    return new Promise((resolve, reject) => {
      return axios.get('http://localhost:3000/api/tickets/' + ticketId)
        .then(
          res => {
            resolve(res.data)
          }
        )
        .catch(
          err => {
            reject(err)
          }
        )
    })
  },
  deleteTicket (context, ticketId) {
    axios.delete('http://localhost:3000/api/tickets/' + ticketId)
      .then(
        response => {
          context.commit('showSnackbar', { text: 'Ticket deleted successfully' })
          context.commit('deleteTicket', ticketId)
        }
      )
      .catch(
        () => {
          context.commit('showSnackbar', { text: 'Ticket deletion failed' })
        }
      )
  }
}
