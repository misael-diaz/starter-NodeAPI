const { validateResult } = require('../../../middleware/utils')
const { check } = require('express-validator')

const validateDeleteUser = [
  check('id')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
  (req, res, next) => {
    validateResult(req, res, next)
  }
]

module.exports = { validateDeleteUser }
