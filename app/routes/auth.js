const express = require('express')
const router = express.Router()
require('../../config/passport')
const passport = require('passport')
const requireAuth = passport.authenticate('jwt', {
  session: false
})
const trimRequest = require('trim-request')

const {
  register,
  verify,
  forgotPassword,
  resetPassword,
  getRefreshToken,
  login,
  roleAuthorization
} = require('../controllers/auth')

const {
  validateRegister,
  validateVerify,
  validateForgotPassword,
  validateResetPassword,
  validateLogin
} = require('../controllers/auth/validators')

router.post('/register', trimRequest.all, validateRegister, register)
router.post('/verify', trimRequest.all, validateVerify, verify)
router.post('/forgot', trimRequest.all, validateForgotPassword, forgotPassword)
router.post('/reset', trimRequest.all, validateResetPassword, resetPassword)

router.get(
  '/token',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  trimRequest.all,
  getRefreshToken
)

router.post('/login', trimRequest.all, validateLogin, login)

module.exports = router
