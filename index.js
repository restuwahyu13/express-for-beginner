require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')
const bodyParser = require('body-parser')
const flash = require('connect-flash')
const logger = require('morgan')
const path = require('path')
const passport = require('passport')
const cookieParser = require('cookie-parser')
const app = express()

/**
 *@description initialize all route
 */
const homeRoute = require('./routes/home.route')
const loginRoute = require('./routes/login.route')
const registerRoute = require('./routes/register.route')
const logoutRoute = require('./routes/logout.route')

/**
 *@description setup global promise
 */
mongoose.Promise = global.Promise

/**
 *@description setup database connection
 */

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true })
  .then(() => console.log('database connected'))
  .catch(() => console.log('database not connected'))

/**
 *@description initialize all plugin middleware
 */
app.use(express.static(path.resolve(process.cwd(), 'public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(
  session({
    name: 'express-session',
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 86400
    }
  })
)
app.use(flash())
app.use((req, res, next) => {
  res.locals.message = require('express-messages')(req, res)
  res.locals.pathname = req.originalUrl
  res.locals.auth = req.cookies.token
  next()
})
app.use(passport.initialize())
app.use(passport.session())
app.use(logger('dev'))

/**
 *@description initialize template engine
 */
app.set('views', path.resolve(process.cwd(), 'views'))
app.set('view engine', 'ejs')
app.set('x-powered-by', 'disable')

/**
 *@description initialize all route middleware
 */
app.use(homeRoute)
app.use('/user', loginRoute)
app.use('/user', registerRoute)
app.use('/user', logoutRoute)

/**
 *@description listening server
 */
app.listen(process.env.PORT, () => console.log(`Server is running on PORT ${process.env.PORT}`))
