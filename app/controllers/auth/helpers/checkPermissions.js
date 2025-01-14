const User = require('../../../models/user')
const { itemNotFound, buildErrObject } = require('../../../middleware/utils')

const checkPermissions = ({ id = '', roles = [] }, next) => {
  return new Promise((resolve, reject) => {
    User.findById(id, async (err, result) => {
      try {
        await itemNotFound(err, result, 'USER_NOT_FOUND')
        if (roles.indexOf(result.role) > -1) {
          return resolve(next())
        }
        reject(buildErrObject(401, 'UNAUTHORIZED'))
      } catch (error) {
        reject(error)
      }
    })
  })
}

module.exports = { checkPermissions }
