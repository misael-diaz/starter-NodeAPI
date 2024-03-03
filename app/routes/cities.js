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
  getAllCities,
  getCities,
  createCity,
  getCity,
  updateCity,
  deleteCity
} = require('../controllers/cities')

const {
  validateCreateCity,
  validateGetCity,
  validateUpdateCity,
  validateDeleteCity
} = require('../controllers/cities/validators')

router.get('/all', getAllCities)

router.get(
  '/',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  getCities
)

router.post(
  '/',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateCreateCity,
  createCity
)

router.get(
  '/:id',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateGetCity,
  getCity
)

router.patch(
  '/:id',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateUpdateCity,
  updateCity
)

router.delete(
  '/:id',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateDeleteCity,
  deleteCity
)

module.exports = router
