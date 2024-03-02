const User = require('../../../models/user')
const { itemNotFound } = require('../../../middleware/utils')

const getProfileFromDB = (id = '') => {
  return new Promise((resolve, reject) => {
    User.findById(id, '-_id -updatedAt -createdAt', async (err, user) => {
      try {
        await itemNotFound(err, user, 'NOT_FOUND')
        resolve(user)
      } catch (error) {
        reject(error)
      }
    })
  })
}

module.exports = { getProfileFromDB }
