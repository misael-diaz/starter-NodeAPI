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
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser
} = require('../controllers/users')

const {
  validateCreateUser,
  validateGetUser,
  validateUpdateUser,
  validateDeleteUser
} = require('../controllers/users/validators')

router.get(
  '/',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  getUsers
)

router.post(
  '/',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateCreateUser,
  createUser
)

router.get(
  '/:id',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateGetUser,
  getUser
)

router.patch(
  '/:id',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateUpdateUser,
  updateUser
)

router.delete(
  '/:id',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateDeleteUser,
  deleteUser
)

module.exports = router
