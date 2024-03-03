const forgotPasswordResponse = ({ email = '', verification = '' }) => {
  let data = {
    msg: 'RESET_EMAIL_SENT',
    email
  }
  if (process.env.NODE_ENV !== 'production') {
    data = {
      ...data,
      verification
    }
  }
  return data
}

module.exports = { forgotPasswordResponse }
