const City = require('../../../models/city')
const { buildErrObject } = require('../../../middleware/utils')

const cityExistsExcludingItself = (id = '', name = '') => {
  return new Promise((resolve, reject) => {
    City.findOne(
      {
        name,
        _id: {
          $ne: id
        }
      },
      (err, item) => {
        if (err) {
          return reject(buildErrObject(422, err.message))
        }

        if (item) {
          return reject(buildErrObject(422, 'CITY_ALREADY_EXISTS'))
        }

        resolve(false)
      }
    )
  })
}

module.exports = { cityExistsExcludingItself }
