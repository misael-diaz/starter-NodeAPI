const City = require('../../models/city')
const { matchedData } = require('express-validator')
const { isIDGood, handleError } = require('../../middleware/utils')
const { deleteItem } = require('../../middleware/db')

const deleteCity = async (req, res) => {
  try {
    req = matchedData(req)
    const id = await isIDGood(req.id)
    res.status(200).json(await deleteItem(id, City))
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { deleteCity }
