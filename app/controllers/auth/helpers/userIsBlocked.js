const { buildErrObject } = require('../../../middleware/utils')

const userIsBlocked = (user = {}) => {
  return new Promise((resolve, reject) => {
    if (user.blockExpires > new Date()) {
      return reject(buildErrObject(409, 'BLOCKED_USER'))
    }
    resolve(true)
  })
}

module.exports = { userIsBlocked }
