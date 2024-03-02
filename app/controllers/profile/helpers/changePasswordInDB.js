const User = require('../../../models/user')
const {
  itemNotFound,
  buildErrObject,
  buildSuccObject
} = require('../../../middleware/utils')

const changePasswordInDB = (id = '', req = {}) => {
  return new Promise((resolve, reject) => {
    User.findById(id, '+password', async (err, user) => {
      try {
        await itemNotFound(err, user, 'NOT_FOUND')

        user.password = req.newPassword

        user.save((error) => {
          if (err) {
            return reject(buildErrObject(422, error.message))
          }
          resolve(buildSuccObject('PASSWORD_CHANGED'))
        })
      } catch (error) {
        reject(error)
      }
    })
  })
}

module.exports = { changePasswordInDB }
