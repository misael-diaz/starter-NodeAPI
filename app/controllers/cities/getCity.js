const { matchedData } = require('express-validator')
const City = require('../../models/city')
const { getItem } = require('../../middleware/db')
const { isIDGood, handleError } = require('../../middleware/utils')

const getCity = async (req, res) => {
  try {
    req = matchedData(req)
    const id = await isIDGood(req.id)
    res.status(200).json(await getItem(id, City))
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { getCity }
