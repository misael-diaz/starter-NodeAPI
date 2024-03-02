const jwt = require('jsonwebtoken')
const { encrypt } = require('../../../middleware/auth')

const generateToken = (user = '') => {
  try {
    const expiration =
      Math.floor(Date.now() / 1000) + 60 * process.env.JWT_EXPIRATION_IN_MINUTES

    return encrypt(
      jwt.sign(
        {
          data: {
            _id: user
          },
          exp: expiration
        },
        process.env.JWT_SECRET
      )
    )
  } catch (error) {
    throw error
  }
}

module.exports = { generateToken }
