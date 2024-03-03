const User = require('../../../models/user')
const { itemNotFound } = require('../../../middleware/utils')

const findUser = (id = '') => {
  return new Promise((resolve, reject) => {
    User.findById(id, 'password email', async (err, user) => {
      try {
        await itemNotFound(err, user, 'USER_DOES_NOT_EXIST')
        resolve(user)
      } catch (error) {
        reject(error)
      }
    })
  })
}

module.exports = { findUser }
