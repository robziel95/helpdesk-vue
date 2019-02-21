import axios from 'axios'

export default {
  addTicket: ({ commit }, payload) => {
    return new Promise((resolve, reject) => {
      let ticketFormData = new FormData()
      for (var key in payload.inputTicket) {
        ticketFormData.append(key, payload.inputTicket[key])
      }
      ticketFormData.append('uploadedFile', payload.uploadedFile)
      commit('setLoader', true, { root: true })
      axios.post('http://localhost:3000/api/tickets', ticketFormData)
        .then(
          (responseData) => {
            commit('showSnackbar', { text: 'Ticket successfully added' })
            commit('setLoader', false, { root: true })
            resolve()
          }
        )
        .catch(
          err => {
            commit('showSnackbar', { text: 'Ticket addition failed' })
            reject(err)
          }
        )
    })
  },
  updateTicket ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      let inputTicketFormData = new FormData()
      for (var key in payload.inputTicket) {
        inputTicketFormData.append(key, payload.inputTicket[key])
      }
      if (payload.uploadedFile !== null) {
        inputTicketFormData.set('uploadedFile', payload.uploadedFile)
      }
      commit('setLoader', true, { root: true })
      axios.put('http://localhost:3000/api/tickets/' + payload.inputTicket.id, inputTicketFormData)
        .then(
          (response) => {
            commit('setLoader', false, { root: true })
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
      commit('setLoader', true, { root: true })
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
            commit('setLoader', false, { root: true })
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
  getTicket: ({ commit }, ticketId) => {
    return new Promise((resolve, reject) => {
      commit('setLoader', true, { root: true })
      return axios.get('http://localhost:3000/api/tickets/' + ticketId)
        .then(
          res => {
            commit('setLoader', false, { root: true })
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
  deleteTicket ({ commit }, ticketId) {
    commit('setLoader', true, { root: true })
    axios.delete('http://localhost:3000/api/tickets/' + ticketId)
      .then(
        response => {
          commit('setLoader', false, { root: true })
          commit('showSnackbar', { text: 'Ticket deleted successfully' })
          commit('deleteTicket', ticketId)
        }
      )
      .catch(
        () => {
          commit('showSnackbar', { text: 'Ticket deletion failed' })
        }
      )
  }
}
