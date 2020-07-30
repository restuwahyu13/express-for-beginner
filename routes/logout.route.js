const express = require('express')
const router = express.Router()
const { logout } = require('../controllers/logout.controller').logoutController
const auth = require('../middlewares/auth.middleware')

router.get('/logout', auth, logout)

module.exports = router
