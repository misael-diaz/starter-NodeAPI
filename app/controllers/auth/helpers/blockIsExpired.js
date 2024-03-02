const LOGIN_ATTEMPTS = 5

const blockIsExpired = ({ loginAttempts = 0, blockExpires = '' }) =>
  loginAttempts > LOGIN_ATTEMPTS && blockExpires <= new Date()

module.exports = { blockIsExpired }
