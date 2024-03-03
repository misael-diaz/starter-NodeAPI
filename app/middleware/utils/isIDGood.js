const mongoose = require('mongoose')
const { buildErrObject } = require('./buildErrObject')

const isIDGood = async (id = '') => {
  return new Promise((resolve, reject) => {
    const goodID = mongoose.Types.ObjectId.isValid(id)
    return goodID ? resolve(id) : reject(buildErrObject(422, 'ID_MALFORMED'))
  })
}

module.exports = { isIDGood }
