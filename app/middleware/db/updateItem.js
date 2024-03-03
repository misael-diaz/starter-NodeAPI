const { itemNotFound } = require('../../middleware/utils')

const updateItem = (id = '', model = {}, req = {}) => {
  return new Promise((resolve, reject) => {
    model.findByIdAndUpdate(
      id,
      req,
      {
        new: true,
        runValidators: true
      },
      async (err, item) => {
        try {
          await itemNotFound(err, item, 'NOT_FOUND')
          resolve(item)
        } catch (error) {
          reject(error)
        }
      }
    )
  })
}

module.exports = { updateItem }
