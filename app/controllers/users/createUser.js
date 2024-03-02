const { matchedData } = require('express-validator')
const { handleError } = require('../../middleware/utils')
const {
  emailExists,
  sendRegistrationEmailMessage
} = require('../../middleware/emailer')
const { createItemInDb } = require('./helpers')

const createUser = async (req, res) => {
  try {
    const locale = req.getLocale()
    req = matchedData(req)
    const doesEmailExists = await emailExists(req.email)
    if (!doesEmailExists) {
      const item = await createItemInDb(req)
      sendRegistrationEmailMessage(locale, item)
      res.status(201).json(item)
    }
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { createUser }
