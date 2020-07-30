const { UserSchema } = require('../models/user.model')
const { resultsValidator } = require('../middlewares/validator.middleware')

module.exports.registerController = {
  index: (req, res, next) => {
    res.render('register_view', { title: 'Register Form' })
  },
  register: async (req, res, next) => {
   const errors = resultsValidator(req)

    if (errors.length > 0) {
      for (let i = 0; i < errors.length; i++) {
        req.flash('error', `<div class="alert alert-danger">${errors[i].msg}</div>`)
      }
      return res.redirect('/user/register')
    }

    const user = await UserSchema.findOne({ username: req.body.username }).lean()
    if (user) {
      req.flash('error', '<div class="alert alert-danger">User account already exist</div>')
      return res.redirect('/user/register')
    }

    UserSchema.create({
      username: req.body.username,
      avatar: req.avatar,
      password: req.body.password,
      created_at: new Date()
    })

    req.flash('success', '<div class="alert alert-success">Registered Successfuly</div>')
    return res.redirect('/user/login')
  }
}
