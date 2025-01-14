const { checkPermissions } = require('./helpers')

const { handleError } = require('../../middleware/utils')

const roleAuthorization = (roles) => async (req, res, next) => {
  try {
    const data = {
      id: req.user._id,
      roles
    }
    await checkPermissions(data, next)
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { roleAuthorization }
