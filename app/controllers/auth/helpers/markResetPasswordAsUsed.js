const {
  getIP,
  getBrowserInfo,
  getCountry,
  itemNotFound,
  buildSuccObject
} = require('../../../middleware/utils')

const markResetPasswordAsUsed = (req = {}, forgot = {}) => {
  return new Promise((resolve, reject) => {
    forgot.used = true
    forgot.ipChanged = getIP(req)
    forgot.browserChanged = getBrowserInfo(req)
    forgot.countryChanged = getCountry(req)
    forgot.save(async (err, item) => {
      try {
        await itemNotFound(err, item, 'NOT_FOUND')
        resolve(buildSuccObject('PASSWORD_CHANGED'))
      } catch (error) {
        reject(error)
      }
    })
  })
}

module.exports = { markResetPasswordAsUsed }
