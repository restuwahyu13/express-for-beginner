const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const { UserSchema } = require('../models/user.model')

exports.passportSerialize = () => {
  return passport.serializeUser(({ _id }, done) => {
    return done(false, _id)
  })
}

exports.passportDeserialize = () => {
  return passport.deserializeUser((id, done) => {
    return done(false, id)
  })
}

exports.passportLocalStrategy = () => {
  return passport.use(
    new LocalStrategy(
      {
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
      },
      async (req, username, password, done) => {
        const user = await UserSchema.findOne({ username }).lean()
        if (!user) {
          return done(false, null, {
            message: '<div class="alert alert-danger">User account is not exist</div>'
          })
        }

        const verify = UserSchema.verifyPassword(password, user.password)
        if (!verify) {
          return done(false, null, {
            message: '<div class="alert alert-danger">Username or Password wrong</div>'
          })
        }

        return done(false, user, { message: '<div class="alert alert-success">Login Successfuly</div>' })
      }
    )
  )
}
