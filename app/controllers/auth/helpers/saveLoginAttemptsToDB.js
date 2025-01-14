const { buildErrObject } = require('../../../middleware/utils')

const saveLoginAttemptsToDB = (user = {}) => {
  return new Promise((resolve, reject) => {
    user.save((err, result) => {
      if (err) {
        return reject(buildErrObject(422, err.message))
      }
      if (result) {
        resolve(true)
      }
    })
  })
}

module.exports = { saveLoginAttemptsToDB }
