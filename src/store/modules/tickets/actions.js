import axios from 'axios'

export default {
  addTicket: (context, inputTicket) => {
    return new Promise((resolve, reject) => {
      let ticketFormData = new FormData()
      for (var key in inputTicket) {
        ticketFormData.append(key, inputTicket[key])
      }
      ticketFormData.append('uploadedFile', 'uploadedFile')
      console.log(inputTicket)
      axios.post('http://localhost:3000/api/tickets', inputTicket)
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
  getTicket: (ticketId) => {
    return axios.get('http://localhost:3000/api/tickets/' + ticketId)
      .then(
        response => {
          console.log(response, 'Get ticket success')
        }
      )
      .catch(
        err => {
          console.log(err, 'Get tickets failed')
        }
      )
  },
  deleteTicket (ticketId) {
    return axios.delete('http://localhost:3000/api/tickets/' + ticketId)
  }
}
