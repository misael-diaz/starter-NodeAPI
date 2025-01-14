const { isIDGood, handleError } = require('../../middleware/utils')
const { matchedData } = require('express-validator')
const { updateProfileInDB } = require('./helpers')

const updateProfile = async (req, res) => {
  try {
    const id = await isIDGood(req.user._id)
    req = matchedData(req)
    res.status(200).json(await updateProfileInDB(req, id))
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { updateProfile }
