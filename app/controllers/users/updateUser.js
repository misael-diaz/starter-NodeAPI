const User = require('../../models/user')
const { matchedData } = require('express-validator')
const { isIDGood, handleError } = require('../../middleware/utils')
const { updateItem } = require('../../middleware/db')
const { emailExistsExcludingMyself } = require('../../middleware/emailer')

const updateUser = async (req, res) => {
  try {
    req = matchedData(req)
    const id = await isIDGood(req.id)
    const doesEmailExists = await emailExistsExcludingMyself(id, req.email)
    if (!doesEmailExists) {
      res.status(200).json(await updateItem(id, User, req))
    }
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { updateUser }
