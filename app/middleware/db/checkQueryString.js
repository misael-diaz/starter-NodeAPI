const { buildErrObject } = require('../../middleware/utils')

const checkQueryString = (query = {}) => {
  return new Promise((resolve, reject) => {
    try {
      if (
        typeof query.filter !== 'undefined' &&
        typeof query.fields !== 'undefined'
      ) {
        const data = {
          $or: []
        }
        const array = []
        const arrayFields = query.fields.split(',')
        arrayFields.map((item) => {
          array.push({
            [item]: {
              $regex: new RegExp(query.filter, 'i')
            }
          })
        })
        data.$or = array
        resolve(data)
      } else {
        resolve({})
      }
    } catch (err) {
      console.log(err.message)
      reject(buildErrObject(422, 'ERROR_WITH_FILTER'))
    }
  })
}

module.exports = { checkQueryString }
