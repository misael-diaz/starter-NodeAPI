const { matchedData } = require('express-validator')
const {
  findForgotPassword,
  findUserToResetPassword,
  updatePassword,
  markResetPasswordAsUsed
} = require('./helpers')
const { handleError } = require('../../middleware/utils')

const resetPassword = async (req, res) => {
  try {
    const data = matchedData(req)
    const forgotPassword = await findForgotPassword(data.id)
    const user = await findUserToResetPassword(forgotPassword.email)
    await updatePassword(data.password, user)
    const result = await markResetPasswordAsUsed(req, forgotPassword)
    res.status(200).json(result)
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { resetPassword }
