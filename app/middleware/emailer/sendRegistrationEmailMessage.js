const i18n = require('i18n')
const { prepareToSendEmail } = require('./prepareToSendEmail')

const sendRegistrationEmailMessage = (locale = '', user = {}) => {
  i18n.setLocale(locale)
  const subject = i18n.__('registration.SUBJECT')
  const htmlMessage = i18n.__(
    'registration.MESSAGE',
    user.name,
    process.env.FRONTEND_URL,
    user.verification
  )
  prepareToSendEmail(user, subject, htmlMessage)
}

module.exports = { sendRegistrationEmailMessage }
