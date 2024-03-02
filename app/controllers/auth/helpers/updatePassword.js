const { itemNotFound } = require('../../../middleware/utils')

const updatePassword = (password = '', user = {}) => {
  return new Promise((resolve, reject) => {
    user.password = password
    user.save(async (err, item) => {
      try {
        await itemNotFound(err, item, 'NOT_FOUND')
        resolve(item)
      } catch (error) {
        reject(error)
      }
    })
  })
}

module.exports = { updatePassword }
