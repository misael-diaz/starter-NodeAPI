const User = require('../../models/user')
const { buildErrObject } = require('../../middleware/utils')

const emailExists = (email = '') => {
  return new Promise((resolve, reject) => {
    User.findOne(
      {
        email
      },
      (err, item) => {
        if (err) {
          return reject(buildErrObject(422, err.message))
        }

        if (item) {
          return reject(buildErrObject(422, 'EMAIL_ALREADY_EXISTS'))
        }
        resolve(false)
      }
    )
  })
}

module.exports = { emailExists }
