const { buildSuccObject, itemNotFound } = require('../../middleware/utils')

const deleteItem = (id = '', model = {}) => {
  return new Promise((resolve, reject) => {
    model.findByIdAndRemove(id, async (err, item) => {
      try {
        await itemNotFound(err, item, 'NOT_FOUND')
        resolve(buildSuccObject('DELETED'))
      } catch (error) {
        reject(error)
      }
    })
  })
}

module.exports = { deleteItem }
