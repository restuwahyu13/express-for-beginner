const express = require('express')
const router = express.Router()
const { index, register } = require('../controllers/register.controller').registerController
const { fileUpload } = require('../utils/util.upload')
const { registerValidator } = require('../middlewares/validator.middleware')

router.get('/register', index)
router.post(
  '/register',
  fileUpload.fields([{ name: 'avatar' } /**{ name: 'avatar-c' }*/]),
  registerValidator(),
  register
)

module.exports = router
