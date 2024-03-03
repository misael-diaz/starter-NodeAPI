const i18n = require('i18n')
const { prepareToSendEmail } = require('./prepareToSendEmail')

const sendResetPasswordEmailMessage = (locale = '', user = {}) => {
  i18n.setLocale(locale)
  const subject = i18n.__('forgotPassword.SUBJECT')
  const htmlMessage = i18n.__(
    'forgotPassword.MESSAGE',
    user.email,
    process.env.FRONTEND_URL,
    user.verification
  )
  prepareToSendEmail(user, subject, htmlMessage)
}

module.exports = { sendResetPasswordEmailMessage }
