const User = require('../../../models/user')
const { itemNotFound } = require('../../../middleware/utils')

const findUserToResetPassword = (email = '') => {
  return new Promise((resolve, reject) => {
    User.findOne(
      {
        email
      },
      async (err, user) => {
        try {
          await itemNotFound(err, user, 'NOT_FOUND')
          resolve(user)
        } catch (error) {
          reject(error)
        }
      }
    )
  })
}

module.exports = { findUserToResetPassword }
