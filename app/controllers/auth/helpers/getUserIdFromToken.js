const jwt = require('jsonwebtoken')
const { buildErrObject } = require('../../../middleware/utils')
const { decrypt } = require('../../../middleware/auth')

const getUserIdFromToken = (token = '') => {
  return new Promise((resolve, reject) => {
    jwt.verify(decrypt(token), process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        reject(buildErrObject(409, 'BAD_TOKEN'))
      }
      resolve(decoded.data._id)
    })
  })
}

module.exports = { getUserIdFromToken }
