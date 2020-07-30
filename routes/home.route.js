const express = require('express')
const router = express.Router()
const { home } = require('../controllers/home.controller').homeController
const auth = require('../middlewares/auth.middleware')

router.get('/', auth, home)

module.exports = router
