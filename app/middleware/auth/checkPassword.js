const { buildErrObject } = require('../../middleware/utils')

const checkPassword = (password = '', user = {}) => {
  return new Promise((resolve, reject) => {
    user.comparePassword(password, (err, isMatch) => {
      if (err) {
        return reject(buildErrObject(422, err.message))
      }
      if (!isMatch) {
        resolve(false)
      }
      resolve(true)
    })
  })
}

module.exports = { checkPassword }
