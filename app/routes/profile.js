const express = require('express')
const router = express.Router()
require('../../config/passport')
const passport = require('passport')
const requireAuth = passport.authenticate('jwt', {
  session: false
})
const trimRequest = require('trim-request')

const { roleAuthorization } = require('../controllers/auth')

const {
  getProfile,
  updateProfile,
  changePassword
} = require('../controllers/profile')

const {
  validateUpdateProfile,
  validateChangePassword
} = require('../controllers/profile/validators')


router.get(
  '/',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  trimRequest.all,
  getProfile
)

router.patch(
  '/',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  trimRequest.all,
  validateUpdateProfile,
  updateProfile
)

router.post(
  '/changePassword',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  trimRequest.all,
  validateChangePassword,
  changePassword
)

module.exports = router
