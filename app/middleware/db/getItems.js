const { buildErrObject } = require('../../middleware/utils')

const { listInitOptions } = require('./listInitOptions')
const { cleanPaginationID } = require('./cleanPaginationID')

const getItems = async (req = {}, model = {}, query = {}) => {
  const options = await listInitOptions(req)
  return new Promise((resolve, reject) => {
    model.paginate(query, options, (err, items) => {
      if (err) {
        return reject(buildErrObject(422, err.message))
      }
      resolve(cleanPaginationID(items))
    })
  })
}

module.exports = { getItems }
