const { matchedData } = require('express-validator')
const { verificationExists, verifyUser } = require('./helpers')

const { handleError } = require('../../middleware/utils')

const verify = async (req, res) => {
  try {
    req = matchedData(req)
    const user = await verificationExists(req.id)
    res.status(200).json(await verifyUser(user))
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { verify }
