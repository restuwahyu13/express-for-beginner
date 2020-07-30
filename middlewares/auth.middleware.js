const { UserSchema } = require('../models/user.model')
const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {
  try {
    const getCookie = req.cookies.token
    const { _id } = jwt.verify(getCookie, process.env.JWT_SECRET)
    const user = await UserSchema.findById(_id).lean()
    if (user) return next()
  } catch (err) {
    req.flash('error', '<div class="alert alert-danger">Unautorization Please Login</div>')
    return res.redirect('/user/login')
  }
}
