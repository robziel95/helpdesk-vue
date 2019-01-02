const mongoose = require('mongoose')

const ticketSchema = mongoose.Schema({
  title: { type: String, required: true },
  priority: { type: String, required: true },
  description: { type: String, required: true },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: { type: String, required: true, default: 'unassigned' },
  creationDate: { type: String, required: true },
  uploadedFilePath: { type: String, default: null },
  uploadedFileName: { type: String, default: null }
})

module.exports = mongoose.model('Ticket', ticketSchema)
// create model from schema
