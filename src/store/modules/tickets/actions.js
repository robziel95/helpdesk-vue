import axios from 'axios'

export default {
  addTicket: (inputTicket, uploadedFile = null) => {
    let ticketFormData = new FormData()
    for (var key in inputTicket) {
      ticketFormData.append(key, inputTicket[key])
    }
    ticketFormData.append('uploadedFile', uploadedFile)
    axios.post('http://localhost:3000/api/tickets', ticketFormData)
      .then(
        (responseData) => {
          console.log(responseData)
        }
      )
      .catch(
        err => {
          console.log(err, 'Add ticket failed')
        }
      )
  },
  getTickets: () => {
    console.log('Before get')
    axios.get('http://localhost:3000/api/tickets')
      .then(
        (ticketData) => {
          let fetchedTicket = ticketData.data.tickets.map(
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
          console.log(fetchedTicket)
        }
      )
      .catch(
        err => {
          console.log(err, 'Get tickets failed')
        }
      )
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
