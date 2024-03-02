const { buildErrObject } = require('../../../middleware/utils')

const verifyUser = (user = {}) => {
  return new Promise((resolve, reject) => {
    user.verified = true
    user.save((err, item) => {
      if (err) {
        return reject(buildErrObject(422, err.message))
      }
      resolve({
        email: item.email,
        verified: item.verified
      })
    })
  })
}

module.exports = { verifyUser }
