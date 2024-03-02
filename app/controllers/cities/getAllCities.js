const { handleError } = require('../../middleware/utils')
const { getAllItemsFromDB } = require('./helpers')

const getAllCities = async (req, res) => {
  try {
    res.status(200).json(await getAllItemsFromDB())
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { getAllCities }
