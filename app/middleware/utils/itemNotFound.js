const { buildErrObject } = require('./buildErrObject')

const itemNotFound = (err = {}, item = {}, message = 'NOT_FOUND') => {
  return new Promise((resolve, reject) => {
    if (err) {
      return reject(buildErrObject(422, err.message))
    }
    if (!item) {
      return reject(buildErrObject(404, message))
    }
    resolve()
  })
}

module.exports = { itemNotFound }
