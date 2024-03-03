const { validateResult } = require('../../../middleware/utils')
const { check } = require('express-validator')

const validateCreateCity = [
  check('name')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY')
    .trim(),
  (req, res, next) => {
    validateResult(req, res, next)
  }
]

module.exports = { validateCreateCity }
