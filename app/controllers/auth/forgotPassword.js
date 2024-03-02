const { matchedData } = require('express-validator')
const {
  findUser,
  forgotPasswordResponse,
  saveForgotPassword
} = require('./helpers')
const { handleError } = require('../../middleware/utils')
const { sendResetPasswordEmailMessage } = require('../../middleware/emailer')

const forgotPassword = async (req, res) => {
  try {
    const locale = req.getLocale()
    const data = matchedData(req)
    await findUser(data.email)
    const item = await saveForgotPassword(req)
    sendResetPasswordEmailMessage(locale, item)
    res.status(200).json(forgotPasswordResponse(item))
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { forgotPassword }
