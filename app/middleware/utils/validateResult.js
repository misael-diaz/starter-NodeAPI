const { validationResult } = require('express-validator')
const { handleError } = require('./handleError')
const { buildErrObject } = require('./buildErrObject')

const validateResult = (req, res, next) => {
  try {
    validationResult(req).throw()
    if (req.body.email) {
      req.body.email = req.body.email.toLowerCase()
    }
    return next()
  } catch (err) {
    return handleError(res, buildErrObject(422, err.array()))
  }
}

module.exports = { validateResult }
