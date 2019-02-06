const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  // unique is not a validator
  // npm install --save mongoose-unique-validator was used for validation
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userType: { type: String, required: true, default: 'employee' },
  nickname: { type: String, required: false },
  avatarPath: { type: String, default: 'http://localhost:3000/images/missing_user_avatar.png' }
})

// validate unique fields
userSchema.plugin(uniqueValidator)

module.exports = mongoose.model('User', userSchema)
// create model from schema
