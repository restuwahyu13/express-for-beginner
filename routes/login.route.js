const express = require('express')
const router = express.Router()
const passport = require('passport')
const { index, login } = require('../controllers/login.controller').loginController

router.get('/login', index)
router.post(
  '/login',
  passport.authenticate('local', {
    badRequestMessage: '<div class="alert alert-danger">Username or Password wrong</div>',
    failureFlash: true,
    successFlash: true,
    failureRedirect: '/user/login'
  }),
  login
)

module.exports = router
