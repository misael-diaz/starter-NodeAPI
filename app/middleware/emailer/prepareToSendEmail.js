const { sendEmail } = require('./sendEmail')

const prepareToSendEmail = (user = {}, subject = '', htmlMessage = '') => {
  user = {
    name: user.name,
    email: user.email,
    verification: user.verification
  }
  const data = {
    user,
    subject,
    htmlMessage
  }
  if (process.env.NODE_ENV === 'production') {
    sendEmail(data, (messageSent) =>
      messageSent
        ? console.log(`Email SENT to: ${user.email}`)
        : console.log(`Email FAILED to: ${user.email}`)
    )
  } else if (process.env.NODE_ENV === 'development') {
    console.log(data)
  }
}

module.exports = { prepareToSendEmail }
