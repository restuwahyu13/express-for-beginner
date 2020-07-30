const jwt = require('jsonwebtoken')
const { passportLocalStrategy, passportSerialize, passportDeserialize } = require('../utils/util.passport')

module.exports.loginController = {
  index: (req, res, next) => {
    res.render('login_view', { title: 'Login Form' })
  },
  login: (req, res, next) => {
    /**
     * @description store token to cookie for login auth
     */
    const { _id, username } = req.user
    const token = jwt.sign({ _id, username }, process.env.JWT_SECRET, { expiresIn: '1d' })
    res.cookie('token', token, { maxAge: '86400' })
    return res.redirect('/')
  }
}

/**
 * @description init passport local strategy
 */
passportLocalStrategy()
passportSerialize()
passportDeserialize()
