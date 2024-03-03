const { itemNotFound } = require('../../middleware/utils')

const getItem = (id = '', model = {}) => {
  return new Promise((resolve, reject) => {
    model.findById(id, async (err, item) => {
      try {
        await itemNotFound(err, item, 'NOT_FOUND')
        resolve(item)
      } catch (error) {
        reject(error)
      }
    })
  })
}

module.exports = { getItem }
