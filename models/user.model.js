const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: true
  },
  avatar: {
    type: String,
    trim: true,
    required: true
  },
  password: {
    type: String,
    trim: true,
    required: true
  },
  created_at: {
    type: Date,
    default: null
  },
  updated_at: {
    type: Date,
    default: null
  }
})

/**
 * @description hash password with mongoose hooks before saving data
 */
userSchema.pre('save', function (next) {
  if (this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, 10)
    return next()
  }
})

/**
 * @description compare password with mongoose static from model document
 */
userSchema.static('verifyPassword', function (password, hash) {
  if (password && hash) {
    return bcrypt.compareSync(password, hash)
  }
})

const UserSchema = mongoose.model('beginner', userSchema)
module.exports = { UserSchema }
