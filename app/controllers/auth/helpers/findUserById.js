const User = require('../../../models/user')
const { itemNotFound } = require('../../../middleware/utils')

const findUserById = (userId = '') => {
  return new Promise((resolve, reject) => {
    User.findById(userId, async (err, item) => {
      try {
        await itemNotFound(err, item, 'USER_DOES_NOT_EXIST')
        resolve(item)
      } catch (error) {
        reject(error)
      }
    })
  })
}

module.exports = { findUserById }
