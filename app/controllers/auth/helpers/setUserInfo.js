const setUserInfo = (req = {}) => {
  return new Promise((resolve) => {
    let user = {
      _id: req._id,
      name: req.name,
      email: req.email,
      role: req.role,
      verified: req.verified
    }
    if (process.env.NODE_ENV !== 'production') {
      user = {
        ...user,
        verification: req.verification
      }
    }
    resolve(user)
  })
}

module.exports = { setUserInfo }
