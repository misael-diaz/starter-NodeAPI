const City = require('../../../models/city')
const { buildErrObject } = require('../../../middleware/utils')

const getAllItemsFromDB = () => {
  return new Promise((resolve, reject) => {
    City.find(
      {},
      '-updatedAt -createdAt',
      {
        sort: {
          name: 1
        }
      },
      (err, items) => {
        if (err) {
          return reject(buildErrObject(422, err.message))
        }
        resolve(items)
      }
    )
  })
}

module.exports = { getAllItemsFromDB }
